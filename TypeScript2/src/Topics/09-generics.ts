

export function whatsMyType <T>( argument: T): T{
    return argument;
}

const amIString = whatsMyType('Hola mundo');
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1, 2, 3, 4]);

console.log(amIString.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));