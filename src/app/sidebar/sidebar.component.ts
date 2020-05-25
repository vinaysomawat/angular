import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  details: Detail = DETAILS;

  constructor() { }

  ngOnInit() {
  }

}
