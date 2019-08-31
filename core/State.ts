import Immutable from 'immutable';
export type IStateBase<T = {}> = Immutable.Record.Factory<T>;
export const StateGenerator = <T>(defaultState: T): IStateBase<T> => Immutable.Record(defaultState);