import { ITextBoxState, initialTextBoxState } from "../../common/TextBox/state";
import { IMazeState, initialMazeState } from "./parts/Maze/state";

export interface IStickDownState {
  height: ITextBoxState;
  width: ITextBoxState;
  maze: IMazeState;
}

export const initialStickDown = (state?: Partial<IStickDownState>): IStickDownState => {
  return {
    height: initialTextBoxState(),
    width: initialTextBoxState(),
    maze: initialMazeState(),
    ...state
  }
}