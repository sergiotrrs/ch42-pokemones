import '/styles.scss'
import * as bootstrap from 'bootstrap'
import './login.css'
import { navbarApp } from '../../components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();

const loginForm = document.forms["loginForm"];

loginForm.addEventListener( "submit"  , async( event )=>{ 
    event.preventDefault();

    const userSesion = {
        role : "admin",
        isAdmin : true,
        expiration: 0
      }
    localStorage.setItem("userSesion", JSON.stringify( userSesion ));

    window.location.href = '/src/pages/admin/admin.html';

});