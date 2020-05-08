import { Component, Input } from '@angular/core';
import Swal from "sweetalert2/dist/sweetalert2";
import { Alert } from '../../models/alert';
import { ToastService } from './toast.service';

@Component({
  selector: 'adm-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent {
  alerts: Alert[] = [];

  constructor(private toastService: ToastService) {
    this.toastService
      .getAlert()
      .subscribe(alert => {
        this.showToast(alert)
      })
  }
  showToast(alert: Alert) {

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: alert.time || 4000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    })

    Toast.fire({
      title: alert.message,
      icon: alert.type
    })
  }
}
