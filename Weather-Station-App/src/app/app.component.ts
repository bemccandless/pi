import { Component, OnInit } from '@angular/core';
import { TemperatureService } from './temperature.service';
import { Temperature } from './temperature';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TemperatureService]
})
export class AppComponent implements OnInit {
    private temperatureService: TemperatureService;
    private temperature: Temperature;

    constructor(temperatureService: TemperatureService) {
        this.temperatureService = temperatureService;
    }

    ngOnInit() {
        this.getTemp();
        setInterval(() => {
            this.getTemp(); 
        }, 30000);
    }

    private getTemp() {
        this.temperatureService.getTemperature()
            .subscribe(temperature => this.temperature = temperature);
    }
}
