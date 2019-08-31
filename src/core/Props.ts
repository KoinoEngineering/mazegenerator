import { IStateBase } from "./State";

export interface IPropBase<T = {}> {
  state: IStateBase<T>;
}