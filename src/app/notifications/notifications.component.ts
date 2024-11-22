import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  currentFontSize: string = '16px'; // Track the current font size

  onSubmit() {
    // Handle form submission logic here
    alert('Form submitted successfully!');
  }

  

}
