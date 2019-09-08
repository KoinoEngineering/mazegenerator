import { IStateBase } from "./State";
import { Dispatch } from "redux";
import { IAction } from "./Action";

export interface IPropBase<S = {}> {
  state: IStateBase<S>;
}

export type IPropsWithDispatch<S = {}> = IPropBase<S> & {
  dispatch: Dispatch<IAction>;
}

export type IPropsWithStyles<S = {}> = IPropBase<S> & {
  classes?: any;
}

export type IPropsWithStylesDispatch<S = {}> = IPropBase<S> & {
  dispatch: Dispatch<IAction>;
  classes?: any;
}