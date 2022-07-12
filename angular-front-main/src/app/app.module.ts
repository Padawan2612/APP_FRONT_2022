
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClient } from '@angular/common/http';
import { BusinessComponent } from './business/business.component';
import { BusinessTutorComponent } from './business-tutor/business-tutor.component';
@NgModule({
  declarations: [
    AppComponent,
       ProductsComponent,
       BusinessComponent,
       BusinessTutorComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
