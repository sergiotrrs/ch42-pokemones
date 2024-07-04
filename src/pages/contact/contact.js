import '/styles.scss'
import * as bootstrap from 'bootstrap'
import './contact.css'
import { navbarApp } from '../../components/navbar/navbar-app.js'
import { validateInputsForm } from '../../components/validateInputsForm/validateInputsForm.js';
import { postContactForm } from '../../components/postContactForm/postContactForm.js';

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
contactForm.addEventListener( "submit"  , async( event )=>{
    event.preventDefault();
    console.log("Estoy en el evento click del botón submit");

    // Referencia de inputs
    const emailRef = contactForm.elements["email"];
    const fullNameRef = contactForm.elements["fullName"];
    const commentsRef = contactForm.elements["comments"];
    const termsandCondictionsRef = contactForm.elements["terminos-condiciones"];
    
    // Sanitizar los datos
    emailRef.value = emailRef.value.trim().toLowerCase(); // convertir a minúsculas
    fullNameRef.value = fullNameRef.value.trim(); // eliminar espacio al inicoo y final
    commentsRef.value = commentsRef.value.trim();

    const formData = {
        fullName : fullNameRef.value,
        email : emailRef.value,
        comments : commentsRef.value,
        termsAndConditions : termsandCondictionsRef.checked
    }
    
    console.table( formData );

    const results = validateInputsForm( formData ); 
    if( results.isValid ){
        try{
            await postContactForm( formData );
            alert("Gracias por tu mensaje");
        }
        catch(error){
            const errorMessage = document.getElementById("post-error-message");
            errorMessage.innerHTML = error;
            errorMessage.style.display = "block";
            setTimeout( ()=> errorMessage.style.display = "none", 5000  );           
        }
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = results.error;
        errorMessage.style.display = "block";
        setTimeout( ()=> errorMessage.style.display = "none", 5000  );
    }


} );


