import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthTokens } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://51.38.51.187:5050/api/v1/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }),

    }
    return this.http.get<any[]>(this.url, httpOptions)
  }
}
