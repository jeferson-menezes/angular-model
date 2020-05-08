import { Component } from '@angular/core';
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Notification } from '../../models/notification';
import { NotificationService } from './notification.service';

@Component({
  selector: 'adm-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {

  constructor(private notificationService: NotificationService,
    private notification: NzNotificationService) {
    this.notificationService
      .getNotification()
      .subscribe(notification => this.showNotification(notification))
  }

  showNotification(notification: Notification) {

    this.notification.create(notification.type, notification.title, notification.message);
  }
}
