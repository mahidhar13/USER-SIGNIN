import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get('https://api.first.org/data/v1/countries')
  }
}
