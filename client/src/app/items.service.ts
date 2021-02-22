import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url : string = "http://localhost:8080/api";

  constructor( public http : HttpClient) { }

  getAllItems(){
    return this.http.get(this.url)
  }

  getItem(itemId){
    return this.http.get(this.url+`/${itemId}`)
  }

  addItem(body){
    return this.http.post(this.url,body,{responseType: 'text'})
  }

  deposit(body,itemId){
    return this.http.put(this.url+"/deposit/"+`${itemId}`,body,{responseType: 'text'})
  }

  withdrawal(body,itemId){
    return this.http.put(this.url+"/withdrawal/"+`${itemId}`,body,{responseType: 'text'})
  }

  delete(itemId){
    return this.http.delete(this.url+`/${itemId}`,{responseType: 'text'})
  }
}

