import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-view-mobilelist',
  templateUrl: './view-mobilelist.component.html',
  styleUrls: ['./view-mobilelist.component.css']
})
export class ViewMobilelistComponent {
  constructor(private router:Router,private ms:MobileService,private ar:ActivatedRoute){}
  
  goToViewList() {
    this.router.navigate(["viewlist"]);
  }
  mob:Mobile=new Mobile();
  id:number;
  ngOnInit(): void {
    this.id=this.ar.snapshot.params["id"];
    this.ms.getById(this.id).subscribe((x)=>{this.mob=x});
  }

}
