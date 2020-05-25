import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';

@Component({
  selector: 'app-softwaredev',
  templateUrl: './softwaredev.component.html',
  styleUrls: ['./softwaredev.component.css']
})
export class SoftwaredevComponent implements OnInit {

  details: Detail = DETAILS;

  constructor() { }

  ngOnInit() {
  }

}
