import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
   //SetMessage
   query:string=''
   SetMessage(text:string){
     this.query = text;
   }
   GetMessage(){
     return this.query;
   }

  GetData(){
    let url ="https://api.weatherbit.io/v2.0/current?&city="+this.GetMessage()+"&key=c35e82c4d9da48a58574ccdff43b4615	";
    return this.http.get(url);
  }
}
