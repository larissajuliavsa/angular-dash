import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = null

  clientes = [
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
}
