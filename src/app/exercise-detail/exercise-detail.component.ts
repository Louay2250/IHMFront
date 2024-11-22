import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent {
  @Input() exercise: any;
  @Output() saved = new EventEmitter<any>();

  sets = [{ reps: 0, weight: 0 }];

  addSet() {
    this.sets.push({ reps: 0, weight: 0 });
  }

  saveExercise() {
    this.saved.emit({ exercise: this.exercise, sets: this.sets });
  }
}
