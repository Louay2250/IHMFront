import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {
  isModalOpen = false;

  exercises = [
    { name: 'Bench Press', image: '/assets/img/Bench-Press.webp' },
    { name: 'Triceps Pushdown', image: '/assets/img/TricepsPushdown.png' },
    { name: 'Lateral Raise', image: '/assets/img/lateral-raise.png' },
    { name: 'Leg Extension', image: '/assets/img/Leg-Extension.webp' }
    // Add more exercises as needed
  ];

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  selectExercise(exercise: any) {
    console.log('Selected exercise:', exercise);
    this.closeModal();
  }
}
