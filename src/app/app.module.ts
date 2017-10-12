import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetInfo } from './mainInfo/mainInfo.component';
import { LoginService } from './services/login.service';
import { UserBubbleComponent } from './directives/bubble.component';

import { MainInfoPipe } from './mainInfo/mainInfo.pipe';
import { OrderrByPipe } from './mainInfo/OrderBy.pipe';

const appRoutes: Routes = [
  { path:'', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'mainInfo', component:BudgetInfo}
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BudgetInfo, 
    UserBubbleComponent,
    MainInfoPipe,
    OrderrByPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, 
    RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
