import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { EventsComponent } from './events/events.component';
//import { BindingsComponent } from './bindings/bindings.component';
//import { ClassbindingComponent } from './classbinding/classbinding.component';
//import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';



//import { CounterComponent } from './counter/counter.component';StructuraldirectiveComponent
//import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
//import { FormsModule } from '@angular/forms';
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