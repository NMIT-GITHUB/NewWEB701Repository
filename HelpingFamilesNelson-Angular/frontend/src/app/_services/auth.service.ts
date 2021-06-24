import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // Handles login by sending a signin request with given username and password to AUTH_API
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  // Handles register by sending a signup request with given username, email, password, address and phone to AUTH_API
  register(username: string, email: string, password: string, address: string, phone: string, type: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      address,
      phone,
      type
    }, httpOptions);
  }

  // Handles upload by sending an uploadItem request with given username, categoryName, size, gender, age and other to AUTH_API
  upload(username: string, categoryName: string, size: string, colour: string, gender: string, age: number, other: string): Observable<any> {
    return this.http.post(AUTH_API + 'uploadItem', {
      username,
      categoryName,
      size,
      colour,
      gender,
      age,
      other
    }, httpOptions)
  }

  // Handles redeem by sending a redeem request with given username and value to AUTH_API
  redeem(username: string, value: string): Observable<any> {
    return this.http.post(AUTH_API + 'redeem', {
      username,
      value
    }, httpOptions)
  }
}
