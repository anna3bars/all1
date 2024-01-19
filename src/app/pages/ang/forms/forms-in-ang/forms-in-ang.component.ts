import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-in-ang',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './forms-in-ang.component.html',
  styleUrl: './forms-in-ang.component.css'
})
export class FormsInAngComponent {
  one: boolean = true;
  two: boolean = false;
  changeCode(value: string){
    if(value == 'one'){
      this.one = true;
      this.two = false;
      return
    }
    this.one = false;
    this.two = true;
  }
}
