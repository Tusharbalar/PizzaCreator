import { Component, Input } from '@angular/core';
import { Pizza } from '../../pizza-interface';

@Component({
  selector: 'pizza-list',
  styleUrls: ['pizza-list.component.css'],
  template: `
    <div class="pizza-list">
      <h2>Store inventory</h2>
      <div *ngFor="let pizza of pizzas">
        <p>{{pizza.name}}</p>
        <span>{{pizza.toppings | json}}</span>
      </div>
    </div>
  `
})

export class PizzaListComponent {

  @Input() pizzas: Pizza[];

}