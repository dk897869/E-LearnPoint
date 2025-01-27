import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { HtmlComponent } from './modules/html/html.component';
import { ReactnativeComponent } from './modules/reactnative/reactnative.component';
import { AngularComponent } from './modules/angular/angular.component';
import { DevopsComponent } from './modules/devops/devops.component';
import { NodejsComponent } from './modules/nodejs/nodejs.component';
import { HomeComponent } from './modules/home/home.component';
import { FormComponent } from './modules/form/form.component';
import { JavaComponent } from './modules/java/java.component';
import { DsaComponent } from './modules/dsa/dsa.component';
import { CsharpComponent } from './modules/csharp/csharp.component';
import { DotnetComponent } from './modules/dotnet/dotnet.component';
import { MysqlComponent } from './modules/mysql/mysql.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'courses',component:CoursesComponent},
    {path:'html',component:HtmlComponent},
    {path:'reactnative',component:ReactnativeComponent},
    {path:'angular',component:AngularComponent},
    {path:'devops',component:DevopsComponent},
    {path:'nodejs',component:NodejsComponent},
    {path:'home',component:HomeComponent},
    {path:'form',component:FormComponent},
    {path:'java',component:JavaComponent},
    {path:'dsa',component:DsaComponent},
    {path:'c#',component:CsharpComponent},
    {path:'.Net',component:DotnetComponent},
    {path:'mysql',component:MysqlComponent}
];
