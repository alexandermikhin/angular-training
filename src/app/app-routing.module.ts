import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderFormComponent } from './orders/components/order-form/order-form.component';

const routes: Routes = [
  { path: 'cart', component: CartListComponent },
  { path: 'order', component: OrderFormComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', redirectTo: '/products-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
