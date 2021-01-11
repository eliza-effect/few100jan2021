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

    describe('string literals', () => {

        it('delimmiting strings', () => {
            const myName = 'Eliza';
            expect(myName).toBe("Eliza"); // best practice is single quotes but TS accepts both
            const author = 'Flannery O\'Connor';
        });
        it('template strings', () => {  //backtick delimited
            const s1 = `still a string lol`;
            const s2 = `I can put
                    new lines in this string and it just works`;
            const name = 'Bob';
            const job = 'Dev';
            const info = 'The name is ' + name + ' Job: ' + job;
            const full_info = `The name is $(name) and the job is $(job)`
        });
    });

    describe('array literals', () => {

        it('has them', () => {
            // the only thing you have that can hold multiple values in javascript is arrays
            const luckyNums: number[] = [1, 234, 63554];
            const multiFormat: (string | number)[] = [1, 3, 'potato'];
        });
    });
});
