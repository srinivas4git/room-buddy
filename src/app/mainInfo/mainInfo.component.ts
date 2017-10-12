import { Component, OnInit, ElementRef  } from '@angular/core';
import {AppComponent} from './../app.component';
import {Http} from '@angular/http';

import { MainInfoPipe } from './mainInfo.pipe';



@Component({
	selector: 'budget-info',
	templateUrl: './mainInfo.component.html'
	
})

export class BudgetInfo implements OnInit   {
  nodata: boolean = false;	
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'username';
  direction: number;
  constructor(private elementRef: ElementRef) { }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;

    this.records.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * this.direction;
        }
        else if( a[property] > b[property]){
            return 1 * this.direction;
        }
        else{
            return 0;
        }
    });
};
ngOnInit(){
 this.records= [
		{
			"username": "srinivas",
			"date" : "12/09/2017",
			"items": "someItem",
			"price": 500 
		},
		{
			"username": "surya",
			"date" : "16/09/2017",
			"items": "someItem",
			"price": 300 
		},
		{
			"username": "kumar",
			"date" : "19/09/2017",
			"items": "someItem",
			"price": 100 
		},
		{
			"username": "naresh",
			"date" : "20/09/2017",
			"items": "someItem",
			"price":800 
		}
	]
	}
node: string;
	public formFiled: any;
addField(){

	// this.formFiled = ` <input type="text" placeholder="username">  `
	// console.log(this.formFiled);
	// return this.formFiled;

	const tmp = document.createElement('div');
    const el = document.createElement('input');
    const myDiv = document.getElementById("demo");
    tmp.appendChild(el);
    myDiv.innerHTML = tmp.innerHTML;
}

}
