import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(private router: Router) {
  }
  isNavbarOpen = false;
  dropDownNavCollapse = true;
  hamburgerActive = false;
  navItems: any = [
    {path:"home", text:"Főoldal"},
    {path:"product", text:"Vásárlás"},
    {path:"elem-csere", text:"Elem csere"},
  ];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.hamburgerActive = !this.hamburgerActive;
  }


  

  navigateto(path: string) {
    window.location.href = path;
  }

}
