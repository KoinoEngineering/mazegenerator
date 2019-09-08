import { fromJS, WithPath } from "./Immutable";

export type IStateBase<T> = fromJS<WithPath<T>>;