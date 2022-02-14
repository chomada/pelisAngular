import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { MenuComponent } from './components/menu/menu.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {  MovieEffects } from './store/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyAccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreModule.forFeature('movie',appReducer)
    //EffectsModule.forFeature([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
