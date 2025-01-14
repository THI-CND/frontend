import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { UserResponseV1, UserResponseV2 } from '../../types/user.types';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  getUsername(): string {
    let username = window.localStorage.getItem('username');

    if (username && username != '')
      return username;
    
    this.router.navigate(['/login']);
    return '';
  }

  setUsername(username: string) {
    window.localStorage.setItem('username', username);
  }

  getUsersV1(): Observable<UserResponseV1[]> {
    return this.httpClient.get<any>(`${environment.api.userV1}`).pipe(map(u => u.users));
  }

  getUserV1(username: string) {
    return this.httpClient.get<UserResponseV2>(`${environment.api.userV1}/${username}`);
  }

  createUserV1(user: UserResponseV2) {
    return this.httpClient.post<UserResponseV2>(`${environment.api.userV1}`, user);
  }
  
  updateUserV1(user: UserResponseV2) {
    return this.httpClient.patch<UserResponseV2>(`${environment.api.userV1}`, user);
  }

  deleteUserV1(username: string) {
    return this.httpClient.delete<UserResponseV2>(`${environment.api.userV1}`, { body: { username }});
  }

}
