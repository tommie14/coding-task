import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppAngularMaterialModule} from './app-angular-material.module';
import {SearchGifComponent} from './gifs/search-gif/search-gif.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GifTableComponent} from './gifs/search-gif/gif-table/gif-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchGifComponent,
    GifTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
