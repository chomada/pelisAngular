import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: any = null;
  private email = '';
  private userName = '';
  private role= '';

  url = `${environment.restApi}login`;

  constructor(
    private httpClient: HttpClient
  ) { }

  validateCredentials(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(this.url, { email, password })
    .pipe (
      map(response => {
        if (response.status === 'OK') {
          this.token = response.token;
          const decodedToken: any = jwt_decode(this.token);
          this.email = decodedToken?.email;
          this.userName = decodedToken?.userName;
          this.role = decodedToken?.role;
          console.log(response)
          console.log("si anda", this.email)
          return true;

        } else {

          this.token = null;

          console.log("no anda")
          return false;
        }
      })
    )
  }

  getToken(): any {
    return this.token;
  }

  isUserLoggedIn() {
    return this.email !== '';
  }

  getUserInfo(): any {

    console.log("email:"+this.email)
    return {
      email: this.email,
      userName: this.userName,
      role:this.role,
      token:this.token
    }
  }
}
