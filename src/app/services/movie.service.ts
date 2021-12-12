import { Injectable } from '@angular/core';
import { movieMock } from './movie.mock';
import { Observable,of } from 'rxjs';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getList(): Observable<Movie[]>{
    return of (movieMock);
  }
}
