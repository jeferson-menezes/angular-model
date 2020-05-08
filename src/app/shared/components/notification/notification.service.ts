import { Injectable } from '@angular/core';
import { Notification } from '../../models/notification';
import { Subject } from 'rxjs';
import { AlertType } from '../../models/alert';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  notificationSubject: Subject<Notification> = new Subject<Notification>();

  success(message: string, title: string) {
    this.notification(AlertType.SUCCESS, message, title)
  }

  error(message: string, title: string) {
    this.notification(AlertType.ERROR, message, title)
  }

  warning(message: string, title: string) {
    this.notification(AlertType.WARNING, message, title)
  }

  info(message: string, title: string) {
    this.notification(AlertType.INFO, message, title)
  }

  private notification(alertType: AlertType, message: string, title: string) {
    this.notificationSubject.next(new Notification(alertType, message, title))
  }

  getNotification() {
    return this.notificationSubject.asObservable();
  }
}
