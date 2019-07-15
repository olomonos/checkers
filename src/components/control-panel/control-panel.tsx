import React from 'react';

export type ControlPanelProps = {
  onPopulate(): void;
}

export const ControlPanelView: React.FC<ControlPanelProps> = props => (
  <div className="control-panel">
    <button
      type="button"
      className="btn"
      onClick={props.onPopulate}
    >
      Put checkers on the board
    </button>
  </div>
);
