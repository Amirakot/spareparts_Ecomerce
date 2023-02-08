import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  @Input() card = {
    createdAt: '',
    name: '',
    image: '',
    rate: 0,
    count: 0,
    description: '',
    price: '',
    reviews: [],
    id: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.card);
    // this.card = {};
  }
  redirect() {
    this.router.navigate(['detalis',this.card.id]);
  }
}
// function redirect() {
//   throw new Error('Function not implemented.');
// }

