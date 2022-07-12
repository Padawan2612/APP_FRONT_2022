import { Component, OnInit } from '@angular/core';
import { LevelsService } from '../services/levels.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  constructor(private levelsService:LevelsService) { }

  ngOnInit(): void {
  }
  //

  findAll(){
    this.levelsService.findAll().subscribe(response=> {
      console.log(response);
    })
  }

  findOne(){
    this.levelsService.findOne(1).subscribe(response=> {
      console.log(response);
    })
  }
  create(payload:any){
    this.levelsService.create(null).subscribe(response=> {
      console.log(response);
    })
  }

  update(payload:any){
    this.levelsService.update(1,null).subscribe(response=> {
      console.log(response);
    })
  }
  delete(){
    this.levelsService.delete(1).subscribe(response=> {
      console.log(response);
    })
  }

}
