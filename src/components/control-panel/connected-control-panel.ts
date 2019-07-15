import { connect, MapDispatchToProps } from "react-redux";

import { ControlPanelView, ControlPanelProps } from "./control-panel";
import { populateBoard } from "../../store/actions";

const mapDispatchToProps: MapDispatchToProps<
  Pick<ControlPanelProps, 'onPopulate'>,
  null
> = dispatch => ({
  onPopulate() { dispatch(populateBoard()); },
});

export const ControlPanel = connect(null, mapDispatchToProps)(ControlPanelView);
