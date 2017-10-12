import { Injectable } from '@angular/core';
//import {AppComponent} from './../app.component';
// import { Router } from '@angular/router';




@Injectable()

export class LoginService {
	

  IsUserLogin(u,p){
  	if(u=='admin' && p=="admin123")  {
  		return true;
  	}

  }
}

