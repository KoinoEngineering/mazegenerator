import { IStateBase } from "../../core/State";

export interface ITextBoxState {
  value: number
}

export type IImTextBoxState = IStateBase<ITextBoxState>

export const initialTextBoxState = (state?: Partial<ITextBoxState>): ITextBoxState => ({
  value: 0,
  ...state
})