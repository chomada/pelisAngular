import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  private url = environment.moviesRestApi+'users';

  constructor(
    private httpClient: HttpClient
  ) { }


}
