import { ITextBoxState, initialTextBoxState } from "../../common/TextBox/state";

interface IUnit {
  type: "pillar" | "wall" | "load";
}

export interface IStickDownState {
  height: ITextBoxState;
  width: ITextBoxState;
  table: IUnit[][];
}

export const initialStickDown = (state?: Partial<IStickDownState>): IStickDownState => {
  return {
    height: initialTextBoxState(),
    width: initialTextBoxState(),
    table: [],
    ...state
  }
}