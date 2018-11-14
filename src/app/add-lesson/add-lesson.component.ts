import { Component, OnInit } from '@angular/core';
import { Lists, Lesson } from '../student-list/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
model : Lesson = new Lesson();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  save(){
    Lists.lessonList.push(this.model)
    this.goBack();
  }

  goBack(){
    this.router.navigate(['/lessonList'])
  }

}
