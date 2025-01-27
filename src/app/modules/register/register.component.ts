import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private router:Router){}
onLogin(){
  alert("Login Successfully")
  this.router.navigate(['/login'])
}
onRegister(){
  alert("Registered Successfully")
  this.router.navigate(['/login'])
}
}
