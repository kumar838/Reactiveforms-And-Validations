import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Routes,Router,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
//import { SharedModule } from './shared/shared.module';

const approuting :Routes=[
  {path:'' ,component:RegisterComponent},
  {path:'register', component:RegisterComponent},
 
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //SharedModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
