import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaNameComponent,
    PizzaListComponent,
    PizzaButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
