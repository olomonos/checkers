import React from 'react';
import { AppState } from "../../store/common";
import { CheckerView } from "./checker";

import './board.scss';

export type BoardProps = {
  field: AppState['field'];
}

export const BoardView: React.FC<BoardProps> = ({ field }) => (
  <div className="board">
    {field.map((item, index) => (
      <div
        key={`board-${index}`}
        className="board__cell"
      >
        <CheckerView cellItem={item} />
      </div>
    ))}
  </div>
);
