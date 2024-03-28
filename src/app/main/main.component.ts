import { Component, OnInit } from '@angular/core';
import { ItemInterface } from './item_interface';

@Component({
  selector: 'inst-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  items: ItemInterface[] = [];

  ngOnInit(): void {
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
