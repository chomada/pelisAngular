import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from '@ngrx/store';


@Injectable()
class AppEffects{
  constructor(
    private store: Store,
    private actions: Actions
  ){}
  // movieAddItem$ = createEffect(()=>
  // this.actions.pipe(
  //   ofType(movieAddItem)
  // ));
  }
