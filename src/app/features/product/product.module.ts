import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductModule { }
