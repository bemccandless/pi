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
    private backdropColor: String = "comfortable";

    constructor(temperatureService: TemperatureService) {
        this.temperatureService = temperatureService;
    }

    ngOnInit() {
        this.getTemp();
        setInterval(() => {
            this.getTemp(); 
            this.backdropColor = this.getBackdropColor();
            console.log("Backdrop: " + this.backdropColor);
        }, 30000);
    }

    private getTemp() {
        this.temperatureService.getTemperature()
            .subscribe(temperature => this.temperature = temperature);
    }

    private getBackdropColor() {
        console.log("High: " + this.temperature.high + " | Low: " + this.temperature.low);
        var median: number = (this.temperature.high + this.temperature.low) / 2;
        console.log("Median: " + median);

        if (this.temperature.current > median) {
            return "rgba(255, 0, 0, " + ((this.temperature.high - median) / 10) / (this.temperature.current - median) + ")";
        }
        if (this.temperature.current < median) {
            return "rgba(0, 0, 255, " + ((median - this.temperature.low) / 10) / (median - this.temperature.current) + ")";
        }

        return "rgb(255, 255, 255)"
    }
}
