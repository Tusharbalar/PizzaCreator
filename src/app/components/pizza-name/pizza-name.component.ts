import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-name',
  styleUrls: ['pizza-name.component.css'],
  template: `
    <div class="pizza-name" [formGroup]="parent">
      <input type="text" formControlName="name" placeholder="Pizza name, e.g. Blazin hot">
      <div class="error" *ngIf="invalid">
        Pizza name is required
      </div>
    </div>
  `
})

export class PizzaNameComponent {

  @Input() parent: FormGroup;


}