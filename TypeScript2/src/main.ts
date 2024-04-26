import './style.css'

//import './Topics/01-basic-types.ts';
//import './Topics/02-object-interface.ts';
//import './Topics/04-homework-types.ts';
//import './Topics/05-basic-destructuring.ts';
//import './Topics/06-function-destructuring.ts';
//import './Topics/08-classes.ts';
//import './Topics/09-generics.ts'; 
//import './EjerciciosTypeScript/Calcular_IMC.ts'; 
import './EjerciciosTypeScript/Ejercicios.ts'; 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Hola mundo</h1>
  </div>
`

//Lo que estamos haciendo con el import es requerir un modulo
//Un modulo es una agrupacion encapsulada de un procedimiento 