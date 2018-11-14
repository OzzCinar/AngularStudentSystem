import { Component, OnInit } from '@angular/core';
import { Student, Lists } from '../student-list/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  nationalId: string;
  students: Lists = new Lists();
  model: Student = new Student();
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(param => {
      this.nationalId = param["nationalId"]
      this.getStudent();
    })
  }

  ngOnInit() {
  }
  getStudent() {
    Lists.studentList.forEach(e => {
      if (e.nationalId == this.nationalId)
        this.model = e
    })

  }
  goBack() {
    this.router.navigate(["/studentList"])
  }
}
