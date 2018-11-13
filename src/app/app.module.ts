import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {Routes, RouterModule} from '@angular/router'
import {ButtonModule} from 'primeng/button';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

const routes :Routes=[
{path: "studentList", component:StudentListComponent},
{path: "lessonList", component:LessonListComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StudentListComponent,
    AddStudentComponent,
    LessonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    TableModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
