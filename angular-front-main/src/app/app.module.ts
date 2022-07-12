import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ProductsComponent } from './products/products.component';
<<<<<<< HEAD
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
=======
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { InstitutionalTutorsComponent } from './institutional-tutors/institutional-tutors.component';
import { LevelsComponent } from './levels/levels.component';
import { SchoolPeriodsComponent } from './school-periods/school-periods.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LevelsComponent,
    InstitutionalTutorsComponent,
    SchoolPeriodsComponent,
    CareersComponent,
    StudentAssignmentsComponent,
    StudentsComponent,
>>>>>>> ada5ff43b9d9e9f40cf7118dbc751cc41ea0a2de
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
