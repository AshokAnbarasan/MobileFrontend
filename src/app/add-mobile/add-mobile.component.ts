import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent {
  constructor(private router:Router,private ms:MobileService){}
  m: Mobile=new Mobile();
  addmobile(){
    this.ms.postonemobile(this.m).subscribe((x)=>console.log(x));
    alert("added successfully")
  }
  GoToviewList(){
    this.router.navigate(["viewlist"])
  }

}
