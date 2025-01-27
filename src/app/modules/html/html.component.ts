import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html',
  imports: [],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/'])
}
onNext(){
  this.router.navigate(['/reactnative'])
}
}
