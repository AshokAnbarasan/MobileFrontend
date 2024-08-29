import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from './mobile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private router:Router,private http:HttpClient) { }
  baseurl="http://localhost:8080";
  getallmobile(){
    return this.http.get<Mobile[]>("http://localhost:8080/getAll");
  }
  postonemobile(mob:Mobile):Observable<Mobile>{
    return this.http.post<Mobile>("http://localhost:8080/post",mob);
  }
  getById(id:number){
    return this.http.get<Mobile>(`http://localhost:8080/getbyid/${id}`);
  }
  updateById(id:number,mob:Mobile){
    return this.http.put<Mobile>(`http://localhost:8080/putbyid/${id}`,mob);

  }
  deleteById(id:number){
    return this.http.delete<Mobile>(`http://localhost:8080/delbyid/${id}`);

  }
  private cart: Mobile[] = []; 

  addToCart(mobile: Mobile) {
    this.cart.push(mobile);
  }

  // Method to get cart items
  getCartItems() {
    return this.cart;
  }
}
