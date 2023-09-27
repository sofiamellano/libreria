console.log("el archivo javascript ya esta importado");
const urlApi="https://ingenieria-bd23.restdb.io/rest/libros?apikey=64f8c70c68885409dc0bfe7f";

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostraran los libros
        const contenedor=document.getElementById("contenedorLibros");

        let contenidoHTML = "";

        fetch(urlApi)
        .then(respuesta=>respuesta.json())
        .then(libros=>{
            console.log(libros);
            for (const libro of libros) {
                contenidoHTML+= `
                <div>
                    <img src="${libro.portada_url}" class="img-thumbnail"/>
                    <h4>${libro.nombre}</h4>
                    <h5>Autor: ${libro.autor}</h5>
                    <h5>Genero: ${libro.genero}</h5>
                    <details>
                    <summary>Mas Info:</summary>
                    Sinopsis: ${libro.sinopsis}<br/>
                    Paginas: ${libro.paginas}<br/>
                    Editorial: ${libro.editorial}
                    </details>
                    <a href="#" onclick="applibros.editarLibro('${libro._id}')">Editar</a>

                </div>
                `
            }
            console.log(contenidoHTML)
            contenedor.innerHTML=contenidoHTML;
        })
        
        
    },
    agregarLibros:()=>{
        const txtNombre=document.getElementById("txtNombre");
        const txtPaginas=document.getElementById("txtPaginas");
        const txtAutor=document.getElementById("txtAutor");
        const txtEditorial=document.getElementById("txtEditorial");
        const txtPortadaUrl=document.getElementById("txtPortadaUrl");
        const txtSinopsis=document.getElementById("txtSinopsis");
        const txtGenero=document.getElementById("txtGenero");
        
        const nuevoLibro = {
            "nombre": txtNombre.value,
            "paginas": txtPaginas.value,
            "autor": txtAutor.value,
            "editorial": txtEditorial.value,
            "portada_url": txtPortadaUrl.value,
            "sinopsis": txtSinopsis.value,
            "genero": txtGenero.value,
        };
        console.log(nuevoLibro);
        fetch(urlApi, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoLibro)
            })  
            .then(response => {
            console.log(response);
            window.location.href="index.html";
              //return movies.obtenerTodos();
            });
    },
    editarLibro:(idLibroAEditar)=>{
        const urlApi=`https://ingenieria-bd23.restdb.io/rest/libros/${idLibroAEditar}?apikey=64f8c70c68885409dc0bfe7f`;
        fetch(urlApi).then(res => res.json()).then(libro =>{
            document.getElementById("txtNombre").value=libro.nombre;
            document.getElementById("txtPaginas").value=libro.paginas;
            console.log(libro);
        });
    }
}
applibros.listarLibros();