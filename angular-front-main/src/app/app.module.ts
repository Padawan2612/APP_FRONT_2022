import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { CareersComponent } from './careers/careers.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StudentsComponent,
    CareersComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
