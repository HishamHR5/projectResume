import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainScrollerComponent } from './components/main-scroller/main-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainScrollerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
