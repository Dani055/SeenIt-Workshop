import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { Router } from '@angular/router';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            if(err.status === 401){
                this.toastr.error(err.error.desctiption , 'Error');
                this.router.navigate(['login'])
            }
            return throwError(err)
        })
        )
    }
}