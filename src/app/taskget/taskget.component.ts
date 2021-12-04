import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service'

@Component({
  selector: 'taskget',
  templateUrl: './taskget.component.html',
  styleUrls: ['./taskget.component.css']
})
export class TaskgetComponent implements OnInit {
  users:any;
  result:any;
  countryList:any;
  countryArray:any = []; 
  input:any;
  myInput:any;
  countryNames:any;
  searchCountry:any;
  searchData:any = [];
  value: any;
  searchCountryName: any;
  pwd:any;
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {   
    this.usersService.getCountries().subscribe(result => {
      this.users = result;           
      this.countryList=this.users.data;
      this.countryArray = Object.values(this.countryList);    
      });

      const people = ['mahi', 'mihi', 'mouni'];
      const singlePerson = people.find(name => (name: any) => 'mahi');
      console.log(singlePerson);

    
  }

  getCountries(){
     this.usersService.getCountries().subscribe(result => {
     this.users = result;           
     this.countryList=this.users.data;
     this.countryArray = Object.values(this.countryList);    
     })

  }
  searchCountries(){
    try {
      var searchValue = this.searchCountry;
      this.searchData=this.countryArray.filter( (countryData: any) =>{
        return countryData.country.includes(searchValue);      
      })
      console.log(this.searchData);
     }
    catch(error){
      console.log(error);
      
    }
  }

}
