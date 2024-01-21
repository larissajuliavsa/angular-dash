import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Customer {
  name: string;
  gender: string;
  age: number;
  wage: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customers!: Customer[];

  displayedColumns: string[] = ['name', 'gender', 'age', 'wage'];
  dataSource = new MatTableDataSource(this.customers);
}
