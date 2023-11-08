
export const nuestroAlert=(textoAlert)=>{
    Toastify({
        text: textoAlert,
        duration: 3000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: '#FF4136'
        }
        }).showToast();
}