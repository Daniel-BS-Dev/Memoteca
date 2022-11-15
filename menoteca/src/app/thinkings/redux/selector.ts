import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThinkingState } from "./state";

export const storeKey = 'thinkingSelector';

export const getThinkingsfeatureState = createFeatureSelector<ThinkingState>(storeKey);

export const getAllThikings = createSelector(
    getThinkingsfeatureState,
    (state: ThinkingState) => state.thinkings
);
