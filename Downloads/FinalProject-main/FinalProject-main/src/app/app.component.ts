import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isloading:boolean;
  constructor(private loader:LoaderService){
    this.isloading = false

    this.loader.isloading.subscribe((data)=>{
      this.isloading = data
    })
  }
}
