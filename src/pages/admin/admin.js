import '/styles.scss'
import * as bootstrap from 'bootstrap'
import './admin.css'
import { navbarApp } from '../../components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();
const logout = document.querySelector("#logout");

logout.addEventListener( "click"  , ( event )=>{ 
    localStorage.removeItem("userSesion");

    window.location.href = '/index.html';
});