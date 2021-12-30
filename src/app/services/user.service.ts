import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getList(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://61c8e5d5adee460017260e66.mockapi.io/api/users/');


  }
}
