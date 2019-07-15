import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';


export const Home: React.FC<RouteComponentProps> = props => {
  return (
    <div className="mainContainer">
      <Header title="Checkers" subtitle="Comming soon..." />
      <section>
        <p>Do you want to try Chapaev for now?</p>
        <ul className="unstyledList">
          <li>
            <Link
              className="navigtion-link"
              to="/chapaev?goodwill=yes"
            >
              Yes, good idea!
            </Link>
          </li>
          <li>
            <Link
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
