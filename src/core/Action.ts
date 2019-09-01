import Immutable from "./Immutable";
import { Action } from "redux";

export interface IAction extends Action {
  payload: IPayload
  meta: any;
}

export interface IPayload {
  path: Immutable.List<string>,
  option?: any
}