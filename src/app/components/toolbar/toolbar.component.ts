import { Component, ElementRef, ViewChild } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @ViewChild('sp1') sp1!: ElementRef;
  @ViewChild('sp2') sp2!: ElementRef;
  @ViewChild('sp3') sp3!: ElementRef;

  addSc: boolean = false;
  addSc2: boolean = false;
  addSc3: boolean = false;
  show: boolean = false;

  constructor(private router: Router){}
  @Output() change = new EventEmitter<string>();
  @Output() showHumburgerMenu = new EventEmitter<boolean>();
  out(text: string){
     this.change.emit(text)
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
  showMenu(){
    this.addSc = !this.addSc;
    this.addSc2 = !this.addSc2;
    this.addSc3 = !this.addSc3;
    this.show = !this.show;
    this.showHumburgerMenu.emit(this.show)
  }
}
