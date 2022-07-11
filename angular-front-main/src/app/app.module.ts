import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ProductsComponent } from './products/products.component';
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
    StudentsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
