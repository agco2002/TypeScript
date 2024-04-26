import './style.css'
//Lo que estamos haciendo con la palabra "import" es requerrir un modulo
//import './topics/02-object-interface.ts';
//import './topics/1-basic-types.ts';
//import './topics/03-functions.ts';
//import './topics/04-homework-types.ts';
//import './topics/05-basic-destructuring.ts';
//import './topics/06-function-destructuring.ts';
//import './topics/07-import-export.ts';
//import './topics/8.1-clases-composicion.ts';
import './topics/11-optional-chaining..ts';
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1 class="title">Hola mundo</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


//Un modulo es una agrupacion encapsulada de un procedimiento 