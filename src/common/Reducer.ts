import { Reducer } from "redux";
import { IImState, initialState } from "./State";
import { fromJS } from "../core/Immutable";
import { IAction } from "../core/Action";
import { IImNumberBoxState } from "./NumberBox/state";
import { IImRoomState } from "../pages/StickDown/parts/Room/state";
import { initialMazeState } from "../pages/StickDown/parts/Maze/state";

type IReducer = (state: IImState, action: IAction) => IImState;

interface ActionMap {
  [K: string]: IReducer
}

const reducer: Reducer<IImState, IAction> = (state: IImState = fromJS(initialState()), action: IAction): IImState => {

  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;

export type COMMON_ACTIONS = "COMMON_NUMBERBOX_CHANGE" | "STICK_DOWN_CREATE_MAZE" | "STICK_DOWN_INIT_MAZE";

const actions: ActionMap = {
  COMMON_NUMBERBOX_CHANGE: (state: IImState, action: IAction) => {
    return state.updateIn(action.payload.path, (textBox: IImNumberBoxState) => {
      return textBox.set("value", action.payload.option.value);
    });
  },
  STICK_DOWN_CREATE_MAZE: (state: IImState, action: IAction) => {
    const directionMap = {
      0: { h: -1, w: 0 },
      1: { h: 0, w: -1 },
      2: { h: 0, w: 1 },
      3: { h: 1, w: 0 },
    }

    let direction: 0 | 1 | 2 | 3 = 0;
    do {
      direction = (Math.round(Math.random() * 100) % 4 as 0 | 1 | 2 | 3);
      // 高さが2かつ上の時または既に壁になっているとき
    } while ((action.payload.option.h === 2 && direction === 0) || !isLoad(state, action.payload.option.h, action.payload.option.w, directionMap[direction]))
    return state.setIn([
      "StickDown",
      "maze",
      "field",
      action.payload.option.h + directionMap[direction].h,
      action.payload.option.w + directionMap[direction].w,
      "type"
    ], "wall")
  },
  STICK_DOWN_INIT_MAZE: (state: IImState, action: IAction) => {
    return state.setIn(
      [
        "StickDown",
        "maze"
      ],
      fromJS(
        initialMazeState(),
        state.get("StickDown").get("maze").get("path").toJS()
      )
    );
  }
}
const defaultAction: IReducer = (state: IImState, action: IAction) => state;

const isLoad = (state: IImState, h: number, w: number, direction: { h: number, w: number }) => {
  const path = ["StickDown", "maze", "field", h + direction.h, w + direction.w];
  return state.hasIn(path) && (state.getIn(path) as IImRoomState).get("type") === "load";
}