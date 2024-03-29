import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'inst-login', templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  constructor(private authService: AuthService){}

  loginSubmit(): void{
    let user: string = document.getElementById("user")!.nodeValue!;
    let pwd: string = document.getElementById("pwd")!.nodeValue!;
    this.authService.authenticate(user, pwd);
  }
}
