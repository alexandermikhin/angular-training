import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidatorsModule } from '../validators/validators.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderService } from './services/order.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ValidatorsModule
  ],
  declarations: [OrderFormComponent],
  providers: [OrderService],
  exports: [OrderFormComponent]
})
export class OrdersModule {}
