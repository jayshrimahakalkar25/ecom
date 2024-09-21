import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
shopProduct = [
  {
    name : 'Tomato',
    price : 30.00,
    imgName :'photo-01',
    rating:4,
  },
  {
    name : 'Cucumber',
    price : 20.00,
    imgName :'photo-02',
    rating:5,
  },
  {
    name : 'Carrot',
    price : 59.00,
    imgName :'photo-03',
    rating:4,
  },
  {
    name : 'Cabbage',
    price : 40.00,
    imgName :'photo-04',
    rating:3,
  },
  {
    name : 'Watermelon',
    price : 30.00,
    imgName :'photo-05',
    rating:4,
  },
  {
    name : 'Brinjal',
    price : 20.00,
    imgName :'photo-06',
    rating:5,
  },
  {
    name : 'Ladyfinger',
    price : 59.00,
    imgName :'photo-07',
    rating:4,
  },
  {
    name : 'Custard Apple',
    price : 80.00,
    imgName :'photo-08',
    rating:3,
  }
]
}
