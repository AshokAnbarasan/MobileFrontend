import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-add-tocart',
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent {
  constructor(private ms:MobileService,private router:Router){}
  mob:Mobile[]=[];
  ngOnInit(): void {
    this.mob=this.ms.getCartItems();
  }

}
