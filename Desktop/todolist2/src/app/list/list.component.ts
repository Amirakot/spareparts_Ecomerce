import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnChanges {
  @Input() value: string = '';
  @Input() i = 0;
  @Output() removeItemEvent = new EventEmitter();
  // remove(value: string) {
  //   // console.log(value);

  // }
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
  remove(ind: any) {
    console.log(ind);
     this.removeItemEvent.emit(ind);
    // this.value.slice(i, i + 1);
    // this.value = this.value.filter((v, i) => {
    //   i != ind;
    // });
  }
  ngOnInit(): void {
    console.log(this.value);
  }
}
