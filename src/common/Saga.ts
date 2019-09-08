import { fork, put, select, takeEvery } from "redux-saga/effects";
import { IAction } from "../core/Action";
import Immutable from "../core/Immutable";
import { IImMaseState } from "../pages/StickDown/parts/Maze/state";
import { IImRoomState } from "../pages/StickDown/parts/Room/state";
import { IImState } from "./State";

const SAGA_TAKEEVERY_ACTIONS: (SAGA_TAKEEVERY_ACTIONS)[] = [
  "PUT_COMMON_NUMBERBOX_CHANGE",
  "STICK_DOWN_GNENRATE_START",
  "STICK_DOWN_GNENRATE"
];
export type SAGA_TAKEEVERY_ACTIONS = "PUT_COMMON_NUMBERBOX_CHANGE" | "STICK_DOWN_GNENRATE_START" | "STICK_DOWN_GNENRATE"
export default function* rootSaga() {
  yield takeEvery(SAGA_TAKEEVERY_ACTIONS, takeEverySaga)
}

function* takeEverySaga(action: IAction) {
  const state: IImState = yield select();
  switch (action.type) {
    case "PUT_COMMON_NUMBERBOX_CHANGE":
      yield fork(PUT_COMMON_NUMBERBOX_CHANGE, action);
      break;
    case "STICK_DOWN_GNENRATE_START":
      yield fork(STICK_DOWN_GNENRATE_START, state.get("StickDown").get("maze"))
      break;
    case "STICK_DOWN_GNENRATE":
      yield fork(STICK_DOWN_GNENRATE, action.meta.pillarList)
      break;
    default:
      break;
  }
}

function* PUT_COMMON_NUMBERBOX_CHANGE(action: IAction) {
  yield put<IAction>({
    ...action,
    type: "COMMON_NUMBERBOX_CHANGE"
  });
}

function* PUT_STICK_DOWN_GNENRATE(action: IAction<"STICK_DOWN_GNENRATE">) {
  yield put(action);
}

function* STICK_DOWN_GNENRATE_START(maze: IImMaseState) {
  yield put<IAction>({
    type: "STICK_DOWN_INIT_MAZE",
    payload: {
      path: maze.get("path")
    },
    meta: {}
  });
  yield put<IAction>({
    type: "STICK_DOWN_GNENRATE",
    payload: {
      path: maze.get("path")
    },
    meta: {
      pillarList: (
        maze.get("field")
          .flatten(true) as Immutable.List<IImRoomState>
      ).filter(room => room.get("type") === "pillar")
    }
  })
}

function* STICK_DOWN_GNENRATE(pillerList: Immutable.List<IImRoomState>) {
  const target = pillerList.first<IImRoomState>();

  if (target) {
    yield put<IAction>({
      type: "STICK_DOWN_CREATE_MAZE",
      payload: {
        path: target.get("path"),
        option: {
          h: target.get("path").get(target.get("path").size - 2),
          w: target.get("path").get(target.get("path").size - 1),
        },
      },
      meta: {}
    });
    yield delay(1000).then((ms) => { console.log("delay " + ms + "ms") })
    yield fork(PUT_STICK_DOWN_GNENRATE, {
      type: "STICK_DOWN_GNENRATE",
      payload: {
        path: target.get("path")
      },
      meta: {
        pillarList: pillerList.shift()
      }
    });
  }
}

const delay = (ms: number) => {
  return new Promise<number>((res, rej) => {
    setTimeout(() => {
      res(ms);
    }, ms);
  })
}