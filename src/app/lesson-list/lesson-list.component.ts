import { Component, OnInit } from '@angular/core';
import { Lists } from '../student-list/student';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessonList:Lists=new Lists();
  constructor() { }

  ngOnInit() {
  }

}
