import { Injectable } from '@angular/core';
import { 
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot, 
   Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    private toastr: ToastrService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){ 
    if (this.authService.isAuthenticated()) {
      return true;
    }  
    this.toastr.error('You are not authenticated!', "Error")
    this.router.navigate(['/login']);
    
    return false;
  }
}
