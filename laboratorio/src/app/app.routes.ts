import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: '**', redirectTo: 'home' },
];
