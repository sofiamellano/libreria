import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const menuCerrarSesion=document.getElementById("menuCerrarSesion");

menuCerrarSesion.addEventListener("click", async ()=>{
    await signOut(auth);
})