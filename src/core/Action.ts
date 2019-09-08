import Immutable from "./Immutable";
import { Action } from "redux";
import { COMMON_ACTIONS } from "../common/Reducer";
import { SAGA_TAKEEVERY_ACTIONS } from "../common/Saga";

export interface IAction<A extends AllActions = AllActions> extends Action<A> {
  payload: Payload
  meta: any;
}

export interface IPayload {
  path: Immutable.List<string | number>,
  option?: any
}

export const generateAction = (type: AllActions, path: (Iterable<string | number>), option?: any): IAction => ({
  type,
  payload: new Payload(path, option),
  meta: {}
});

export class Payload implements IPayload {
  constructor(path: (Iterable<string | number>), option?: any) {
    this.path = Immutable.isImmutable(path) ? path : Immutable.fromJS(path);
    this.option = option;
  }

  path: Immutable.List<string | number>
  option?: any
}

type AllActions = COMMON_ACTIONS | SAGA_TAKEEVERY_ACTIONS