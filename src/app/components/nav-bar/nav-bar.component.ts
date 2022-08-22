import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  loggedIn = this.loginService.isLoggedIn();
  username =
    this.loginService.loginUserName()?.slice(0, 1).toUpperCase() +
    this.loginService.loginUserName()?.slice(1).toLowerCase();

  isCollapsed = true;

  logoutUser() {
    this.loginService.logout();
  }
}
