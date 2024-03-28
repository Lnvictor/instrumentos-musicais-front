import { Component, Input } from '@angular/core';
import { ItemInterface } from '../main/item_interface';

@Component({
  selector: 'inst-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() typx!: ItemInterface;
}
