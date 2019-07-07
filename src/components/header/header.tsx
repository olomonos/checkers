import React from "react";
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { AppState } from "../../store/common";
import { getRandomInteger } from "../../store/actions";
import { AppDispatch } from "../../store";

import './header.scss';

export type Props = {
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
  Pick<Props, 'title'>,
  Props,
  AppState
> = (state, props) => ({
  title: `${props.title} (${state.randomInteger === null ? 'loading' : state.randomInteger})`
});

const mapDispatchToProps: MapDispatchToProps<
  Pick<Props, 'onMount'>,
  Props
> = (dispatch: AppDispatch) => ({
  onMount() {dispatch(getRandomInteger(0, 9))}
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
