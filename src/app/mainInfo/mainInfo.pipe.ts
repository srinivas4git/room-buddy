import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({ name: 'userData'})

export class MainInfoPipe implements PipeTransform {
	
	transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;
   
    return categories.filter(function(category){
      return category.username.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  } 
}