import { AlertType } from './alert';

export class Notification {

  constructor(public readonly type: AlertType,
    public readonly message: string,
    public readonly title: string) {

  }
}
