import { createSelector } from "reselect";

const baseState = state => state.postsReducer;

export const posts = createSelector(baseState, state => state.posts);
export const loading = createSelector(baseState, state => state.loading);
export const error = createSelector(baseState, state => state.error);