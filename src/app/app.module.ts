import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  // set of components, directives and pipe that belong]
  // Every component must be declared in exactly one NgModule.
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // set of NgModules are available to templates in this modules
  // contain list app needs
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //The set of components that are bootstrapped when this module is bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
