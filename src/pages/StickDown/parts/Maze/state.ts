import { initialRoomState, IRoomState } from "../Room/state";
import { IStateBase } from "../../../../core/State";

export interface IMazeState {
  field: IRoomState[][]
}

export interface IImMaseState extends IStateBase<IMazeState> { }

export const initialMazeState = (h: number = 11, w: number = 11): IMazeState => {
  let field: IRoomState[][] = Array<Array<IRoomState>>(h).fill([...Array(w).fill(initialRoomState())])
  field = field.map((row, h): IRoomState[] => {
    return row.map((room, w): IRoomState => {
      // 辺は壁
      if (h === 0 || h + 1 === field.length || w === 0 || w + 1 === row.length) {
        return { ...room, type: "wall" }
      } else if (!(h % 2) && !(w % 2)) {
        // 奇数ますは柱
        return { ...room, type: "pillar" }
      } else {
        return room;
      }
    })
  });
  return { field }
}