import './styles.scss'
import * as bootstrap from 'bootstrap'
import './src/components/navbar/navbar-app'
import { navbarApp } from './src/components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();

document.querySelector('#app').innerHTML = `
  <div class="container text-center">
    <h1 class="bg-warning">Día de Emos</h1>
    <button class="btn btn-warning" >Click me</button>
  </div>
`
const changeMain = () =>{
   setInterval( ()=>{
    document.querySelector('#app').innerHTML = `
      <div class="container text-center">
        <h1 class="bg-info">Día de Bolillo y Chocolate</h1>
      </div>
    `
   }, 8000  );
}

changeMain();
