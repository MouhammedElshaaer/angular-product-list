import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/models/product/product';

import { MOCK_PRODUCTS } from './../../models/product/products-mockup';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private webservice: String = "http://localhost:8000/api/";

  // observable source
  private allProductsSource = new Subject<any[]>();

  // observable stream
  allProducts$ = this.allProductsSource.asObservable();

  constructor(private http:Http) { }


  getProducts(){ 
    return MOCK_PRODUCTS;
  }

  updateStream(data: Product[]){
    this.allProductsSource.next(data);
  }
}
