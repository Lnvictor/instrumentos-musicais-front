import { Component, OnInit } from '@angular/core';
import { ItemInterface } from './item_interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'inst-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  items: ItemInterface[] = [];
  name: string = localStorage.getItem("username")!;

  constructor(private authService: AuthService){}


  ngOnInit(): void {
    this.authService.checkAuthentication();

    this.items.push({typx: "flauta"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
    this.items.push({typx: "Saxofone alto"})
  }
}
