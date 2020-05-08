import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertService } from './alert.service';
import Swal from "sweetalert2/dist/sweetalert2";

@Component({
  selector: 'adm-alert',
  templateUrl:'./alert.component.html'
})
export class AlertComponent {
  @Input() timeout = 4000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService
      .getAlert()
      .subscribe(alert => {
        this.showAlert(alert)
      })
  }
  showAlert(alert: Alert) {

    Swal.fire({
      position: "center",
      title: alert.message,
      icon: alert.type,
      timer: alert.time || 4000,
      showConfirmButton: true
    })
  }
}
