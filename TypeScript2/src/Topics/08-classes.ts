
   //Creando una clase
export class Person {
//public name: string;
//private address: string;
//El constructor nos permite definir la clase 
constructor(
    public firstName: string, 
    public lastName: string,
    private address: string = 'No Address'
) {}


   }

   export class Hero{

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        
        //this.person = new Person(realName,);
    }
   }

   const tony = new Person('Tony Stark','Tony');
   const ironman = new Hero('Ironman',45,'Tony', tony);

   console.log(ironman);

//Creando una clase