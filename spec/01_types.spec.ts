describe('types in Typescript', () => {

    describe('declaring variables and consts', () => {
        it('explicitly typed local variables', () => {
            let x: number | string; // union type.

            x = 'Tacos';

            expect(typeof (x)).toBe('string');
            x = 3.14;

            expect(typeof (x)).toBe('number');

            // x = function(a:number,b:number) {
            //     return a + b;
            // }
        });
        it('implictly typed variables', () => {
            let x = 3.14;
            let y = 'Brown';

            let z: number | string = 32;

            z = 'Pizza';

            // x = 'Tacos';

            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
            }
            let movie: Movie = {
                title: 'Knives Out',
                director: 'Johnson',
                yearReleased: 2019
            };
            let movie2: Movie = {
                title: 'Thor Ragnorak',
                director: 'Taika Waititi',
                yearReleased: 2017
            }

            expect(movie.title).toBe('Knives Out');

        });

        it('constants', () => {
            const name = 'Joe';

            // name = 'Joseph';

            const task = {
                description: 'Clean Garage',
                completed: false
            }
            task.completed = true;

            const friends = ['Billy', 'Sean', 'Zac', 'Amy'];
            // friends = [];
            friends[2] = 'Emma';
            expect(friends).toEqual(['Billy', 'Sean', 'Emma', 'Amy']);

        });

    });
    describe('literals', () => {
        it('has string literals', () => {

            expect('tacos').toEqual("tacos");

            const quote = 'She said "It isn\'t over yet!"';
            const name = "Flannery O'Connel";

            const someEscapeStuff = 'The story is this:\n\nIt was a dark and stormy night\n\n\t\tTHE END';
            console.log(someEscapeStuff);
        });
        it('literal strings (interpolated strings)', () => {
            expect('tacos').toEqual(`tacos`);

            const fragment = `<div>
            <h1>Hello</h1>
            </div>`;
            console.log(fragment);

            const name = 'Bob';
            const age = 52;

            // string message3 = $"The name {name} and the age is {age}";
            const message1 = 'The name is ' + name + ' and the age is ' + age;
            const message2 = `The name is ${name} and the age is ${age}`;
            expect(message1).toEqual(message2);
        });
        it('numbers', () => {
            const n1 = 1;
            const n2 = 1.3;
            let nHex = 0xFF; // base 16
            let nOct = 0o22; // base 8;
            let nBin = 0b010101; // base 2
            let nBigNumber = 123_848_293_909.56;
        });

    });
});