import { Component, OnInit } from '@angular/core';
import { Detail } from '../shared/detail';
import { DETAILS } from '../shared/details';

@Component({
  selector: 'app-cpprofile',
  templateUrl: './cpprofile.component.html',
  styleUrls: ['./cpprofile.component.css']
})
export class CpprofileComponent implements OnInit {

  details: Detail = DETAILS;
  
  constructor() { }

  ngOnInit() {
  }

}
