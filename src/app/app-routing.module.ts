import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewMobilelistComponent } from './view-mobilelist/view-mobilelist.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"viewlist",component:ViewlistComponent},
  {path:"viewmobile",component:ViewMobilelistComponent},
  {path:"addmobile",component:AddMobileComponent},
  

  {path:"Updatemobile/:id",component:UpdateMobileComponent},
  {path:"addtocartmobile",component:AddTocartComponent},
  {path:"",redirectTo:"homepage", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
