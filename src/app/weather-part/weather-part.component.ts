import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-part',
  templateUrl: './weather-part.component.html',
  styleUrls: ['./weather-part.component.css']
})
export class WeatherPartComponent implements OnInit {
 data:any=[]
  constructor(private route:Router,private details:DataService) {
    this.details.GetData().subscribe(data=>{
      this.data=data;
      //style loading 
      this.vis=false;
      this.visible=true;
    })
   }
  texto:string=''
  vis:boolean=true;
  visible:boolean=false;

  ngOnInit(): void {
    this.texto = this.details.GetMessage();
  }
  backClick(){
    this.route.navigate(['/home']);
  }

}
