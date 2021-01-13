import { Employee, Retiree } from "../src/hr";


describe('modules and stuff', () => {

    it('using a module to host a class', () => {
        const bob = new Employee('Bob', 'Smith', 'IT');

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');
        expect(bob.fullName).toBe('Smith, Bob');

        bob.firstName = 'Robert';
        expect(bob.firstName).toBe('Robert');
        expect(bob.fullName).toBe('Smith, Robert');

        expect(bob.department).toBe('IT');
        expect(bob.salary).toBe(100_000);
        bob.giveRaise(1000);
        expect(bob.salary).toBe(101_000);
    });

    it('creating a retiree', () => {
        const bob = new Retiree('Bob', 'Smith', 'IT');

        expect(bob.firstName).toBe('Bob');
        expect(bob.lastName).toBe('Smith');
        expect(bob.fullName).toBe('Smith, Bob');

        bob.firstName = 'Robert';
        expect(bob.firstName).toBe('Robert');
        expect(bob.fullName).toBe('Smith, Robert');

        expect(bob.pension).toBe(80_000);
    });
});