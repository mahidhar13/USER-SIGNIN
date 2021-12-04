import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  email:string = '';
  password:string = '';
  showSignUp:boolean=false;
  showSignIn:boolean=true;
  fname:string = '';
  lname:string = '';
  uname:string = '';
  pwd:string = '';
  pwd1:string = '';
  fpassword:boolean=false;
  errorMsg:boolean=false;
  errorPwd:boolean=false;
  validMsg:boolean=false;

  ngOnInit(): void {

  }

  user(formValue:NgForm){
    console.log(formValue.value);
    if(formValue.invalid){
      this.validMsg=true;
    } else{
    this.router.navigate(['/taskget']);}
    }
  forgotPassword(){
    console.log("Navigate me to Forgot Password Page!");
    this.showSignIn=false;
    this.showSignUp=false;
    this.fpassword=true;
  }
  signUp(){
    console.log("Navigate me to SignUp Page");
    this.showSignUp=true;
    this.showSignIn=false;
  }
  reSignIn(){
    this.showSignUp=false;
    this.showSignIn=true;
  }
  registration(formValue:NgForm){
    console.log(formValue.value);
  }
  pwdmatch(){
    if(!(this.pwd == this.pwd1)){
      this.errorPwd=true;
    }   
  }
  signInForm(formValue: NgForm){
    console.log(formValue.value);
  }
  loadValues(formValue: NgForm){
    const updateValues = {
      email: 'mahidhar.134@gmail.com',
      password: 'Mahimouni@13'
    }
    formValue.setValue(updateValues);
    from([1,2,3]).pipe(map(item => item*10)).subscribe(data => console.log('of', data));
  }

 }
