export class Temperature {
    private _temperature: number;

    constructor(temperature: number) {
        this._temperature = temperature;
     }

     get temperature(): number {
         return this.temperature;
     }
}
