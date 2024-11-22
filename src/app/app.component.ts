import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NutriTrack'; // Replace with your app's title if needed
  isDarkMode = false;


  ngOnInit(): void {
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    this.changeFontSize(savedFontSize);
    
  }

  



  changeFontSize(size: string): void {
    const fontSize = this.getFontSize(size);
    document.documentElement.style.fontSize = fontSize; // Apply font size globally
    localStorage.setItem('fontSize', size); // Save user preference
  }

  getFontSize(size: string): string {
    switch (size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      default:
        return '16px';
    }
  }
}
