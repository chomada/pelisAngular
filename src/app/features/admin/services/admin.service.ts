import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../../models/movie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getList(): Observable<Movie[]>{
    //return of (movieMock);
    return this.httpClient.get<Movie[]>('http://localhost:3000/api/movie');
}
createMovie(id:Number, name: String, duration: number, description: string,image: string): Observable<any>{

  return this.httpClient.post<boolean>('http://localhost:3000/api/movie',{
    id,
    name,
    duration,
    description,
    image
  })
}
deleteMovie(id:number){
  return this.httpClient.delete<boolean>(`http://localhost:3000/api/movie?id=${id}`)

}
updateMovie(id:number,name:string,duration:number,description:string,image:string):Observable<any>{

  return this.httpClient.put<boolean>(`http://localhost:3000/api/movie?id=${id}`,{
    id,name,duration,description,image
  })
}

closeAdmin(){
  localStorage.removeItem('role');
  this.router.navigate(['']);
}

}
