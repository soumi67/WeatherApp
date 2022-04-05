import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPartComponent } from './weather-part/weather-part.component';
import { InputPartComponent } from './input-part/input-part.component';
import { RouterModule,Routes} from '@angular/router';


const routes: Routes = [
  { path: 'weather', component: WeatherPartComponent },
  { path: 'home', component: InputPartComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
