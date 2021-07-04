import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicComponent } from './components/music/music.component';
import { FoodComponent } from './components/food/food.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SocialComponent } from './components/social/social.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    FoodComponent,
    FriendsComponent,
    TasksComponent,
    SocialComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
