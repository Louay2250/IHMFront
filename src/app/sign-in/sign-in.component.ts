import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/signup']);  
  }
goToDashboard() {
  this.router.navigate(['/dashboard']);  
}

  // Add any necessary logic for form submission here
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (passwordField) {
      passwordField.type = this.showPassword ? 'text' : 'password';
    }
  }

  ngOnInit(): void {
  }

}
