import { IStateBase } from "../../core/State";

export interface INumberBoxState {
  value: string
}

export type IImNumberBoxState = IStateBase<INumberBoxState>

export const initialNumberBoxState = (state?: Partial<INumberBoxState>): INumberBoxState => ({
  value: "0",
  ...state
})

export const changeNumberBox = (value: any) => (state: IImNumberBoxState): IImNumberBoxState => {
  return isNaN(Number(value)) ? state : state.set("value", value);
}