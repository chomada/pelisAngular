import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProtectedRouteGuard } from './guards/protected-route.guard';
import { AdminRoleGuard } from './guards/admin-role.guard';

const routes: Routes = [

   {

     path: 'movies',
     canActivate: [AdminRoleGuard],
    loadChildren: ()=> import ('./features/movies/movies.module').then(m=>m.MoviesModule)
   },
   {
    path: 'login',
   loadChildren: ()=> import ('./features/login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'cart',
    //canActivate:[ProtectedRouteGuard,AdminRoleGuard],
    loadChildren: ()=> import ('./features/cart/cart.module').then(m=>m.CartModule)

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
