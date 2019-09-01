import { Reducer } from "redux";
import { IImState, initialState } from "./State";
import { fromJS } from "../core/Immutable";
import { IAction } from "../core/Action";
import { IImTextBoxState } from "./TextBox/state";

type IReducer = (state: IImState, action: IAction) => IImState;

interface ActionMap {
  [K: string]: IReducer
}

const reducer: Reducer<IImState, IAction> = (state: IImState = fromJS(initialState()), action: IAction): IImState => {

  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;

export type COMMON_ACTIONS = "COMMON_TEXTBOX_CHANGE";

const actions: ActionMap = {
  COMMON_TEXTBOX_CHANGE: (state: IImState, action: IAction) => {
    return state.updateIn(action.payload.path, (textBox: IImTextBoxState) => {
      return textBox.set("value", action.payload.option.value);
    });
  }
}
const defaultAction: IReducer = (state: IImState, action: IAction) => state;