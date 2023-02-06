import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  name: string = 'katie reed';
  detalis:string='we Developer&Designer';
  btn:string='contact me';
  constructor() {}

  ngOnInit(): void {}
}
