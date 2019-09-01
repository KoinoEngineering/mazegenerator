export interface IRoomState {
  type: "pillar" | "wall" | "load";
}

export const initialRoomState = (state?: IRoomState): IRoomState => ({
  type: "load",
  ...state
})