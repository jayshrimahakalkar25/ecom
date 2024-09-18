import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 allCategories = [
  {
    name : 'All Products',
    imgName : '../../assets/f1.png',
  },
  {
    name : 'Beans',
    imgName : '../../assets/f2.png',
  },
  {
    name : 'Fruits',
    imgName : '../../assets/f3.png',
  },
  {
    name : 'Vegetables',
    imgName : '../../assets/f4.png',
  },
  {
    name : 'Pulses',
    imgName : '../../assets/f5.png',
  },
 ]
  featuredCategories =[
    {
      name : 'Broccoli',
      imgName :'p2',
      price :89.00,
      rating: 3,
    },
    {
      name : 'Sweet Corn',
      imgName :'p1',
      price :150.00,
      rating: 3,
    },
    {
      name : 'Strawberries',
      imgName :'p3',
      price :199.00,
      rating: 5,
    },
    {
      name : 'Orange',
      imgName :'p4',
      price :69.00,
      rating: 4,
    },
  ]
}
