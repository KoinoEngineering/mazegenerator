import { initialStickDown, IStickDownState } from "../pages/StickDown/state";
import { fromJS, WithPath } from "../core/Immutable";

export interface IState {
  StickDown: IStickDownState
}

export type IImState = fromJS<WithPath<IState>>
export const initialState = (state?: Partial<IState>): IState => {
  return {
    StickDown: initialStickDown(state && state.StickDown),
  };
}
