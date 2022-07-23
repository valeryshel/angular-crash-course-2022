import { Component } from '@angular/core';
import {IProduct} from "./components/models/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crash-course-2022';

  products: IProduct[]= data
}
