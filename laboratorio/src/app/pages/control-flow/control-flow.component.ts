import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';

@Component({
  selector: 'app-control-flow',
  imports: [HeaderComponent, SideMenuComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  title: string = 'Control Flow';
  subtitle1: string = '.';
  items: string[] = [
    'ngIf',
    'ngFor',
    'ngSwitch',
    'ngTemplate',
    'ngContainer',
    'ngContent',
  ];

  public users = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 2, name: 'Jane Smith', score: 80 },
    { id: 3, name: 'Alice Johnson', score: 70 },
    { id: 4, name: 'Bob Brown', score: 60 },
    { id: 5, name: 'Charlie Davis', score: 50 },
    { id: 6, name: 'Diana Prince', score: 40 },
    { id: 7, name: 'Ethan Hunt', score: 30 },
  ];

  public score = 50;
  public role = 'user';

  change() {
    this.score = 100;
    this.role = 'admin';
  }

  constructor() {
    // Constructor logic if needed
  }
}
