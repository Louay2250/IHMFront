import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { SignInComponent } from './sign-in/sign-in.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ProgramComponent } from './program/program.component';
import { AccountComponent } from './account/account.component';
import { MatDatepickerModule } from '@angular/material/datepicker';






@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LandingPageComponent,
    SignUpComponent,
    SignInComponent,
    ExerciseListComponent,
    ExerciseDetailComponent,
    ProgramComponent,
    AccountComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
