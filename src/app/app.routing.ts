import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProgramComponent } from './program/program.component';




const routes: Routes =[
  { path: '', component: LandingPageComponent },  // Default route
  { path: 'signup', component: SignUpComponent }, // Route for the Sign Up component
  { path: 'signin', component: SignInComponent }, // Route for the Sign In component
  { path: 'program', component: ProgramComponent }, // Route for the Sign In component
  { path: 'exercises/:programName', component: ExerciseListComponent },  // Route to the exercises list component
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
