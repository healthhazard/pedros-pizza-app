import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppOrdersComponent } from './orders.component';

const ngModules = [CommonModule, ReactiveFormsModule];

const matModules = [
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [AppOrdersComponent],
  imports: [...ngModules, ...matModules],
  exports: [AppOrdersComponent],
})
export class AppOrdersModule {}
