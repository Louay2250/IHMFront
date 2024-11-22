import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);  
  }
  goToSignin() {
    this.router.navigate(['/signin']);  
  }

  ngOnInit(): void {
  }

}
