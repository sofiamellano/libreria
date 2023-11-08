import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { nuestroAlert } from "./nuestroAlert.js";


const formRegristro=document.getElementById("registroForm")

// configuramos la escucha del evento submit para que se ejecute el siguiente codigo
formRegristro.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email=formRegristro['txtEmail'].value;
    const password=formRegristro['txtPassword'].value;
    try {

        //creamos el usuario
        await createUserWithEmailAndPassword(auth, email, password).then((credencialesUsuario)=>{
            sendEmailVerification(auth.currentUser)});

        //tomamos referencia de la ventana modal
        const ventanaRegistro=document.getElementById("registrarseModal");
        const modal=bootstrap.Modal.getInstance(ventanaRegistro);

        //ocultamos la ventana
        modal.hide(); 
    } catch (error) {
        console.log(error.code);
        nuestroAlert("Ups... Ocurrio un Problema"+error.code);
    }  
})