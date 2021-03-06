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
    private backdropColor;

    constructor(temperatureService: TemperatureService) {
        this.temperatureService = temperatureService;
    }

    ngOnInit() {
        this.getTemp();
        setInterval(() => {
            this.getTemp(); 
            console.log("Backdrop: " + this.backdropColor);
        }, 30000);
    }

    private getTemp() {
        this.temperatureService.getTemperature()
            .subscribe(temperature => {
                this.temperature = temperature; 
                this.backdropColor = this.getBackdropColor();
            });
    }

    private getBackdropColor() {
        console.log("High: " + this.temperature.high + " | Low: " + this.temperature.low + " | Sum: " + (this.temperature.high + this.temperature.low));
        var median: number = Math.round((this.temperature.high + this.temperature.low) / 2);
        console.log("Median: " + median);

        if (this.temperature.current > median) {;
            return "rgba(255, 0, 0, " + this.getPercentage() + ")";
        }
        if (this.temperature.current < median) {
            return "rgba(0, 0, 255, " + (1 - this.getPercentage()) + ")";
        }

        return "rgb(0, 0, 0)"
    }

    private getPercentage() {
        return ((this.temperature.current - this.temperature.low) / (this.temperature.high - this.temperature.low));
    }
}
