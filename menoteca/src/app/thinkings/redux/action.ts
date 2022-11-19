import { ThinkingModel } from './../../models/thinking.model';
import { createAction, props } from "@ngrx/store";

export const enum thinkingTypeAction {
  LOAD_THINKINGS = '[LOAD_THINKINGS] Load thinkings',
  LOAD_THINKINGS_SUCCESS = '[LOAD_THINKINGS_SUCCESS] Load thinkings success',
  LOAD_THINKINGS_FAIL = '[LOAD_THINKINGS_FAIL] Load thinkings fail',

  LOAD_THINKING = '[LOAD_THINKING] Load thinking',
  LOAD_THINKING_SUCCESS = '[LOAD_THINKING_SUCCESS] Load thinking success',
  LOAD_THINKING_FAIL = '[LOAD_THINKING_FAIL] Load thinking fail',

  CREATE_THINKING = '[CREATE_THINKING] Create thinking',
  CREATE_THINKING_SUCCESS = '[CREATE_THINKING_SUCCESS] Create thinking success',
  CREATE_THINKING_FAIL = '[CREATE_THINKING_FAIL] Create thinking fail',

  UPDATE_THINKING = '[UPDATE_THINKING] Update thinking',
  UPDATE_THINKING_SUCCESS = '[UPDATE_THINKING_SUCCESS] Update thinking success',
  UPDATE_THINKING_FAIL = '[UPDATE_THINKING_FAIL] Update thinking fail',

  CLEAR_FORM = '[CLEAR_FORM] Clear form',

  DELETE_THINKING = '[DELETE_THINKING] Delete thinking',
  DELETE_THINKING_SUCCESS = '[DELETE_THINKING_SUCCESS] Delete thinking success',
  DELETE_THINKING_FAIL = '[DELETE_THINKING_FAIL] Delete thinking fail',

  LOADING = '[LOADING] Loading Thinking'
}

export const LoadThinkings = createAction(
  thinkingTypeAction.LOAD_THINKINGS
);

export const LoadThinkingsSuccess = createAction(
  thinkingTypeAction.LOAD_THINKINGS_SUCCESS,
  props<{ payload: ThinkingModel[], loading: boolean }>()
);

export const LoadThinkingsFail = createAction(
  thinkingTypeAction.LOAD_THINKINGS_FAIL,
  props<{ error: string }>()
);

export const LoadThinking = createAction(
  thinkingTypeAction.LOAD_THINKING
);

export const LoadThinkingSuccess = createAction(
  thinkingTypeAction.LOAD_THINKING_SUCCESS,
  props<{ payload: ThinkingModel }>()
);

export const LoadThinkingFail = createAction(
  thinkingTypeAction.LOAD_THINKING_FAIL,
  props<{ error: string }>()
);

export const CreateThinking = createAction(
  thinkingTypeAction.CREATE_THINKING,
  props<{ payload: ThinkingModel }>()
);

export const CreateThinkingSuccess = createAction(
  thinkingTypeAction.CREATE_THINKING_SUCCESS
);

export const CreateThinkingFail = createAction(
  thinkingTypeAction.CREATE_THINKING_FAIL,
  props<{ error: string }>()
);

export const UpdateThinking = createAction(
  thinkingTypeAction.UPDATE_THINKING,
  props<{ payload: ThinkingModel }>()
);

export const UpdateThinkingSuccess = createAction(
  thinkingTypeAction.UPDATE_THINKING_SUCCESS,
);

export const UpdateThinkingFail = createAction(
  thinkingTypeAction.UPDATE_THINKING_FAIL,
  props<{ error: string }>()
);

export const ClearForm = createAction(
  thinkingTypeAction.CLEAR_FORM,
  props<{ payload: boolean }>()
);

export const DeleteThinking = createAction(
  thinkingTypeAction.DELETE_THINKING,
  props<{ payload: ThinkingModel }>()
);

export const DeleteThinkingSuccess = createAction(
  thinkingTypeAction.DELETE_THINKING_SUCCESS,
);

export const DeleteThinkingFail = createAction(
  thinkingTypeAction.DELETE_THINKING_FAIL,
  props<{ error: string }>()
);

export const Loading = createAction(
  thinkingTypeAction.LOADING,
  props<{ payload: boolean }>()
);
