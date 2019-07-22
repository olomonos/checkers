import React from 'react';
import { RouteComponentProps } from "react-router";

import { Header } from '../components/header';
import { Board } from '../components/board';
import { ControlPanel } from "../components/control-panel";

import { parseQuery } from "../utils";

export const Chapaev: React.FC<RouteComponentProps> = props => (
  <div className="main-container">
    <Header title="Chapaev" subtitle={getSubtitle(props)} />
    <Board />
    <ControlPanel />
  </div>
);

const getSubtitle = (props: RouteComponentProps): string | undefined => {
  const goodwill = parseQuery(props.location.search).goodwill;
  switch (goodwill) {
    case 'yes':
      return 'Good choice!';
    case 'no':
      return 'Why not? You should give it a try.';
    default:
      return undefined;
  }
}
