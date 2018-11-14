import { Component, OnInit } from '@angular/core';
import { Student, Lists } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsList:Student[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.studentsList=Lists.studentList;
  }

  route(){
    this.router.navigate(["/addStudent"])
  }
  route1(student){
    this.router.navigate(["/updateStudent"],{queryParams:{'nationalId':student.nationalId}})
  }

}
