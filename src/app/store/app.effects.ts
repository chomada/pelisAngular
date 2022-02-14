import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { switchMap,map } from "rxjs";
import { AdminService } from '../features/admin/services/admin.service';
import { movieAddItem, movieSetContent, movieDeleteItem } from './app.actions';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieEffects {

  constructor(
    private actions: Actions,
    private adminService: AdminService
  ) {}

//   movieAddItem$ = createEffect(() =>
//     this.actions.pipe(
//       ofType(movieAddItem),
//       switchMap(action => this.adminService.createMovie(action.item)),
//       map(data => movieSetContent({items: data.cartContent as Movie[]}))
//     )
//   );

//    movieDeleteItem$ = createEffect(() =>
//   this.actions.pipe(
//    ofType(movieDeleteItem),
//     switchMap(action => this.adminService.deleteMovie(action.itemId)),
//     map(data => movieSetContent({items: data.cartContent as Movie[]}))
//    )
//  );
}
