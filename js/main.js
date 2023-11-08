import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { nuestroAlert } from "./nuestroAlert.js";


const menusDesconectados=document.querySelectorAll(".menuDesconectado");
const menuConectado=document.querySelectorAll(".menuConectado");
onAuthStateChanged(auth, async (user)=>{
    console.log(user);
    if (user){//Hay un usuario que inicio sesion
        if (user.emailVerified) {//Tiene el correo verificado
            menusDesconectados.forEach(elemento=>elemento.style.display="none");
            menuConectado.forEach(elemento=>elemento.style.display="block");
        }else{
            nuestroAlert("Debe validar su correo para poder acceder a la plataforma")
            menusDesconectados.forEach(elemento=>elemento.style.display="block");
            menuConectado.forEach(elemento=>elemento.style.display="none");
        }
    } else{//No hay un usuario que inicio sesion
        menusDesconectados.forEach(elemento=>elemento.style.display="block");
        menuConectado.forEach(elemento=>elemento.style.display="none");
    }
})
