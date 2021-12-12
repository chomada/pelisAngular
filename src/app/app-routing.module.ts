import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
const routes: Routes = [
  {
    path: 'movies/:id',
    component: InfoComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
