import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structuraldirective',
  imports: [CommonModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {
public fruit = ["Apple","Banana","Mango"];
  fruitsList = [
    {
    name: 'Apple',
    color: 'Red',
    varieties: ['Fuji', 'Gala', 'Honeycrisp']
  },
  {
    name: 'Banana',
    color: 'Yellow',
    varieties: ['Cavendish', 'Lady Finger']
  },
  {
    name: 'Cherry',
    color: 'Dark Red',
    varieties: ['Bing', 'Rainier']
  }
  ];

}
