import { IStateBase } from "../../../../core/State";

export interface IRoomState {
  type: "pillar" | "wall" | "load";
}

export interface IImRoomState extends IStateBase<IRoomState> { }

export const initialRoomState = (state?: IRoomState): IRoomState => ({
  type: "load",
  ...state
})