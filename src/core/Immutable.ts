import Immutable from "immutable";

type Primitive = null | undefined | boolean | number | string;
export type fromJS<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? {
    0: Immutable.List<U>,
    1: Immutable.List<fromJS<U>>
  }[U extends Primitive ? 0 : 1]
  : Immutable.Record<{
    [K in keyof T]: fromJS<T[K]>
  }>;

export const fromJS = <T>(
  jsValue: T,
  reviver?: (
    key: string | number,
    sequence: Immutable.Collection.Keyed<string, any> | Immutable.Collection.Indexed<any>,
    path?: Array<string | number>
  ) => any
): fromJS<WithPath<T>> => {
  return Immutable.fromJS(createPath(jsValue), reviver);
}
type Path<T> = {
  [K in keyof T]: K extends "path" ? (string | number)[] : T[K]
} & { path: (string | number)[] };

export type WithPath<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? {
    0: U[],
    1: WithPath<U>[]
  }[U extends Primitive ? 0 : 1]
  : Path<{
    [K in keyof T]: WithPath<T[K]>
  }>;

export const createPath = (state: any, path: (string | number)[] = []): any => {
  if (state === undefined) {
    return state;
  } else if (Array.isArray(state)) {
    return state.map((elm, i) => createPath(elm, [...path, i]))
  } else if (typeof state == "object") {
    return Object.keys(state).reduce((ret, key) => {
      if (key !== "path") {
        ret[key] = createPath(state[key], [...path, key]);
      }
      return ret;
    }, { ...state, path })
  } else {
    return state;
  }
}
export default Immutable;