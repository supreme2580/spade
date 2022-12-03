import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
current: any = 1;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  first(){
    if(this.current === 1){
      this.current = 2
    }else if(this.current === 2){
      this.current = 3
    }else if(this.current === 3){
      this.current = 4
    }else if(this.current === 4){
      this.current = 5
    }else if(this.current === 5){
      this.current = 6
    }else if(this.current === 6){
      this.current = 7
    }else if(this.current === 7){
      this.current = 1
    }
  }


  back(){
    if(this.current === 1){
      this.router.navigate(['/index'])
    }else if(this.current === 2){
      this.current = 1
    }else if(this.current === 3){
      this.current = 2
    }else if(this.current === 4){
      this.current = 3
    }else if(this.current === 5){
      this.current = 4
    }else if(this.current === 6){
      this.current = 5
    }else if(this.current === 7){
      this.current = 6
    }

  }

}
