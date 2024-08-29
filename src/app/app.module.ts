import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewMobilelistComponent } from './view-mobilelist/view-mobilelist.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { DeleteMobileComponent } from './delete-mobile/delete-mobile.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewlistComponent } from './viewlist/viewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewMobilelistComponent,
    UpdateMobileComponent,
    DeleteMobileComponent,
    AddMobileComponent,
    AddTocartComponent,
    ViewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
