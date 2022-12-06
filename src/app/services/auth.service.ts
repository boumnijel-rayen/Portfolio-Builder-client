import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUp(user:any){
    return this.http.post('http://localhost:8000/portfolio/user/add/', user);
  }

  signIn(authUser:any){
    return this.http.post('http://localhost:8000/portfolio/user/login/', authUser);
  }
}
