import React from 'react';
import { Checker, AppState } from "../../store/common";

import './checker.scss';

const WIDTH = 500;
const RADIUS = 40;
const FIELD_SIZE = 8;

export type CheckerProps = {
  checker: Checker;
  onMove(): void;
  turn: AppState['turn'];
}

export const CheckerView: React.FC<CheckerProps> = ({ checker, onMove, turn }) => {
  if (checker.position === -1) {
    return null;
  } else {
    const checkerType = checker.type === 'White' ? 'white' : 'black';

    const topPosition = getTopPosition(checker.position);
    const leftPosition = getLeftPosition(checker.position);

    return (
      <button
        className={`checker ${checkerType}`}
        style={{top: `${topPosition}px`, left: `${leftPosition}px`}}
        type="button"
        onClick={onMove}
        disabled={!isCheckerMovable(turn, checker.type)}
      />
    )
  }
};

const getLeftPosition = (position: number) => {
  const coord = position % FIELD_SIZE;
  return coordToPixel(coord);
};

const getTopPosition = (position: number) => {
  const coord = Math.floor(position / FIELD_SIZE);
  return coordToPixel(coord);
};

const coordToPixel = (coord: number) => ((WIDTH / FIELD_SIZE) * (coord + 0.75) - RADIUS) + 6;

const isCheckerMovable = (turn: AppState['turn'], checkerType: Checker['type']): boolean => {
  return turn === 'White' && checkerType === 'White';
};
