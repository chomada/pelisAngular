import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  // {
  //   path: 'movies/:id',
  //   component: InfoComponent
  // },
  // {
  //   path: 'movies',
  //   component: MoviesComponent
  // },

   {
     path: 'movies',
    loadChildren: ()=> import ('./features/movies/movies.module').then(m=>m.MoviesModule)
   },
   {
    path: 'login',
   loadChildren: ()=> import ('./features/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'cart',
    component: CartComponent

  },
  {
    path: 'register',
    loadChildren: ()=> import ('./features/register/register.module').then(m=>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
