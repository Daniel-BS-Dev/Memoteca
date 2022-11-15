import { ThinkingModel } from './../../models/thinking.model';
import { createAction, props } from "@ngrx/store";

export const enum userTypeAction {
  LOAD_THINKINGS = '[LOAD_THINKINGS] Load thinkings',
  LOAD_THINKINGS_SUCCESS = '[LOAD_THINKINGS_SUCCESS] Load thinkings success'
}

export const LoadThinkings = createAction(
  userTypeAction.LOAD_THINKINGS
);

export const LoadThinkingsSuccess = createAction(
  userTypeAction.LOAD_THINKINGS_SUCCESS,
  props<{ payload: ThinkingModel }>()
);

