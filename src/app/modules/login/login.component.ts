import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private router:Router){}
onLogin(){
  this.router.navigate(['/register'])
}
onRegister(){
  this.router.navigate(['/login'])
}
onHTML(){
  this.router.navigate(['/html'])
}
onReactnative(){
  this.router.navigate(['/reactnative'])
}
onAngular(){
  this.router.navigate(['/angular'])
}
onDevops(){
  this.router.navigate(['/devops'])
}
onNodejs(){
  this.router.navigate(['/nodejs'])
}
}

