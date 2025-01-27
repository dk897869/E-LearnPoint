import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mysql',
  imports: [],
  templateUrl: './mysql.component.html',
  styleUrl: './mysql.component.css'
})
export class MysqlComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/dsa'])
}
onNext(){
  this.router.navigate(['/c#'])
}
}
