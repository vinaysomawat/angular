import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';

@Component({
  selector: 'app-androiddev',
  templateUrl: './androiddev.component.html',
  styleUrls: ['./androiddev.component.css']
})
export class AndroiddevComponent implements OnInit {

  details: Detail = DETAILS;

  constructor() { }

  ngOnInit() {
  }

}
