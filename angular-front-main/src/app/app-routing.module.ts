import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolPeriodsComponent } from './school-periods/school-periods.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'schoolperiods' , component: SchoolPeriodsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
