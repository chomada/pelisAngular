import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { InfoComponent } from './components/info/info.component';
import { ProtectedRouteGuard } from '../../guards/protected-route.guard'

const routes: Routes=[
  {
    path:':id',

    component: InfoComponent
  },
  {
    path:'',

    component: MoviesComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesRoutingModule { }
