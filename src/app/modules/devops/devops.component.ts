import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devops',
  imports: [],
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.css'
})
export class DevopsComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/nodejs'])
}
onNext(){
  this.router.navigate(['/'])
}
}
