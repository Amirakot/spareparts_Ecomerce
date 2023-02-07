import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  add(value: string) {
    // console.log(value);
    this.newItemEvent.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
}
