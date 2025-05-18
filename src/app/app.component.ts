import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    StructuraldirectiveComponent,
  ],
  
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
// template: `
//   <p>structuraldirective works!</p>
//   <h1 *ngIf="true">Pooja</h1>
//   <p>hello</p>
// `,
