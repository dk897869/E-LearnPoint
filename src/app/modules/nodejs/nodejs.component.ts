import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodejs',
  imports: [],
  templateUrl: './nodejs.component.html',
  styleUrl: './nodejs.component.css'
})
export class NodejsComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/angular'])
}
onNext(){
  this.router.navigate(['/devops'])
}
}
