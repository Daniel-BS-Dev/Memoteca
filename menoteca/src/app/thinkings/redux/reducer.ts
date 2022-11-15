import { Action, createReducer, on } from "@ngrx/store";
import * as formThinkingActions from "./action";
import { initialState } from "./state";

const _thinkingReducer = createReducer(
  initialState,
  on(formThinkingActions.LoadThinkingsSuccess, (state, { payload }) => ({
    ...state,
    thinkings: [...payload].reverse(),
    error: '',
  })),
);

export function thinkingReducer(state = initialState, action: Action) {
  return _thinkingReducer(state, action);
}
