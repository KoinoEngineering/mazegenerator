import { initialRoomState, IRoomState } from "../Room/state";

export interface IMazeState {
  maze: IRoomState[][]
}

export const initialMazeState = (state?: IMazeState): IMazeState => {
const maze:IRoomState[][] = Array<Array<IRoomState>>(101).fill([...Array(101).fill(initialRoomState())]).map((row,h):IRoomState[]=>{
  return row.map((room,w):IRoomState=>{
    // 辺は壁
    if(h === 0 || h+1 === maze.length || w === 0|| w*1=== row.length){
      return {...room,type:"wall"}
    } else if(!(h%2) ||!(w%2)){
      // 奇数ますは柱
      return {...room,type:"wall"}
    } else {
      return room;
    }
  })
});
return {maze}
}