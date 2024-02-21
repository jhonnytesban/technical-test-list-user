import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  UserList } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://51.38.51.187:5050/api/v1/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserList> {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }),
    }
    return this.http.get<UserList>(this.url, httpOptions)
  }

  deleteUser(id: string): Observable<void> {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }),
    }
    return this.http.delete<void>(`${this.url}/${id}`, httpOptions)
  }
}
