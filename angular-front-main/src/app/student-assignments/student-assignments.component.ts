import { Component, OnInit } from '@angular/core';
import { StudentAssignmentsService } from '../services/student-assignments.service';

@Component({
  selector: 'app-student-assignments',
  templateUrl: './student-assignments.component.html',
  styleUrls: ['./student-assignments.component.css']
})
export class StudentAssignmentsComponent implements OnInit {

  constructor(private studentAssignmentsService:StudentAssignmentsService) { }

  ngOnInit(): void {
  }
  //

  findAll(){
    this.studentAssignmentsService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.studentAssignmentsService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.studentAssignmentsService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.studentAssignmentsService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.studentAssignmentsService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }
}
