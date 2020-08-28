import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AppMenuComponent } from './menu.component';

const ngModules = [CommonModule];

const matModules = [MatTableModule];

@NgModule({
  declarations: [AppMenuComponent],
  imports: [...ngModules, ...matModules],
  exports: [AppMenuComponent],
})
export class AppMenuModule {}
