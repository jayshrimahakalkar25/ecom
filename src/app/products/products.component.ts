import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  allCategories = [
    {
      name: 'All Products',
      imgName: '../../assets/f1.png',
    },
    {
      name: 'Beans',
      imgName: '../../assets/f2.png',
    },
    {
      name: 'Fruits',
      imgName: '../../assets/f3.png',
    },
    {
      name: 'Vegetables',
      imgName: '../../assets/f4.png',
    },
    {
      name: 'Pulses',
      imgName: '../../assets/f5.png',
    },
  ];
  featuredCategories = [
    {
      name: 'Broccoli',
      imgName: 'p2',
      price: 89.0,
      rating: 3,
    },
  ];

  twList = [
    {
      name: '12th student list 1',
      age: '15',
    },
    {
      name: '12th student list 2',
      age: '18',
    },
    {
      name: '12th student list 3',
      age: '18',
    },
    {
      name: '12th student list 4',
      age: '18',
    },
  ];
}
