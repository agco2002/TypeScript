import { Passenger } from './../../../01-TypeScript-intro/src/topics/11-optional-chaining.';

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Andres',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    // const howManyChildren = passenger.children!.length;
}