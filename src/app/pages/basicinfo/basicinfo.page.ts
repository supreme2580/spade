import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.page.html',
  styleUrls: ['./basicinfo.page.scss'],
})
export class BasicinfoPage implements OnInit {

  current_step = 1;

  constructor() { }

  ngOnInit() {
  }

  goToNext(){
    this.current_step = this.current_step + 1;
  }

  goToPrevious(){
    this.current_step = this.current_step - 1;
  }

}
