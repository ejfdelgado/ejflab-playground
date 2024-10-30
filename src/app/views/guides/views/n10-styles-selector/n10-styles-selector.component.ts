import { Component } from '@angular/core';
import { MenuItemClass } from '../../models/menu';

@Component({
  selector: 'app-n10-styles-selector',
  templateUrl: './n10-styles-selector.component.html',
  styleUrl: './n10-styles-selector.component.css'
})
export class N10StylesSelectorComponent extends MenuItemClass {
  constructor() {
    super();
  }
}
