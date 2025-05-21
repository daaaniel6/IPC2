import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  constructor(public router: Router) {}

  public isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log('Menu toggled:', this.isOpen);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
