import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [MaterialModule, CommonModule]
})
export class CoreModule { }
