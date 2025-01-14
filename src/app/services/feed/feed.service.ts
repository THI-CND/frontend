import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFeed(username: string) {
    return this.httpClient.get<any[]>(`${environment.api.feedV1}/${username}/1`);
  }
}
