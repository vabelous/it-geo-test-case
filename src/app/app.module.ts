import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSideNavComponent } from './layouts/left-side-nav/left-side-nav.component';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { DynamicFormComponent } from './interaction/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideNavComponent,
    TopBarComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
