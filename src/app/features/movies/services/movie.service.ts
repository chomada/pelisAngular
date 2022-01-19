import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
   }
)
export class MovieService {

  private url = environment.moviesRestApi+'movies';

  constructor(
    private httpClient: HttpClient
  ) { }


  getList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('http://localhost:3000/api/movie');
  }
  getById(id:number): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`http://localhost:3000/api/movie/api?id=${id}`);

  }
}
