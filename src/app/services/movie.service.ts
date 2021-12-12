import { Injectable } from '@angular/core';
import { movieMock } from './movie.mock';
import { Observable,of } from 'rxjs';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getDetail(id:number): Observable<Movie | undefined>{
    return of (movieMock.find(movie=> movie.id==id))
  }
  getList(): Observable<Movie[]>{
    return of (movieMock);
  }
}
