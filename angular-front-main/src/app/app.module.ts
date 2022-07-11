
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClient } from '@angular/common/http';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
@NgModule({
  declarations: [
    AppComponent,
       ProductsComponent,
       StudentAssignmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
