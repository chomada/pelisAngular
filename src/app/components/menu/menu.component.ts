import { Component, OnInit } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import { appTitleSelector } from '../../store/app.selectors';
import { AppState } from 'src/app/store/app-state.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }


    title$: Observable<string> = of('');
  ngOnInit(): void {
    this.title$ = this.store.pipe(
      select(appTitleSelector)
    )
  }

  cerrarSesion(){
    localStorage.removeItem('role');
    this.router.navigate(['']);
  }
}
