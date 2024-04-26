

export class Person {
    
    //public name: string;
    //public address: string;

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = "No address",
    ) {}
}
//Nuestro heroe necesita los datos de persona para tener el nombre y la direccion 
export class hero  {

   // public Person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ){
     //this.Person = new Person(realName);
    }
}

const tony= new Person('Tony', 'Stark', 'New York');
const ironman = new hero('Ironman', 45, 'Tony', tony);

console.log(ironman);




//Super() es una funcin especial que le indica a typeScript que tiene que llamar al constructor del padre 
//Con la composicion evitamos llamar a la funcion super()

//Nuestro heroe necesita los datos de persona para tener el nombre y la direccion 