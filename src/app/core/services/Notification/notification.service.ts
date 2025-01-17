import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
      private notification: NzNotificationService,
      
    ){}

    createNotification(type: string, mensaje:string): void {
      this.notification.create(
        type,
        'Notification Title',
        mensaje
      );
    }
}
