import { Component, OnInit } from '@angular/core';
import { Lists, Student } from '../student-list/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  model : Student= new Student();
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(["/studentList"])
  }

}