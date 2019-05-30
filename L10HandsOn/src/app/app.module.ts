import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorldCitiesService } from './shared/services/world-cities.service';
import { WeatherService } from './shared/services/weather.service';
import { GeolocationService } from './shared/services/geolocation.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        WorldCitiesService,
        WeatherService,
        GeolocationService,
        HttpClient
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
    
