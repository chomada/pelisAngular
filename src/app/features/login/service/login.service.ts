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
  private email:any = '';
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
          console.log(decodedToken);
          this.email = decodedToken?.email;
          this.userName = decodedToken?.userName;
          this.role = decodedToken?.role;

          localStorage.setItem('email', JSON.stringify(this.email));
          localStorage.setItem('role', JSON.stringify(this.role));
          console.log("VALIDETE CREDENTIALS: "+" email:"+ this.email+" username: "+this.userName+" role: "+this.role+" token: "+this.token)
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


    return {
      email: JSON.parse(localStorage.getItem("email") || ""),
      userName: this.userName,
      role:JSON.parse(localStorage.getItem("role") || ""),
      token:this.token


    }
  }
}
