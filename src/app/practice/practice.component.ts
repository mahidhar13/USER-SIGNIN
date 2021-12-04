import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  cond1: boolean = true;
  cond2: boolean = false;
  displayProp: string = 'none';
  styleProp: string = 'red';
  number: number = 200;
  today: number = 2/12/2021;
  spaces: string = "My name is mahidhar";
  myName:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  readMore(){
    this.displayProp = 'block';
  }

}
