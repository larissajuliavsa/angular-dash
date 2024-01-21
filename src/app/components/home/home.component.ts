import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from '../services/home.service';
export interface Customer {
  name: string;
  gender: string;
  age: number;
  wage: string;
}

export interface Customers extends Array<Customer>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customers!: Customers;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'gender', 'age', 'wage'];

  constructor(private homeService: HomeService) {
    
  }

  ngOnInit() {
    this.homeService.getCustomers()
    .subscribe(customers => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource(this.customers)
    })
  }
}
