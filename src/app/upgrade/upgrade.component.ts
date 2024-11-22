import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  programs: { name: string, startDate: Date, exercises: any[] }[] = [];  // List of programs with exercises
  selectedProgram: any = null;  // Holds the currently selected program
  programName: string = ''; // Name of the new program
  isCreatingProgram: boolean = false; // Flag for showing the input field
  addingExercise: boolean = false;
  selectedExercise: any;
  inputVisible: boolean = false; // Toggle input visibility
  newProgram: string = ''; // New program name
  selectedExercises: any[] = [];  // Holds selected exercises for the program
  showExercisesList: boolean = false;  // Controls visibility of the exercises list
  isModalOpen = false;
  isExerciseDetailsModalOpen = false;

  activeExercise = { name: 'Exercise 1',image: 'image_url',sets: [{ weight: 50, reps: 10 },{ weight: 60, reps: 8 },],};
  



  exercises = [
    { name: 'Bench Press', image: '/assets/img/Bench-Press.webp' },
    { name: 'Triceps Pushdown', image: '/assets/img/TricepsPushdown.png' },
    { name: 'Lateral Raise', image: '/assets/img/lateral-raise.png' },
    { name: 'Leg Extension', image: '/assets/img/Leg-Extension.webp' },
    { name: 'Lat Pull-Down', image: '/assets/img/LatPull.webp' },
    { name: 'Incline Bench Press', image: '/assets/img/Incline-Bench-Press.webp' },
    { name: 'Full Squat', image: '/assets/img/Full-Squat.webp' },
    { name: 'Hammer Curl', image: '/assets/img/Hammer-Curl.webp' },
    { name: 'Straight Back Seated Row', image: '/assets/img/Straight-Back-Seated-Row.webp' }
  ];


  constructor() { }

  //functions for the editing of the selected exercice
  openExerciseDetails(exercise: any): void {
    this.activeExercise = {
      ...exercise,
      sets: exercise.sets || [{ weight: 0, reps: 0 }]
    };
    this.isExerciseDetailsModalOpen = true;
  }

  addSet(): void {
    this.activeExercise.sets.push({ weight: 0, reps: 0 });
  }

  removeSet(index: number): void {
    if (this.activeExercise.sets.length > 1) {
      this.activeExercise.sets.splice(index, 1);
    }
  }

  saveExerciseDetails(): void {
    const index = this.selectedExercises.findIndex(
      (e) => e.name === this.activeExercise.name
    );
    if (index > -1) {
      this.selectedExercises[index] = { ...this.activeExercise };
    }
    this.closeExerciseDetailsModal();
    console.log('Exercise saved:', this.activeExercise);
  }

  closeExerciseDetailsModal(): void {
    this.isExerciseDetailsModalOpen = false;
    this.activeExercise = null;
  }

  // Function to enable creating a new program
  createNewProgram() {
    this.isCreatingProgram = true;
    this.programName = '';
  }

  // Function to add the program to the list with current date as start date
  addProgram() {
    if (this.newProgram.trim()) {
      const currentDate = new Date();  // Get the current date
      const newProgramObject = {
        name: this.newProgram.trim(),
        startDate: currentDate,
        exercises: []  // Initialize an empty exercises array
      };
      this.programs.push(newProgramObject);  // Add the program with start date
      this.newProgram = '';  // Clear the input field
      this.inputVisible = false;  // Hide input field after adding
    }
  }

  // Function to handle program selection
  selectProgram(program: any) {
    this.selectedProgram = program;
    this.selectedExercises = [...program.exercises];  // Initialize selected exercises from the program
    this.isModalOpen = true;  // Open the modal when a program is selected
    this.showExercisesList = false; // Hide exercises list initially
  }

  showExerciseModal() {
    this.isModalOpen = true;
  }

  selectExercise(exercise: any) {
    const index = this.selectedExercises.findIndex(selected => selected.name === exercise.name);
    if (index === -1) {
      // Adding the new exercise with default values for sets and reps
      this.selectedExercises.push({
        ...exercise,  // Spread operator to include the exercise details
        sets: 3,  // Default number of sets
        repRange: '8-12'  // Default rep range (you can modify this default)
      });
    } else {
      this.selectedExercises.splice(index, 1);  // Remove if already selected
    }
  }

    // Method to update sets and reps (if necessary for user input)
    updateExerciseDetails(exercise: any, sets: number, repRange: string) {
      const index = this.selectedExercises.findIndex(selected => selected.name === exercise.name);
      if (index !== -1) {
        this.selectedExercises[index].sets = sets;
        this.selectedExercises[index].repRange = repRange;
      }
    }

  addExercise() {
    this.addingExercise = true;
  }

  onExerciseSaved(exerciseData: any) {
    console.log('Exercise saved:', exerciseData);
    this.selectedExercise = null;
  }

  showProgramInput() {
    this.inputVisible = true;
  }

  openModal() {
    this.isModalOpen = true;
  }

  ngOnInit() {
    const dataDailySalesChart1: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18]
      ]
    };

    const optionsDailySalesChart1: any = {
      lineSmooth1: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high as the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var dailySalesChart1 = new Chartist.Line('#dailySalesChart1', dataDailySalesChart1, optionsDailySalesChart1);
    this.startAnimationForLineChart1(dailySalesChart1);
  }

  startAnimationForLineChart1(chart1) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart1.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  }

    // Function to handle the display of the exercises list
    toggleExercisesList() {
      this.showExercisesList = !this.showExercisesList;
    }

    addRow() {
      if (this.activeExercise) {
        const newSet = { weight: null, reps: null }; // Create an empty set
        this.activeExercise.sets.push(newSet);  // Add it to the active exercise's sets
      }
    }
    trackByIndex(index: number): number {
      return index;
    }
    

    closeModal() {
      if (this.selectedProgram) {
        this.selectedProgram.exercises = [...this.selectedExercises]; // Persist changes
      }
      this.isModalOpen = false; // Close modal
    }
    
}
