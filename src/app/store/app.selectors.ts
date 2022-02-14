import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state.model';
import { MovieState } from './movie-store.model';

export const appSelector = (state: any)=> state.app;

export const appTitleSelector = createSelector(
  appSelector,
  (state: AppState)=> state.title
  );

export const movieStateSelector = createFeatureSelector<MovieState>('movie');

export const movieSelector = createSelector(
  movieStateSelector,
  (state:MovieState)  => state.items
);
