import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    return [
      {
        category: 'category-1',
        description: 'product-1-description',
        isAvailable: true,
        name: 'product-1-name',
        price: 100.123,
        suppliers: [
          'supplier-1',
          'supplier-2'
        ],
        updateDate: new Date(2019, 0, 1)
      },
      {
        category: 'category-2',
        description: 'product-2-description',
        isAvailable: false,
        name: 'product-2-name',
        price: 200.1,
        suppliers: [
          'supplier-3',
          'supplier-1'
        ],
        updateDate: new Date(2018, 11, 1)
      },
      {
        category: 'category-3',
        description: 'product-3-description',
        isAvailable: true,
        name: 'product-3-name',
        price: 300.0,
        suppliers: [
          'supplier-1',
          'supplier-4'
        ],
        updateDate: new Date(2018, 10, 30)
      },
      {
        category: 'category-3',
        description: 'product-4-description',
        isAvailable: true,
        name: 'product-4-name',
        price: 300.009,
        suppliers: [
          'supplier-1',
          'supplier-4'
        ],
        updateDate: new Date(2019, 3, 10)
      }
    ];
  }
}
