import { Product, taxCalculation } from './06-function-destructuring';
//La idea de las importaciones y exportaciones no se resume a transformar nuestros archivos a modulos 


const shoppingCart: Product[] = [

    { 
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'iPad',
        price: 150,
    }
];

const [total, tax] = taxCalculation({
    product: shoppingCart,
    tax: 0.15,
});

console.log('Total', total);
console.log('Tax', tax);