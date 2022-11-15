import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThinkingState } from "./state";

export const storeKey = 'thinkingSelector';

export const getThinkingsfeatureState = createFeatureSelector<ThinkingState>(storeKey);

export const getAllThinkings = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.thinkings
);

export const getThinking = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.thinking
);

export const editThinking = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.edit
);
