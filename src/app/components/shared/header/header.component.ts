import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnInit() {
  }
  
  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate([ '/login' ])
      })
  }
}
