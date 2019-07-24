import React from 'react';

import './control-panel.scss';

export type ControlPanelProps = {
  onPopulate(): void;
}

export const ControlPanelView: React.FC<ControlPanelProps> = props => (
  <div className="control-panel">
    <button
      data-aid="BUTTON_POPULATE"
      type="button"
      className="btn"
      onClick={props.onPopulate}
    >
      Put checkers on the board
    </button>
  </div>
);
