import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { MainPageComponent } from './core/main-page/main-page.component';
import {CoreModule} from "./core/core-module";
import { AnTechComponent } from './core/an-tech/an-tech.component';
import {MaterialModule} from "./material/material.module";
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AnTechComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
