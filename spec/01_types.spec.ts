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
        it('booleans', () => {
            const isTrue = true;
            const isFalse = false;
            // any value can be implicitly converted to a boolean.
            const name = 'Bob';
            let nameExists = null;
            if (name) {
                nameExists = 'Yep';
            }

            expect(nameExists).toBe('Yep');

            expect("bob").toBeTruthy();
            expect("sue").toBeTruthy();
            expect('').toBeFalsy();
            expect(undefined).toBeFalsy();
            expect(NaN).toBeFalsy();
            expect(undefined).toBeFalsy();
            expect(10).toBeTruthy();
            expect(0).toBeFalsy();
            expect(true).toBeTruthy();
            expect(false).toBeFalsy();
        });

    });
    describe('array literals', () => {
        it('implictly typed arrays', () => {
            const friends = ['Bill', 'Amy', 'Zac'];

            friends[0] = 'THX1138';

            let luckyNumbers: number[];
            luckyNumbers = [1, 9, 20, 108];
            let otherLuckyNumbers: Array<number>;
            otherLuckyNumbers = [1, 12, 18];

            // union arrays
            let varied: (string | number)[];
            varied = [1, 'dog', 12, 'cat'];
            let varied2: Array<string | number>;
            varied2 = [13, 'Beetle', 'Tacos', 99];

            const third = varied2[2];

        });
        it('array destructuring', () => {

            const films = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

            // const f1 = films[0];
            // const f2 = films[2];

            const [f1, , f2] = films;

            expect(f1).toBe('A New Hope');
            expect(f2).toBe('Return of the Jedi');

            const stuffToDo = ['Clean Garage', 'Pull Weeds', 'Fix Spouting'];

            const [first] = stuffToDo;
            // const first = stuffToDo[0];
            expect(first).toBe('Clean Garage');
        });
        describe('typed arrays (tuples)', () => {
            it('a practical example - not using a typed array', () => {

                interface FormattedName {
                    fullName: string,
                    numberOfLetters: number
                }

                function formatName(first: string, last: string): FormattedName {
                    const fullName = `${last}, ${first}`;
                    const numberOfLetters = fullName.length;
                    return {
                        fullName,
                        numberOfLetters
                    }
                }

                const result: FormattedName = formatName('Han', 'Solo');

                expect(result.fullName).toBe('Solo, Han');
                expect(result.numberOfLetters).toBe(9);

                const { numberOfLetters, fullName } = formatName('Luke', 'Skywalker');

                expect(fullName).toBe('Skywalker, Luke');
                expect(numberOfLetters).toBe(15);

                const { fullName: longName } = formatName('Lando', 'Calrissian');

                expect(longName).toBe('Calrissian, Lando');

            });

            it('the same thing as a typed array', () => {

                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const response = formatName('Han', 'Solo');
                expect(response[0]).toBe('Solo, Han');
                expect(response[1]).toBe(9);

                const [name, letters] = formatName('Luke', 'Skywalker');
                expect(name).toBe('Skywalker, Luke');
                expect(letters).toBe(15);

            });
            it('just another example', () => {

                type ArtistTuple = [string, string, string, number];
                let artist: ArtistTuple;

                artist = ['Warren', 'Ellis', 'Musician', 60];

                const artistTwo: ArtistTuple = ['Nick', 'Cave', 'Singer', 62];

                type ThingWithLettersAndStuff = string;

                let name: ThingWithLettersAndStuff;

                name = 'Joe';
                name = 'Sue';

                type Birthdate = string | null;

                interface Person {
                    name: string;
                    birthdate: Birthdate
                }

            });

        });
        it('modifying an array in a non-destructive way', () => {
            const friends = ['Amy', 'Bill', 'David'];

            const friends2 = ['Sarah', ...friends, 'Zac']; // ... here is the 'Spread' operator.

            expect(friends2).toEqual(['Sarah', 'Amy', 'Bill', 'David', 'Zac']);
        });
    });
});