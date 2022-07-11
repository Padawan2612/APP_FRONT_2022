import { Component, OnInit } from '@angular/core';
import { CareersService } from '../services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {
  constructor(private careersService: CareersService) {}

  ngOnInit(): void {}
  //

  findAll() {
    this.careersService.findAll().subscribe((response) => {
      console.log(response);
    });
  }

  findOne() {
    this.careersService.findOne(1).subscribe((response) => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.careersService.create(null).subscribe((response) => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.careersService.update(1, null).subscribe((response) => {
      console.log(response);
    });
  }
  delete() {
    this.careersService.delete(1).subscribe((response) => {
      console.log(response);
    });
  }
}

