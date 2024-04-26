//Escribe una función que calcule el IMC (Índice de Masa Corporal) de una persona a partir de su peso y altura. El IMC se calcula utilizando la siguiente fórmula:

//IMC = peso / (altura * altura)
//La función debe recibir dos parámetros: peso (en kilogramos) y altura (en metros). La función debe devolver un valor numérico que represente el IMC.


class Persson {
    public weight: number;
    public height: number;

    constructor(weight: number, height: number){

        this.weight = weight;
        this.height = height;
    }
}

//IMC calculation 
function calculateIMC(height: number = 1.65, weight: number = 58){
    
    const imc = weight / (height * height);
     return imc;
}

const person = new Persson(58, 1.65);
console.log(calculateIMC(person.height, person.weight));

