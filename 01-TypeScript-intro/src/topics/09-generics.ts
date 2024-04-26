export function whatsMyType<T>(argumen: T): T{
    return argumen;
}

const amIString = whatsMyType('Hola mundo');
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

// El simbolo de <> significa que el codigo es un generico 