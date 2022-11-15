import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThinkingState } from "./state";

export const storeKey = 'thinkingSelector';

export const getUsersfeatureState = createFeatureSelector<ThinkingState>(storeKey);

export const getAllUsers = createSelector(
    getUsersfeatureState,
    (state: ThinkingState) => state.thinkings.reverse()
);
