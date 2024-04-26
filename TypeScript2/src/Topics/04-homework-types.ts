/*
    ===== Code TypeSript =====
*/
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress:() => string;
}

//Internal objects like "address{}" must also have their interface

 interface Address {
    street: string;
    city: string;
    country: string;
 }



const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};