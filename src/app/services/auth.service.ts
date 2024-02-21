import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthTokens, User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://51.38.51.187:5050/api/v1/auth/';

  constructor(private http: HttpClient) { }

  register(userData: User) {
    return this.http.post(`${this.url}sign-up`, userData)
  }

  login(userData: User): Observable<AuthTokens> {
    return this.http.post<AuthTokens>(`${this.url}log-in`, userData)
  }

  
}
