import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aysnc-pipe',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './aysnc-pipe.component.html',
  styleUrl: './aysnc-pipe.component.css'
})
export class AysncPipeComponent {
  one: boolean = true;
  two: boolean = false;
  changeCode(value: string){
    if(value == 'one'){
      this.one = true;
      this.two = false;
    } else {
      this.one = false;
      this.two = true;
    }

  }
}
