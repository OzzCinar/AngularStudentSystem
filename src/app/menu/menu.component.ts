import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Öğrenci Listesi', icon: 'fa fa-plus', routerLink:"/studentList"},
      { label: 'Ders Listesi', icon: 'fa fa-download', routerLink:"/lessonList"},
      { label: 'Hava Durumu', icon: 'fa fa-cloud' }
    ];
  }

}
