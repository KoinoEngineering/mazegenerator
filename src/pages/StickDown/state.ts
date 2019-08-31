import { StateGenerator } from "../../core/State";

interface IUnit {
  type: "pillar" | "wall" | "load";
}

export interface IStickDownState {
  height: number;
  width: number;
  table: IUnit[][];
}

export default class StickDownState extends StateGenerator<IStickDownState>({
  height: 0,
  width: 0,
  table: []
}) {

}
