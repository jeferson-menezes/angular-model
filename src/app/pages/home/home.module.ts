import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SigninComponent, HomeComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule]
})
export class HomeModule { }
