import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
value:Array<any>;
// i:number=0
// i:number;
add(e:any): void{
    this.value.push(e);
// console.log(e)
console.log(this.value);
}
  constructor() {
this.value=[];

   }

  ngOnInit(): void {

  }

}
