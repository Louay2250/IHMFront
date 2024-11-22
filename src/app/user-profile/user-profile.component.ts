import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
