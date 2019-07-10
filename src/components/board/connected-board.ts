import { connect, MapStateToProps } from "react-redux";
import { BoardView, BoardProps } from "./board";
import { AppState } from "../../store/common";

const mapStateToProps: MapStateToProps<BoardProps, null, AppState> = (state) => {
  return {
    field: state.field,
  }
}

export const Board = connect(mapStateToProps)(BoardView);
