import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  create_account: any = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  proceedToOnboarding(){
    this.router.navigate(['basicinfo'])
  }

  createAccount(){
    this.create_account = true;
  }

}
