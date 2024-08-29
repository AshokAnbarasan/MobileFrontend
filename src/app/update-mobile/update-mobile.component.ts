import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit{
  constructor(private router:Router,private ms:MobileService,private ar:ActivatedRoute){}

  goToViewPage() {
    this.router.navigate(["viewlist"]);
  }
  mob:Mobile=new Mobile();
  id:number;
  ngOnInit(): void {
    this.id =this.ar.snapshot.params["id"];
    this.ms.getById(this.id).subscribe((x)=>{this.mob=x});
  }

  

  submitMobile() {
    this.ms.updateById(this.id,this.mob).subscribe((x)=>console.log(x));
    alert("Updated Successfully");
    this.goToViewPage();
  }


}
