import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dotnet',
  imports: [],
  templateUrl: './dotnet.component.html',
  styleUrl: './dotnet.component.css'
})
export class DotnetComponent {
constructor(private router:Router){}
onBack(){
  this.router.navigate(['/c#'])
}
onNext(){
  this.router.navigate(['/'])
}
}
