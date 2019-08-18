import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Locais } from "./models/locais"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './locais/local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule
  ],
  providers: [Locais],
  bootstrap: [AppComponent]
})
export class AppModule { }
