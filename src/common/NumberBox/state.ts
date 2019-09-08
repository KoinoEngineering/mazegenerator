import { IStateBase } from "../../core/State";

export interface INumberBoxState {
  value: number
}

export type IImNumberBoxState = IStateBase<INumberBoxState>

export const initialNumberBoxState = (state?: Partial<INumberBoxState>): INumberBoxState => ({
  value: 0,
  ...state
})