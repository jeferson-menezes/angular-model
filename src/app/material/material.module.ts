import { NgModule } from '@angular/core';
import { NzNotificationModule, NzLayoutModule, NzMenuModule, NzIconModule } from 'ng-zorro-antd';

const NzMaterial = [
  NzLayoutModule,
  NzMenuModule,
  NzNotificationModule,
  NzIconModule
]

@NgModule({
  imports: [NzMaterial],
  exports: [NzMaterial]
})
export class MaterialModule { }
