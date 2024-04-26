//Array
let skills: string[] = ['Bash','Counter','Healing'];

//La interface me permite declarar los tipos datos que se insertaron en el objeto strider 
interface character{
    name: string;
    hp: number;
    skills: string[]
    //El signo de interogacion inidica que el valor del hometown es opcional 
    hometown?: string;
}
//Para conectar los valores de la interface con los del objeto strider, declaramos la interface "character" en el objeto strider
//Objeto
const strider: character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter','Healing'],
    
}

strider.hometown = 'Rivendell'

console.table(strider);
export {};

