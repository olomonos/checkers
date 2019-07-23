import React from 'react';
import { AppState } from "../../store/common";
import { ConnectedChecker } from "./connected-checker";

import './checkers.scss';

export type CheckersProps = {
  checkers: AppState['checkers'];
}

export const CheckersView: React.FC<CheckersProps> = ({ checkers }) => (
  <div className="checkers">
    {checkers.map((checker, index) => (
      <ConnectedChecker checker={checker} key={`checker-${index}`}/>
    ))}
  </div>
);
