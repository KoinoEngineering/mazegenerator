import { INumberBoxState, initialNumberBoxState } from "../../common/NumberBox/state";
import { IMazeState, initialMazeState } from "./parts/Maze/state";

export interface IStickDownState {
  height: INumberBoxState;
  width: INumberBoxState;
  maze: IMazeState;
}

export const initialStickDown = (state?: Partial<IStickDownState>): IStickDownState => {
  return {
    height: initialNumberBoxState(),
    width: initialNumberBoxState(),
    maze: initialMazeState(),
    ...state
  }
}