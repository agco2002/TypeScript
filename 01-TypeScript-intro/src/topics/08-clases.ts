export class Person {
    
    //public name: string;
    //public address: string;

    constructor(
        public name: string, 
        private address: string = "No address",
    ) {}
}

export class hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ){
    super(realName, 'New York')
    }
}

const ironman = new hero('Ironman', 45, 'New York');

console.log(ironman);




//Super() es una funcin especial que le indica a typeScript que tiene que llamar al constructor del padre 