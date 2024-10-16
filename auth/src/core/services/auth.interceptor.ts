import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    authService: any;
    router: any;

    constructor() { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token != null ? token : ''
                }
            });
            return next.handle(authReq)
                .pipe(catchError(
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 401) {
                                this.authService.logout();
                                this.router.navigateByUrl('/login');
                            }
                        }
                        return throwError(error)
                    }));
        }

        return next.handle(req);
    }

}