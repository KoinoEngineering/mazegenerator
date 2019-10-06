import { INumberBoxState, initialNumberBoxState } from "../../common/NumberBox/state";
import { IMazeState, initialMazeState } from "./parts/Maze/state";

export interface IStickDownState {
  height: INumberBoxState;
  width: INumberBoxState;
  maze: IMazeState;
}

export const initialStickDown = (state?: Partial<IStickDownState>): IStickDownState => {
  return {
    height: initialNumberBoxState({ textField: { label: "高さ", value: "11" } }),
    width: initialNumberBoxState({ textField: { label: "幅", value: "11" } }),
    maze: initialMazeState(),
    ...state
  }
}