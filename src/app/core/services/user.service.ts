import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServerUrl = 'http://localhost:8080/api/v1';

  private users: User[] = [
    {
      username: 'gordonramsay',
      name: 'Gordon Ramsay',
    },
    {
      username: 'jamieoliver',
      name: 'Jamie Oliver',
    },
  ];

  constructor() {}

  public getUsers(): User[] {
    return this.users;
  }

  public getUser(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  public createUser(user: User): void {
    this.users.push(user);
  }

  public login(username: string): boolean {
    const user = this.getUser(username);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

}
