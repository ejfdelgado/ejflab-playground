import { Component } from '@angular/core';
import { MenuItemClass } from '../../models/menu';

@Component({
  selector: 'app-n09-styles',
  templateUrl: './n09-styles.component.html',
  styleUrl: './n09-styles.component.css'
})
export class N09StylesComponent extends MenuItemClass {
  constructor() {
    super();
  }
}
