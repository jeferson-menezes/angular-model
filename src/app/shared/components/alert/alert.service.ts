import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from '../../models/alert';

@Injectable({ providedIn: "root" })
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string, time: number) {
    this.alert(AlertType.SUCCESS, message, time)
  }

  error(message: string, time: number) {
    this.alert(AlertType.ERROR, message, time)
  }

  warning(message: string, time: number) {
    this.alert(AlertType.WARNING, message, time)
  }

  info(message: string, time: number) {
    this.alert(AlertType.INFO, message, time)
  }

  private alert(alertType: AlertType, message: string, time?: number) {
    this.alertSubject.next(new Alert(alertType, message, time))
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
