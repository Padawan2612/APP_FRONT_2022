import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {this.findAll()}
  //

  findAll() {
    this.studentsService.findAll().subscribe((response) => {
      console.log(response);
    });
  }

  findOne() {
    this.studentsService.findOne(1).subscribe((response) => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.studentsService.create(null).subscribe((response) => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.studentsService.update(1, null).subscribe((response) => {
      console.log(response);
    });
  }
  delete() {
    this.studentsService.delete(1).subscribe((response) => {
      console.log(response);
    });
  }
}
