import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csharp',
  imports: [],
  templateUrl: './csharp.component.html',
  styleUrl: './csharp.component.css'
})
export class CsharpComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/mysql'])
}
onNext(){
  this.router.navigate(['/.Net'])
}
}
