import { IStateBase } from "../../core/State";

export interface INumberBoxState {
  value: string
}

export type IImNumberBoxState = IStateBase<INumberBoxState>

export const initialNumberBoxState = (state?: Partial<INumberBoxState>): INumberBoxState => ({
  value: "0",
  ...state
})

export const changeNumberBox = (value: string) => (state: IImNumberBoxState): IImNumberBoxState => {
  const stdValue = (value !== "0" && value.charAt(0) === "0") ? value.substr(1) : value;
  return isNaN(Number(stdValue)) ? state : state.set("value", stdValue);
}