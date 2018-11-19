import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {ErrorHandler} from '@angular/core';
typescript_tsdk: '/home/cat/Desktop/Fall2018/CIS3750/finalProject';

//fixme error handling

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


// export class CustomErrorHandler implements ErrorHandler {
//   constructor() {}
//   handleError(error) {
//     console.log(error);//fixme later
//   }
// }
export class AppModule { }



