import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';

import './home.scss';

export const Home: React.FC<RouteComponentProps> = props => {
  return (
    <div className="main-container">
      <Header title="Checkers" subtitle="Coming soon..." />
      <section className="choice-section">
        <p>Do you want to try Chapaev for now?</p>
        <ul className="unstyledList">
          <li>
            <Link
              data-aid="LINK_TO_CHAPAEV"
              className="navigtion-link"
              to="/chapaev?goodwill=yes"
            >
              Yes, good idea!
            </Link>
          </li>
          <li>
            <Link
              data-aid="LINK_TO_CHECKERS"
              className="navigtion-link"
              to="/chapaev?goodwill=no"
            >
              No, thank you.
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
