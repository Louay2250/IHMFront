import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  // Placeholder for user details, can be replaced with actual data from a service
  user = {
    name: 'Irakli Talavadze',
    email: 'ikakodesign@gmail.com',
    dob: '07 July 1993',
    country: 'Georgia, Tbilisi',
    language: 'English (UK)',
  };

  signOut() {
    console.log('Sign out clicked');
    // Add your sign-out logic here
  }
}
