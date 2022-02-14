import { createPlatformFactory } from "@angular/core";
import { createAction, props } from "@ngrx/store";
import { Movie } from '../models/movie.model';

export const AppSetTitle = createAction(
  'Application Set Title',
  props<{title: string}>()
)
export const movieSetContent = createAction(
  'Movie- Set movie content',
  props<{items: Movie[]}>()
)
export const movieAddItem= createAction(
  'Movie - Add item',
  props<{item: Movie}>()
);
export const movieDeleteItem= createAction(
  'Movie - Delete item',
  props<{itemId: number}>()
);
