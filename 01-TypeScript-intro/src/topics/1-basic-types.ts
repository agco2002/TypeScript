const name: string = 'Andres';
let hpPoints: number | string = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

//Definimos un objeto para moistarlo en la consolola 
console.log({
    name, hpPoints, isAlive
})

export {};

//En TypeScript cunado se define el valor de la variable, no es necesario colocar el tipo de dato 