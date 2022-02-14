import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProtectedRouteGuard } from './guards/protected-route.guard';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AdminModule } from './features/admin/admin.module';

const routes: Routes = [

   {

     path: 'movies',
     canActivate: [ProtectedRouteGuard],
    loadChildren: ()=> import ('./features/movies/movies.module').then(m=>m.MoviesModule),
    data:{menu:true}
   },
   {
    path: 'login',
   loadChildren: ()=> import ('./features/login/login.module').then(m=>m.LoginModule),
   data:{menu:false}
  },
  {
    path: 'cart',
    canActivate:[ProtectedRouteGuard],
    loadChildren: ()=> import ('./features/cart/cart.module').then(m=>m.CartModule),
    data:{menu:true}

  },
  {
    path: '',
    loadChildren: ()=> import ('./features/register/register.module').then(m=>m.RegisterModule),
    data:{menu:false}
  },
  {
    path: 'admin',
    canActivate:[AdminRoleGuard],
    loadChildren: ()=> import ('./features/admin/admin.module').then(m=>m.AdminModule),
    data:{menu:false}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
