import { Component, OnInit } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent  {
  authUser: boolean = false;
 public results: string[];
public  jsonData= {};
    constructor(private _http:Http) {}
    ngOnInit(): void {
    	this._http.get('./JasonData.json').subscribe(data => {
      // Read the result field from the JSON response.
       this.jsonData = data['results'];
    });
    	console.log(this.jsonData );
    }


}
