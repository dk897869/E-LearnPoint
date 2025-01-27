import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactnative',
  imports: [],
  templateUrl: './reactnative.component.html',
  styleUrl: './reactnative.component.css'
})
export class ReactnativeComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/html'])
}
onNext(){
  this.router.navigate(['/angular'])
}
}
