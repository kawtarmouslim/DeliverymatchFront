import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: '', component: DashboardComponent },
  { path: 'annonce', component: AnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
