import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/reactnative'])
}
onNext(){
  this.router.navigate(['/nodejs'])
}
}
