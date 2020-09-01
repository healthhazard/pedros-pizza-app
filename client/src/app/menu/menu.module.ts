import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppMenuComponent } from './menu.component';

const ngModules = [CommonModule];

const matModules = [MatTableModule, MatCardModule, MatDialogModule];

@NgModule({
  declarations: [AppMenuComponent],
  imports: [...ngModules, ...matModules],
  exports: [AppMenuComponent],
})
export class AppMenuModule { }
