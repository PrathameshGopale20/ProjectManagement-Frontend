import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { endpoints } from '../Constants/URL-Constants';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient, private router: Router) {}

  login(paylod: { email: string; password: string }) {
    this.http.post(endpoints.AUTH.Login, paylod).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }
}
