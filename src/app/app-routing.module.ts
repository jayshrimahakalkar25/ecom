import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'tenth',
    component: MainComponent,
  },
  {
    path: '12th',
    component: ProductsComponent,
  },
  {
    path: 'BE',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
