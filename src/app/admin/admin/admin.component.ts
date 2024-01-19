import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router){}
  send(value: any){
    if(value == 'ly@4525%7'){
      localStorage.setItem('token', 'eyJmgI_XiQiIkQ')
      this.router.navigate(['l'])
    } else {
      alert('the password is uncorrect')
    }
  }
  fill (elem: any){
    elem.value = 'ly@4525%7' 
  }
}
 