import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  password: string = '';         // Variable to store the password value
  confirmPassword: string = '';  // Variable to store the confirm password value
  passwordsMatch: boolean = false; // Boolean to track whether passwords match
  feedbackMessage: string = '';  // Feedback message for user

  darkMode: boolean = false;  // Track the dark mode state
  currentFontSize: string = '16px'; // Track the current font size

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Load user preferences from localStorage
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    const savedFontSize = localStorage.getItem('fontSize');
    this.currentFontSize = this.getFontSize(savedFontSize || 'medium');

    // Apply dark mode if it's enabled
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  // Function to navigate to the dashboard
  goToDashboard() {
    this.router.navigate(['/dashboard']);  // Navigates to your main project page
  }

  // Real-time validation for the password and confirm password fields
  validatePassword(): void {
    if (this.confirmPassword === '') {
      this.feedbackMessage = ''; // No feedback if confirm password is empty
    } else if (this.password === this.confirmPassword) {
      this.feedbackMessage = 'Passwords match ✔'; // Passwords match
      this.passwordsMatch = true;
    } else {
      this.feedbackMessage = 'Passwords do not match ✘'; // Passwords do not match
      this.passwordsMatch = false;
    }
  }

  // Toggle dark mode
  toggleDarkMode(event: any): void {
    this.darkMode = event.target.checked;
    localStorage.setItem('darkMode', this.darkMode.toString());

    // Apply or remove the dark-mode class on the body
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  // Change font size based on user selection
  changeFontSize(event: any): void {
    const selectedSize = event.target.value;
    this.currentFontSize = this.getFontSize(selectedSize);
    localStorage.setItem('fontSize', selectedSize);
  }

  // Helper method to return the correct font size based on the selection
  getFontSize(size: string): string {
    switch (size) {
      case 'small':
        return '14px';
      case 'medium':
        return '16px';
      case 'large':
        return '25px';
      default:
        return '16px';
    }
  }
}
