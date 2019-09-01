import { IStateBase } from "./State";
import { Dispatch } from "redux";
import { IAction } from "./Action";

export interface IPropBase<T = {}> {
  state: IStateBase<T>;
  dispatch: Dispatch<IAction>;
}