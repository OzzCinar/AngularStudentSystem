import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';

const routes: Routes = [
  { path: "studentList", component: StudentListComponent },
  { path: "lessonList", component: LessonListComponent },
  { path: "addStudent", component: AddStudentComponent },
  { path: "updateStudent", component: UpdateStudentComponent },
  { path: "updateLesson", component: UpdateLessonComponent },
  { path: "addLesson", component: AddLessonComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
