import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java',
  imports: [],
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})
export class JavaComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/courses'])
}
onNext(){
  this.router.navigate(['/dsa'])
}
}
