import { Injectable } from '@angular/core';
import { movieMock } from './movie.mock';
import { Observable,of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
  //{
  //providedIn: MoviesModule
//}
)
export class MovieService {

  private url = environment.moviesRestApi+'movies';

  constructor(
    private httpClient: HttpClient
  ) { }
  // getDetail(id:number): Observable<Movie | undefined>{
  //   return of (movieMock.find(movie=> movie.id==id))
  //}

  getList(): Observable<Movie[]>{
    //return of (movieMock);
    return this.httpClient.get<Movie[]>(this.url);
  }
  getById(id:number): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.url}/${id}`);

  }
}
