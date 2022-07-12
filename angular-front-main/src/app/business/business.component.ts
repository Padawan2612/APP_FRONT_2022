import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/business.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private businessService:BusinessService) { }

  ngOnInit(): void {
  }
  //

  findAll(){
    this.businessService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.businessService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.businessService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.businessService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.businessService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }

}

