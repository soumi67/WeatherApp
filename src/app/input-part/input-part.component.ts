import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-input-part',
  templateUrl: './input-part.component.html',
  styleUrls: ['./input-part.component.css']
})
export class InputPartComponent implements OnInit {
  text:string=''

  constructor(private router: Router, private texto:DataService) {}
   
  ngOnInit(): void {
    
  }
  btnClick(value:string) {
    this.text=value;
    console.log(value)
    this.texto.SetMessage(this.text)
  };
  ErroMessage(){
    if(this.text==""){
      this.vis=true;
      console.log("nothing")
    }
    else{
      this.router.navigate(['/weather']);
    }
  }
  visible:boolean = true;
  vis:boolean=false;
  
    
   

}
