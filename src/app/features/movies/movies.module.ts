import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { InfoComponent } from './components/info/info.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MovieService } from './services/movie.service';
import { CartService } from '../cart/service/cart.service';





@NgModule({
  declarations: [
    MoviesComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
