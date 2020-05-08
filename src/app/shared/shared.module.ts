import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations:[AlertComponent],
  imports:[MaterialModule],
  exports:[AlertComponent]
})
export class SharedModule{}
