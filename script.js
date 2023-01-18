// Formulario
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let formulario = document.querySelector("#formulario");
let infoForm = document.querySelector(".infoForm");


nombre.addEventListener("input", function(){
    if(nombre.value === ""){
        alert("ingrese un nombre")
    }
});

email.addEventListener("input", function(){
    if(email.value === ""){
        alert("ingrese su correo electronico")
    }
});

const mostrarInfoForm = formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    infoForm.innerHTML = `
    <div class="alert alert-info" role="alert">
    <p>Buen dia ${nombre.value}, nos contactaremos al correo ${email.value} para darle mas informacion</p>
    </div>
    `;
});

//Seccion de productos

 const sectionProductos = document.querySelector("#contenedor")
 
 fetch("./data.json")
 .then((resp) => resp.json())
 .then((data) => mostrarProds(data))
 
 function mostrarProds (prods){
     prods.forEach(prod => {
         const card = document.createElement('div');
         card.innerHTML = `
         <div class="card" style="width: 18rem">
         <div class="card-body">
         <h5 class="card-title">${prod.nombre}</h5>
         <p class="card-text des">${prod.descripcion}</p>
         <p class="card-text pre">${prod.precio}</p>
         <button class="btn btn-primary btn-comprar" id="${prod.id}">Comprar</button>
         </div>
         </div>
         `
         sectionProductos.appendChild(card);
        });
        const botonesComprar = document.querySelectorAll('.btn-comprar');
        botonesComprar.forEach(btn => {
            btn.addEventListener('click', (e)=> agregarAlCarrito(e, prods));
            
        })
    }
    
    const carrito = document.querySelector("#carrito")
    let prodCarrito = []
    
    function agregarAlCarrito(e, productos){
        
        const prodElegido = productos.find(el=>el.id ===parseInt( e.target.id));
        prodCarrito = [...prodCarrito, prodElegido];
        carritoHTML()
    } 
    
    
    function carritoHTML(){
        actualizarCarrito()
        prodCarrito.forEach((prod)=>{
            let item = document.createElement("div")
            item.innerHTML= `
            <div class="container">
            <h5>${prod.nombre}</h5>
            <p>${prod.descripcion}</<p>
            <p>${prod.precio}</<p>
            <button class="btn btn-danger" id="${prod.id}">Eliminar</button>
            </div>
            `
            carrito.appendChild(item)
        })
    }

    function actualizarCarrito(){
        carrito.innerHTML=""
    }

    
    const eliminarDeCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
        actualizarCarrito()
    }
    console.log(prodId)

    carrito.addEventListener("click", eliminarDeCarrito);