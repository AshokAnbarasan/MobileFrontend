import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent {

  home(){
    this.router.navigate(["homepage"])
  }
  m:Mobile[]=[];
  constructor(private router:Router,private ms:MobileService){
  }
  viewAllMobile(){
    this.ms.getallmobile().subscribe((x)=>{this.m=x;});

  }
  ngOnInit(){
    this.viewAllMobile();
  }
  addMobile(){
    this.router.navigate(["addmobile"])
  }
  goToViewMobile(id:number){
    this.router.navigate(["Viewmobile",id])
  }
  goToUpdateMobile(id:number){
    this.router.navigate(["Updatemobile",id])
  }
  delete(id:number){
    this.ms.deleteById(id).subscribe((x)=>console.log(x));
    alert("deleted")
    this.viewAllMobile();

  }
  

}
