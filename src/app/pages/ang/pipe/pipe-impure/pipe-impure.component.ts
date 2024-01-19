import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-impure',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './pipe-impure.component.html',
  styleUrl: './pipe-impure.component.css'
})
export class PipeImpureComponent {
  one: boolean = true;
  two: boolean =  false;
  three: boolean =  false;
  four: boolean = false;
  changeCode(value: string){
    if(value == 'one'){
      this.one =  true;
      this.two =  false;
      this.three = false;
      this.four = false;
    } else if(value == 'two'){
      this.two =  true;
      this.one =  false;
      this.three = false;
      this.four = false;
    } else if(value == 'three'){
      this.two =  false;
      this.one =  false;
      this.three = true;
      this.four = false;
    } else {
      this.two =  false;
      this.one =  false;
      this.three = false;
      this.four = true;
    }
  }
}
