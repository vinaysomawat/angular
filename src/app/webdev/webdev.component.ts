import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['../app.component.css']
})
export class WebdevComponent implements OnInit {
  
  details: Detail = DETAILS;

  constructor() { }

  ngOnInit() {
  }

}
