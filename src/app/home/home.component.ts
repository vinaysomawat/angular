import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  details: Detail = DETAILS;


  constructor() { }

  ngOnInit() {
  }

}
