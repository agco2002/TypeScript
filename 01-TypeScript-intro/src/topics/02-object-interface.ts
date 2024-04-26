
const skills: string[] = ['Bash','Counter','Healing']

//Asignacion de un valor dentro de un objeto 
// caracteres que asignamos a nuestros objetos
interface character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string ;//El signo de interogacion nos indica que es una propiedad opcional 
}
//Object
const strider: character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash','counter',],
}

strider.hometown = 'Rivendell';

console.table(strider)




export {};