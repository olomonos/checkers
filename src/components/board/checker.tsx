import React from 'react';
import { Checker } from "../../store/common";

import './checker.scss';

const WIDTH = 500;
const RADIUS = 40;
const FIELD_SIZE = 8;

export type CheckerProps = {
  checker: Checker;
}

export const CheckerView: React.FC<CheckerProps> = ({ checker }) => {
  if (checker.position === -1) {
    return null;
  } else {
    const checkerType = checker.type === 'White' ? 'white' : 'black';

    const topPosition = getTopPosition(checker.position);
    const leftPosition = getLeftPosition(checker.position);

    return (
      <div
        className={`checker ${checkerType}`}
        style={{top: `${topPosition}px`, left: `${leftPosition}px`}}
      />
    )
  }
};

const getTopPosition = (position: number) => {
  const coord = position % FIELD_SIZE;
  return coordToPixel(coord);
};

const getLeftPosition = (position: number) => {
  const coord = Math.floor(position / FIELD_SIZE);
  return coordToPixel(coord);
};

const coordToPixel = (coord: number) => ((WIDTH / FIELD_SIZE) * (coord + 0.75) - RADIUS) + 6;
