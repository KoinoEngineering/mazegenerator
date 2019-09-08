import { IStateBase } from "../../core/State";

export interface ITextBoxState {
  value: string
}

export type IImTextBoxState = IStateBase<ITextBoxState>

export const initialTextBoxState = (state?: Partial<ITextBoxState>): ITextBoxState => ({
  value: "",
  ...state
})