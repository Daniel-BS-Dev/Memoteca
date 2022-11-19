import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThinkingState } from "./state";

export const storeKey = 'thinkingSelector';

export const getThinkingsfeatureState = createFeatureSelector<ThinkingState>(storeKey);

export const getAllThinkings = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.thinkings
);

export const filterThinkings = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState, props: { name: any }) =>
    state.thinkings.filter((el: any) =>
      el.author.toLowerCase().includes(props.name.toLowerCase()))
);

export const pageThinkings = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState, props: { total: number }) =>
    state.thinkings.slice(0, props.total)
);

export const getThinking = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.thinking
);

export const editThinking = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.edit
);

export const loadingThinking = createSelector(
  getThinkingsfeatureState,
  (state: ThinkingState) => state.loading
);

