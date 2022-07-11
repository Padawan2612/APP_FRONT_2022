import { Component, OnInit } from '@angular/core';
import { InstitutionalTutorsService } from '../services/institutional-tutors.service';

@Component({
  selector: 'app-institutional-tutors',
  templateUrl: './institutional-tutors.component.html',
  styleUrls: ['./institutional-tutors.component.css']
})
export class InstitutionalTutorsComponent implements OnInit {

  constructor(private institutionalTutorsService:InstitutionalTutorsService) { }

  ngOnInit(): void {
  }
  //

  findAll(){
    this.institutionalTutorsService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.institutionalTutorsService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.institutionalTutorsService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.institutionalTutorsService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.institutionalTutorsService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }

}
