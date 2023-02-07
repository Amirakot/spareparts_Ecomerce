import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() value=[];
@Input() i=0;

  constructor() {

   }
remove(i:any){
console.log(this.i);
  this.value.splice(i,1)
}
  ngOnInit(): void {
  console.log(this.value);
  }

}
