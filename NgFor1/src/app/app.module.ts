import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexdemoComponent } from './indexdemo/indexdemo.component';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,IndexdemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
