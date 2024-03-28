import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NavserviceService } from '../services/navservice.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'inst-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{

  @Input() firstEl!: string;
  @Output() selectedEl: EventEmitter<String> = new EventEmitter<String>();

  @ViewChild('name') nameEl!: ElementRef;
  @ViewChildren('teste') testes!: QueryList<ElementRef>;

  emitSelectedEl(selectedEl: string){
    this.selectedEl.emit(selectedEl); 
  }
}
