
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClient } from '@angular/common/http';
import { LevelsComponent } from './levels/levels.component';
import { InstitutionalTutorsComponent } from './institutional-tutors/institutional-tutors.component';
@NgModule({
  declarations: [
    AppComponent,
       ProductsComponent,
       LevelsComponent,
       InstitutionalTutorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
