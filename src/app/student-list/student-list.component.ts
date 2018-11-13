import { Component, OnInit } from '@angular/core';
import { Student, Lists } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsList:Lists= new Lists();
  constructor() { }

  ngOnInit() {
  }

}
