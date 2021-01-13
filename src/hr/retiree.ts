import { Person } from "./person";

export class Retiree extends Person {
    private _pension: number = 80_000;

    constructor(
        public firstName: string,
        public lastName: string,
        public department: string) {
        //gotta call into base class's constructor
        super(firstName, lastName);
    }

    get pension(): number {
        return this._pension;
    }

}