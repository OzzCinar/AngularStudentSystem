import { Component, OnInit } from '@angular/core';
import { Lists, Lesson } from '../student-list/student';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessonList:Lesson[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.lessonList=Lists.lessonList;
  }
  route(){
    this.router.navigate(["/addLesson"])
  }
  addLesson(){
    this.router.navigate(["/addLesson"])
  }

}
