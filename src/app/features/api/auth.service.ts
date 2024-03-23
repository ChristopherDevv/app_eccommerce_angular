import { Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  appToken: string = '';

  public login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${environment.apiLoginURL}`, credentials);
  }

  public isAuthenticated(): boolean {
    return this.appToken !== '';
  }
  
}
