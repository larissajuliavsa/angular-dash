import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    RegisterComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
