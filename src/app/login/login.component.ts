import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../services/login.service';

import { AppComponent } from './../app.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
 invalidUser: boolean = false;
public isLogin: any;
 constructor(private loginService: LoginService, private _router: Router, private _appC: AppComponent) { }
 registerUser(form: NgForm){
  let username = form.value.uname;
  let pssword = form.value.pwd;
  this._appC.authUser = this.loginService.IsUserLogin(username, pssword);
  //console.log(this.authUser);

  if( this._appC.authUser == true){
    this._router.navigate(['/dashboard']);
    //this.authUser = this.loginService;
    
  }
  else {
     this._appC.authUser = false;
     this.invalidUser = true;
  }
 
  return this._appC.authUser;

 }


ngOnInit(){

}

}
 