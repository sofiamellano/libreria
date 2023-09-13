import { auth } from "js/firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const formRegristro=document.getElementById("registroForm")

formRegristro.addEventListener("submit",async ()=>{
    const email=formRegristro['txtEmail'].value;
    const password=formRegristro['txtPassword'].value;
    await createUserWithEmailAndPassword(auth, email, password);
})