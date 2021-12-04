import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskgetComponent } from './taskget/taskget.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { StyleDirective } from './style.directive';
import { AppNotDirective } from './app-not.directive';
import { PracticeComponent } from './practice/practice.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { ErrorComponent } from './error/error.component';
import { CommonInterceptor } from './common.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TaskgetComponent,
    StyleDirective,
    AppNotDirective,
    PracticeComponent,
    ConvertToSpacesPipe,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    MatButtonModule,    
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: CommonInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
