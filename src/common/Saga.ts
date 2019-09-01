import { takeEvery, put } from "redux-saga/effects";
import { IAction } from "../core/Action";

export const SAGA_TAKEEVERY_ACTIONS = ["COMMON_TEXTBOX_CHANGE_SAGA"];
export default function* rootSaga() {
  yield takeEvery(SAGA_TAKEEVERY_ACTIONS, takeEverySaga)
}

const takeEverySaga = (action: IAction) => {
  const takeEverySagaSwitch = {
    COMMON_TEXTBOX_CHANGE_SAGA: (action: IAction) => {

    }
  }
}