import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessTutorComponent } from './business-tutor/business-tutor.component';
import { CareersComponent } from './careers/careers.component';
import { SchoolPeriodsComponent } from './school-periods/school-periods.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'schoolperiods', component: SchoolPeriodsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'business-tutor', component: BusinessTutorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
