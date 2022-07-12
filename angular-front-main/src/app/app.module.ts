
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ProductsComponent } from './products/products.component';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { LevelsComponent } from './levels/levels.component';
import { InstitutionalTutorsComponent } from './institutional-tutors/institutional-tutors.component';
=======
import { SchoolPeriodsComponent } from './school-periods/school-periods.component';
import { StudentsComponent } from './students/students.component';
>>>>>>> 3e6522422fc4d4c0f9c4e14f8c79f4287afb71d8
@NgModule({
  declarations: [
    AppComponent,
       ProductsComponent,
<<<<<<< HEAD
       LevelsComponent,
       InstitutionalTutorsComponent
=======
       SchoolPeriodsComponent,
       CareersComponent,
       StudentsComponent
>>>>>>> 3e6522422fc4d4c0f9c4e14f8c79f4287afb71d8
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
