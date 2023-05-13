/*OBTENER REFERENCIA A TODOS LOS BOTONES*/
let botones = document.querySelectorAll("#catalogo > article > div > button");

/*AGREGAR EL ESCUCHA DEL EVENTO CLICK, EJECUTAR METODO */
botones.forEach(element => {
    element.addEventListener("click", agregarCarrito);
});

/*METODO PARA AGREGAR EL PRODUCTO AL CARRITO*/

function agregarCarrito(producto){
    /*CONSEGUIR LOS DATOS DEL PRODUCTO*/
    let tituloProducto = producto.target.parentElement.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.parentElement.querySelector("picture");

    
    /*COLOCAR EN EL MODAL*/

   let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
   
   /* CONDICIONAL PARA SABER SI ESTA VACIO*/
   if(modalCuerpo.querySelector("p").innerHTML == "Tu carrito esta vacio"){
   modalCuerpo.innerHTML = "";
    }

   modalCuerpo.innerHTML += "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>";

   /*Avisar que se agrego al carrito*/
   alert("Se agrego correctamente el producto");
}


/*METODO PARA LIMPIAR EL CARRITO*/
let botonLimpiar = document.querySelector("#limpiar");
botonLimpiar.addEventListener("click", limpiarCarrito);

function limpiarCarrito() {
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
    modalCuerpo.innerHTML = "<p>Tu carrito esta vacio</p>";
  }
 

