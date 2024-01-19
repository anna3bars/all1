import { Component } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router: Router){}
  @Output() change = new EventEmitter<string>();
  out(text: string){
     this.change.emit(text)
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
