import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.scss']
})
export class ProductGridItemComponent {

  @Input() product: any;

}
