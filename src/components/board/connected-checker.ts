import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { CheckerView, CheckerProps } from "./checker";
import { AppState } from "../../store/common";
import { moveChecker } from "../../store/actions";
import { AppDispatch } from "../../store";

type OwnProps = {
  checker: CheckerProps['checker'];
}

const mapStateToProps: MapStateToProps<
  Pick<CheckerProps, 'turn'>,
  OwnProps,
  AppState
> = (state) => ({
  turn: state.turn,
});

const mapDispatchToProps: MapDispatchToProps<
  Pick<CheckerProps, 'onMove'>,
  OwnProps
> = (dispatch: AppDispatch, ownProps) => ({
  onMove() { dispatch(moveChecker(ownProps.checker)); },
});

export const ConnectedChecker = connect(mapStateToProps, mapDispatchToProps)(CheckerView);
