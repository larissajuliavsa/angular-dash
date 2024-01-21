import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
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
  customers = [
    {
      name: 'Alexandre',
      gender: 'm',
      age: 20,
      wage: '10000'
    },
    {
      name: 'Bruno',
      gender: 'm',
      age: 35,
      wage: '12000'
    },
    {
      name: 'Carla',
      gender: 'f',
      age: 28,
      wage: '13000'
    },
    {
      name: 'Daniela',
      gender: 'f',
      age: 34,
      wage: '14000'
    }
  ]

  displayedColumns: string[] = ['name', 'gender', 'age', 'wage'];
  dataSource = new MatTableDataSource(this.customers);
}
