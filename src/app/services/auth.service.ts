import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ="http://localhost:400/api"
  constructor(private http:HttpClient) {}

  signup(user){
    return  this.http.post<any>(this.URL+'/login',user);
  }

}
