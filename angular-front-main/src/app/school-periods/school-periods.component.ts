import { Component, OnInit } from '@angular/core';
import { SchoolPeriodService } from '../services/school-period.service';

@Component({
  selector: 'app-school-periods',
  templateUrl: './school-periods.component.html',
  styleUrls: ['./school-periods.component.css']
})
export class SchoolPeriodsComponent implements OnInit {

  constructor(private schoolPeriodsService:SchoolPeriodService ) { }

  ngOnInit(): void {
    this.findAll()
  }
  findAll(){
    this.schoolPeriodsService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.schoolPeriodsService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.schoolPeriodsService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.schoolPeriodsService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.schoolPeriodsService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }
}
