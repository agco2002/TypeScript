//La interfaz describe la forma de un objeto o una funcion
//Descripcion del producto 
export interface Product {
    description: string;
    price: number;

}
// 1 objeto
//const phone: Product = {
//description: 'Iphone 12',
//price: 1000
//}
//// 2 Objeto
//const tablet: Product = {
//    description: 'iPad Air',
//    price: 2000
//}

//Descrpcion del Calculo para obtener el valor del producto
interface TaxCalculationOptions {
    tax: number;
    product: Product[];
}

//function taxCalculation(options: TaxCalculationOptions):[ number, number] {
//function taxCalculation( {tax, product}: TaxCalculationOptions):[ number, number] {
export function taxCalculation( options: TaxCalculationOptions):[ number, number] {
    const{tax, product}=options;
    let total = 0;
//
    product.forEach (( {price} ) =>{
        total += price;
    }
    ) 
    return [total, total * tax]
}





//const shoppingCart = [phone, tablet];
//const tax = 0.15;
////
//const [total, taxTotal] = taxCalculation ({
//    product: shoppingCart,
//    tax: tax,
//})
//
//console.log('Total', total);
//console.log('Tax', taxTotal);


