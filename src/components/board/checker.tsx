import React from 'react';
import { Checker } from "../../store/common";

import './checker.scss';

export type CheckerProps = {
  cellItem: Checker;
}

export const CheckerView: React.FC<CheckerProps> = ({ cellItem }) => {
  if (cellItem === 'Empty') {
    return null;
  } else {
    return (
      <div className={`checker${cellItem === 'White' ? ' white' : ' black'}`} />
    )
  }
};
