import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {EntityDataModule} from "@ngrx/data";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {entityMetadata} from "./entities/entites.metadata";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    HttpClientModule,
    StoreModule.forRoot(state => state),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: entityMetadata
    }),
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
