import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User, UserList } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://51.38.51.187:5050/api/v1/users';

  constructor(private http: HttpClient) { }

  getUserMe(): Observable<User> {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }),
    };
    
    return this.http.get<User>(`${this.url}/me`, httpOptions);
  }

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

  getUserById(id: string): Observable<User> {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }),
    }
    return this.http.get<User>(`${this.url}/${id}`, httpOptions);
  }

  updateUser(id: string, userData: User): Observable<void> {
    const { accessToken } = JSON.parse(localStorage.getItem('token')!)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      })
    }
    return this.http.put<void>(`${this.url}/${id}`,userData, httpOptions)
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
