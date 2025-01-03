import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerModule } from './ui/container/container.module';
import { SharedModule } from './ui/@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { Composant1Component } from './composant1/composant1.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ContainerModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
