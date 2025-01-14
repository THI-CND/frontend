import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  getUsersV1() {
    return this.httpClient.get<any[]>('/api/v1/users');
  }

  getUserV1(username: string) {
    return this.httpClient.get<any>(`/api/v1/users/${username}`);
  }

}
