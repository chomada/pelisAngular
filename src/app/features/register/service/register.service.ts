import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {

  private url = environment.moviesRestApi+'users';

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser(nickname: String, email: String, password: string): Observable<any>{

    return this.httpClient.post<boolean>('http://localhost:3000/api/user',{
      nickname,
      email,
      password
    })
  }
}
