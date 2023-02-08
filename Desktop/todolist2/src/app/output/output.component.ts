import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  value: Array<any>;
  // i:number=0
  // i:number;
  add(e: any): void {
    this.value.push(e);
    // console.log(e)
    console.log(this.value);
  }
  remove(e: any): void {
    console.log(e, 'reeeeeeeeeeemove');
    this.value.splice(e, 1);
    console.log(this.value);
  }
  constructor() {
    this.value = [];
  }
  //  function remove(){

  //  }

  ngOnInit(): void {}
}
