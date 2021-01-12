//import { Message } from '../src/message'

import { Message } from "../src/message";


describe('variables and types in typescript', () => {
    it('untyped variables', () => {
        let x;
        x = 12;
        expect(x).toBe(12);
        x = 'tacos';
        expect(x).toBe('tacos');
    });

    it('typed variables', () => {
        let x: number | string;
        x = 12;
        expect(x).toBe(12);
        x = 'tacos';
        expect(x).toBe('tacos');
    });

    // it('initializing with let', () => {
    //     let x = 12; //initializing
    //     //Angular will infer that x is always a number and expect x to be a number in the future
    //     //x = 'bird';   <-- This will give a red squiggly b/c it expects a number
    // });

    // it('const stuff', () => {
    //     const pi = 3.1415926585357932384626433;
    //     expect(true).toBe(true);
    // });
    it('does not change underlying type', () => {
        const friends = ['Bob', 'Barb', 'Babe'];
        expect(friends).toEqual(['Bob', 'Barb', 'Babe']);
    });

    it('what is wrong with var anyway', () => {
        //var does not have block scope
        //var is visible outside of original scope where it was declared. See bad example below:
        const age = 22;
        // if (age >= 21) {
        //     var message = 'Old Enough';  // should not be visible to expect below
        // } else {
        //     var message = 'Too Young';  //should not be visible to expect below
        // }
        const message = age >= 21 ? 'Old Enough' : 'Too Young';
        expect(message).toBe('Old Enough');
    });


    describe('literals in typescript', () => {

        it('some examples with numbers', () => {
            let sample: number;
            sample = 10;
            sample = 1.243234;
            sample = 0xff; //base16 hexadecimal
            sample = 0o22; //octal
            sample = 0b101010; //binary
            sample = 123_456; //you can put underscores where commas would go to help your brain read it
            expect(sample).toBe(123456);

            sample = parseFloat('133.23'); //parses number from string
            expect(sample).toBe(133.23);
            sample = parseInt('144.22');
            expect(sample).toBe(144);
        });
    });

    // describe('string literals', () => {

    //     it('delimiting strings', () => {
    //         const myName = 'Eliza';
    //         expect(myName).toBe("Eliza"); // best practice is single quotes but TS accepts both
    //         const author = 'Flannery O\'Connor';
    //     });
    //     it('template strings', () => {  //backtick delimited
    //         const s1 = `still a string lol`;
    //         const s2 = `I can put
    //                 new lines in this string and it just works`;
    //         const name = 'Bob';
    //         const job = 'Dev';
    //         const info = 'The name is ' + name + ' Job: ' + job;
    //         const full_info = `The name is $(name) and the job is $(job)`
    //     });
    // });

    describe('array literals', () => {

        // it('has them', () => {
        //     const rando = [];
        //     rando[0] = 'whee';
        //     rando[1] = 5;
        //     rando[3] = rando;
        // });

        // it('typed arrays', () => {
        //     // the only thing you have that can hold multiple values in javascript is arrays
        //     const luckyNums: number[] = [1, 234, 63554];
        //     const multiFormat: (string | number)[] = [1, 3, 'potato']; //union-type array - each element can be either number or string
        // });

        it('type aliases', () => {
            type MorseCode = 'dot' | 'dash';
            const message: MorseCode[] = ['dot', 'dot', 'dash', 'dot', 'dash'];
            expect(message[0]).toBe('dot');
        });
    });

    describe('tuple types', () => {
        it('basic syntax', () => {
            type Musician = [string, string, number, string];
            const warren: Musician = ['Warren', 'Ellis', 58, 'Guitar'];
            const age = warren[2];
            //with destructuring:
            // const [, lastName, age] = warren;
            expect(typeof (age)).toBe("number");

            const instrument = warren[3];
            expect(typeof (instrument)).toBe("string");
        });

        it('what', () => {
            interface Song {
                title: string;
                artist: string;
                lastPlayed: string;
                lengthInSeconds: number;
                yearReleased?: number;
            }

            const song1: Song = {
                title: 'This Magic Moment',
                artist: 'Lou Reed',
                lastPlayed: 'This morning',
                lengthInSeconds: 213,
                yearReleased: 1998
            }
            expect(song1.artist).toBe('Lou Reed');
        });
        it('duck typing - aka structural typing', () => {
            interface Message {
                from: string,
                message: string
            }
            function logInfo(message: Message) {
                console.log(`logging: ${message.from}: message: ${message.message}`);
            }

            const phoneCall: Message = { from: 'Mom', message: 'Call me!' }
            logInfo(phoneCall);
            expect(phoneCall.from).toBe('Mom');
        });

    });


    describe('an example', () => {
        it('first an OOP would do it this way', () => {

            // names are formatted as last, first
            // string FormatName(string first, string last) { .. }
            function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                const name = `${last}, ${first}`;
                return {
                    fullName: name,
                    numberOfLetters: name.length
                }
            }

            // expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            const result = formatName('Han', 'Solo');
            expect(result.fullName).toBe('Solo, Han');
            expect(result.numberOfLetters).toBe(9);
        });
        it('Here is how you might do it with a tuple type', () => {

            function formatName(first: string, last: string): [string, number] {
                const name = `${last}, ${first}`;
                return [name, name.length];
            }

            const result = formatName('Han', 'Solo');
            expect(result[0]).toBe('Solo, Han');
            expect(result[1]).toBe(9);
        });
    });

    describe('destructuring', () => {

        it('has object destructuring', () => {
            const dataFromApi = { name: 'Bob Smith', phone: '555-1122', age: 53, eyeColor: 'blue' };
            // this will pull just the name and phone from the data
            const { name, phone } = dataFromApi;

            // if you want to name one of the elements differently you can do it like this
            const { name: personName, phone: phoneNumber } = dataFromApi;

            expect(name).toBe('Bob Smith');
            expect(personName).toBe('Bob Smith');
            expect(phoneNumber).toBe('555-1122');
        });
    });
});

describe('function literals', () => {
    it('3 ways to create them', () => {

        //named function
        function add(a: number, b: number): number {
            return a + b;
        }

        //anonymous functions
        //old school
        const subtract = function (a: number, b: number): number {
            return a - b;
        }

        //cool kid way with an arrow
        const multiply = (a: number, b: number): number => a * b;

        expect(subtract(10, 2)).toBe(8);
    });

});

