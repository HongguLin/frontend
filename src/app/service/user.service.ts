import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { SignupInfo } from '../entity/signup-info';
import { SigninInfo } from '../entity/signin-info';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private signupURL = 'http://localhost:8080/api/auth/signup';
  private signinURL = 'http://localhost:8080/api/auth/signin';

  constructor(private http: HttpClient) { }

  signUp(info: SignupInfo): Observable<String> {
    return this.http.post<any>(this.signupURL, info, httpOptions);
  }

  signIn(info: SigninInfo): Observable<any> {
    return this.http.post<any>(this.signinURL, info, httpOptions);
  }
}
