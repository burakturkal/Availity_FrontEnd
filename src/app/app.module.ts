import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component'

import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';

  @NgModule({
    declarations: [
      AppComponent,
      SecondComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      // HttpClientModule,
      // BrowserAnimationsModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
