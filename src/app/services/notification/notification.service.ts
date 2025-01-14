import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { NotificationResponse } from '../../types/notification.types';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getNotifications(username: string) {
    return this.httpClient.get<NotificationResponse[]>(`${environment.api.notificationV1}?username=${username}`);
  }
  
  getUnreadNotifications(username: string) {
    return this.httpClient.get<NotificationResponse[]>(`${environment.api.notificationV1}/status/UNREAD?username=${username}`);
  }

  updateReadStatus(notificationId: number) {
    return this.httpClient.put(`${environment.api.notificationV2}/${notificationId}`, {status: 'READ'});
  }
}
