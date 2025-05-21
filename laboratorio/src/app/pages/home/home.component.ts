import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
