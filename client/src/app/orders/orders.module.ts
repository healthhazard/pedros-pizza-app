import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AppOrdersComponent } from './orders.component';
import { AppOrderComponent } from './order/order.component';

const ngModules = [CommonModule, ReactiveFormsModule];
const components = [AppOrdersComponent, AppOrderComponent]
const additionalModules = [ToastrModule.forRoot()]
const matModules = [
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatDialogModule
];

@NgModule({
  declarations: [...components],
  imports: [...ngModules, ...matModules, ...additionalModules],
  exports: [...components],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class AppOrdersModule { }
