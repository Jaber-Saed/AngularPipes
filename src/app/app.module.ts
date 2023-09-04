import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsComponent } from './ms/ms.component';
import { JawsadComponent } from './ms/jawsad/jawsad.component';

@NgModule({
  declarations: [	
    AppComponent,
      MsComponent,
      JawsadComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
