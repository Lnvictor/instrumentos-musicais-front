import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit, AfterViewInit, AfterViewChecked{
  title = 'instrumentos-musicais';
  selectedEl!: String;
  testeValue: string = "teste"

  @ViewChild(NavComponent) navComponeent!: NavComponent;

  selectEl(item: String){
    this.selectedEl = item;
    console.log(this.selectedEl)
  }

  teste(){
    this.testeValue = "modificado";
  }  
  
  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.navComponeent);
  }

  ngOnInit(): void {
    console.log('OnInit ');
  }

  ngAfterViewChecked(): void {
    console.log('view checked');
  } 
}
