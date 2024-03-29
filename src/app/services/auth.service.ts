import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  checkAuthentication(){
    if (!localStorage.getItem("token")){
      window.location.href = '/login'    
    }
  }

  authenticate(user: string, pwd: string){
    localStorage.setItem("username", user);
    localStorage.setItem("token", "token");
    window.location.href = '/';
  }
}
