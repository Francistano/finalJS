// Formulario
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let formulario = document.querySelector("#formulario");
let infoForm = document.querySelector(".infoForm");
const sectionProductos = document.querySelector("#contenedor")

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

fetch("./data.json")
.then((resp) => resp.json())
.then((data) => console.log(data))