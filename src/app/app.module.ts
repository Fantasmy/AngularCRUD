// angular

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// pages

import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { StudentsListPageComponent } from './Pages/students-list-page/students-list-page.component';
import { StudentDetailsPageComponent } from './Pages/student-details-page/student-details-page.component';
import { StudentEditPageComponent } from './Pages/student-edit-page/student-edit-page.component';
import { StudentCreatePageComponent } from './Pages/student-create-page/student-create-page.component';

// components
import { StudentComponent } from './Components/student/student.component';
import { StudentServiceService } from './Service/student-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: HomePageComponent},
  { path: 'student-form',  component: StudentComponent},
  { path: 'students',  component: StudentsListPageComponent},
  { path: 'students/:id', component: StudentDetailsPageComponent },
  { path: 'students/:id/edit', component: StudentEditPageComponent },
  { path: 'create',  component: StudentCreatePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomePageComponent,
    StudentsListPageComponent,
    StudentDetailsPageComponent,
    StudentEditPageComponent,
    StudentCreatePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    StudentServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
