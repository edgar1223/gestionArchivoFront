import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(email:string, password:string): Observable<any> {
    const data={
      'email':email,
      'password':password
    }
    return this.http.post(`${this.apiUrl}login/`, data);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}CustomUser/`, user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
