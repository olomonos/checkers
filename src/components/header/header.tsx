import React from "react";
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { AppState } from "../../store/common";
import { getRandomInteger } from "../../store/actions";
import { AppDispatch } from "../../store";

import './header.scss';
import { RouteComponentProps, withRouter } from "react-router";
import { parseQuery } from "../../utils";

type OwnProps = RouteComponentProps;

type Props = {
  title: string;
  subtitle?: string;
  onMount?(): void;
}

class HeaderView extends React.Component<Props> {
  render() {
    const {title, subtitle} = this.props;
    return (
      <header className="header">
        <h1 className="header__heroText">{title}</h1>
        {subtitle && <h6>{subtitle}</h6>}
      </header>
    );  
  }
  componentDidMount() {
    const {onMount} = this.props;
    onMount && onMount();
  }
}

const mapStateToProps: MapStateToProps<
  Pick<Props, 'title' | 'subtitle'>,
  OwnProps,
  AppState
> = (state, props) => ({
  title: `${getTitle(props)} (${state.randomInteger === null ? 'loading' : state.randomInteger})`,
  subtitle: getSubtitle(props)
});

const mapDispatchToProps: MapDispatchToProps<
  Pick<Props, 'onMount'>,
  OwnProps
> = (dispatch: AppDispatch) => ({
  onMount() {dispatch(getRandomInteger(0, 9))}
});

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);

export const Header = withRouter(ConnectedHeader);

const getTitle = (props: RouteComponentProps): string => {
  switch (props.location.pathname) {
    case '/chapaev':
      return 'Chapaev';
    case '/':
    case '/home':
      return 'Checkers';
    default: 
      return 'Not Found';
  }
}

const getSubtitle = (props: RouteComponentProps): string | undefined => {
  if (props.location.pathname === '/chapaev') {
    const goodwill = parseQuery(props.location.search).goodwill;
    switch (goodwill) {
      case 'yes':
        return 'Good choice!';
      case 'no':
        return 'Why not? You should give it a try.';
      default:
        return undefined;
    }
  } else if (
    props.location.pathname === '/' ||
    props.location.pathname === '/home'
  ) {
    return 'Coming soon...';
  }
}
