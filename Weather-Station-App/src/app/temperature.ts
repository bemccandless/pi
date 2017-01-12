export class Temperature {
    private _current: number;
    private _low: number;
    private _high: number;

    constructor(current: number, low: number, high: number) {
        this._current = current;
        this._low = low;
        this._high = high;
     }

     get current(): number {
         return this._current;
     }
     
     get low(): number {
         return this._low;
     }
     
     get high(): number {
         return this._high;
     }
}
