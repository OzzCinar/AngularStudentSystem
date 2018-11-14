import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { Routes, RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';




import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateLessonComponent } from './update-lesson/update-lesson.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StudentListComponent,
    AddStudentComponent,
    LessonListComponent,
    UpdateStudentComponent,
    UpdateLessonComponent,
    AddLessonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    TableModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
