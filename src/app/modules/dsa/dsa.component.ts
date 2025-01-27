import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dsa',
  imports: [],
  templateUrl: './dsa.component.html',
  styleUrl: './dsa.component.css'
})
export class DsaComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/java'])
}
onNext(){
  this.router.navigate(['/mysql'])
}
}
