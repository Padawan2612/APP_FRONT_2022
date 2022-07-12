import { Component, OnInit } from '@angular/core';
import { BusinessTutorService } from '../services/business-tutor.service';

@Component({
  selector: 'app-business-tutor',
  templateUrl: './business-tutor.component.html',
  styleUrls: ['./business-tutor.component.css']
})
export class BusinessTutorComponent implements OnInit {

  constructor(private business_tutorService:BusinessTutorService) { }

  ngOnInit(): void {
    this.findAll();
  }
  //

  findAll(){
    this.business_tutorService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.business_tutorService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.business_tutorService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.business_tutorService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.business_tutorService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }

}


