import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/contact'])
}
onNext(){
  this.router.navigate(['/java'])
}
}
