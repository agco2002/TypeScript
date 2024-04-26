//Esta funcion se puede adjuntar a las clases, propiedades y a los metodos de las clases y ussa de la siguiente manera @classDecorator 
function classDecorator(

    constructor: any
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}



@classDecorator 
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo')
    }
}

console.log( SuperClass)

const myClass = new SuperClass();
console.log(myClass);



//Los decoradores nos ayuda a crear frameworks o librerias 
//Los de coradores son funciones especiales que se adjuntan a diferentes objetos 
