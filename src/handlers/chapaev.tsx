import React from 'react';
import { RouteComponentProps } from "react-router";
import { Header } from '../components/header';
import { parseQuery } from "../utils";

export const Chapaev: React.FC<RouteComponentProps> = props => (
  <div className="chapaev">
    <Header title="Chapaev" subtitle={getSubtitle(props)} />
    <section>
      <p>Let's pretend there is a board here.</p>
    </section>
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

