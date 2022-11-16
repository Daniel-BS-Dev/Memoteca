import { Action, createReducer, on } from "@ngrx/store";
import * as formThinkingActions from "./action";
import { initialState } from "./state";

const _thinkingReducer = createReducer(
  initialState,
  on(formThinkingActions.LoadThinkingsSuccess, (state, { payload, loading }) => ({
    ...state,
    thinkings: [...payload].reverse(),
    loading,
  })),

  on(formThinkingActions.LoadThinkingsFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(formThinkingActions.LoadThinkingSuccess, (state, { payload }) => ({
    ...state,
    thinking: payload,
    error: '',
  })),

  on(formThinkingActions.LoadThinkingFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(formThinkingActions.CreateThinking, (state, { payload }) => ({
    ...state,
    users: [...state.thinkings, payload],
    error: '',
  })),

  on(formThinkingActions.CreateThinkingFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(formThinkingActions.UpdateThinking, (state, { payload }) => ({
    ...state,
    users: [...state.thinkings].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
  })),

  on(formThinkingActions.UpdateThinkingFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(formThinkingActions.ClearForm, (state, { payload }) => ({
    ...state,
    edit: payload,
  })),

  on(formThinkingActions.DeleteThinking, (state, { payload }) => ({
    ...state,
    thinkings: [...state.thinkings].filter((x) => x.id != payload.id),
  })),

  on(formThinkingActions.DeleteThinkingFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(formThinkingActions.ClearForm, (state, { payload }) => ({
    ...state,
    loading: payload,
  })),
);

export function thinkingReducer(state = initialState, action: Action) {
  return _thinkingReducer(state, action);
}
