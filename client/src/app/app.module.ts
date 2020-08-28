import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { AppMenuModule } from './menu';
import { AppOrdersModule } from './orders';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@angular/common/locales/global/de';

const ngModules = [BrowserModule, BrowserAnimationsModule, HttpClientModule];

const matModules = [MatTabsModule];

const appModules = [AppRoutingModule, AppMenuModule, AppOrdersModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...ngModules, ...matModules, ...appModules],
  providers: [,],
  bootstrap: [AppComponent],
})
export class AppModule {}
