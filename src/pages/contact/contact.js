import '/styles.scss'
import {navbarApp} from '../../components/navbar/navbar-app.js'

document.getElementById('navbar-app').innerHTML =  navbarApp();


// Referencia del formulario
// const contactForm = document.getElementById("contactForm");
// const contactForm = document.querySelector("#conactForm");
// const contactForm = document.querySelector("form");
const contactForm = document.forms["contactForm"];

/**
 *  AddEventListener permite agregar funciones que se ejecutarán
 *  en respuesta a un evento específico que ocurre aun elemento del DOM.
 * 
 *  register.addEventListener( type  , fncCallback );
 * 
 *  addEvenListener podemos manejar interacciones del usuario como clics,
 * cambios de teclado, movimientos del mouse, entre otros.
 */
// contactForm.addEventListener( "click"  , ()=>{} );
contactForm.addEventListener( "submit"  , ( event )=>{
    event.preventDefault();
    console.log("Estoy en el evento click del botón submit");

    const formData = {
        fullName : contactForm.elements["fullName"].value,
        email : contactForm.elements["email"].value,
        comments : contactForm.elements["comments"].value,
        termsAndConditions : contactForm.elements["terminos-condiciones"].checked
    }
    
    console.table( formData );
} );
