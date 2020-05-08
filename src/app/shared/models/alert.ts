export class Alert {

  constructor(public readonly type: AlertType,
    public readonly message: string,
    public readonly time?: number) {

  }
}

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}
