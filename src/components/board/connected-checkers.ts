import { connect, MapStateToProps } from "react-redux";
import { CheckersView, CheckersProps } from "./checkers";
import { AppState } from "../../store/common";

const mapStateToProps: MapStateToProps<CheckersProps, null, AppState> = (state) => {
  return {
    checkers: state.checkers,
  }
}

export const Checkers = connect(mapStateToProps)(CheckersView);
