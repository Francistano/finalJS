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
.then((data) => {
    data.forEach((prod) => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <p class="card-text">${prod.precio}</p>
          <button class="btn btn-primary" id="cardBotton">Comprar</button>
        </div>
      </div>        
        `
        sectionProductos.append(div)
    })
})
