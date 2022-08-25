
const container = document.querySelector(".container");
const carrito = document.querySelector(".carrito");

let carritoPre = JSON.parse(localStorage.getItem("carrito")) || [];

const prendas = [
    {
        nombre: "Remera corazón",
        precio:9500,
        id:1001, 
    },
    {
        nombre: "Buzzo frizza",
        precio:3500,
        id:1002, 
    },
    {
        nombre: "Pantalon Jeans",
        precio:8560,
        id:1003, 
    },
    {
        nombre: "Campera puffer Negra",
        precio:12500,
        id:1004, 
    },
    {
        nombre: "Campera puffer Salmon",
        precio:12500,
        id:1005, 
    },
    {
        nombre: "Jeans azul Oscuro",
        precio:8590,
        id:1006, 
    },
    {
        nombre: "Remera mangas largas rayada",
        precio:2900,
        id:1007, 
    },
    {
        nombre: "Body escote espalda",
        precio:1980,
        id:1008, 
    },

]

function crearCards(){
    prendas.forEach((pre)=> {
        container.innerHTML += `<div>
        <h4>${pre.nombre}</h4>
        <p>$${pre.precio}</p>
        <button id=""btn-agregar${pre.id}>Agregar</button>
        </div>`;
    });
    agregarFuncion()
}

function agregarFuncion(){
    prendas.forEach((pre)=>{
    document.querySelector(`#btn-agregar${pre.id}`)
        addEventListener("click" , ()=> {
        console.log("click");
    });
    
    })
}

crearCards()

function agregarAlCarrito(pre) {
    let existe = carrito.some((prendaSome)=> prendaSomeSome.id === pre.id)
    if (existe === false){
        pre.cantidad = 1;
        carrito.push(pre);   
     }
     else{
         let preFInd = carrito.find((prendaFind) => prendaFind.id === pre.id);
         preFInd.cantidad++;
     }
     console.log(carrito);
     renderizarCarrito()
}
function renderizarCarrito() {
    carrito.innerHTML = ""
    carrito.forEach(pre => {
        carrito.innerHTML = `<div>
        <h4>${pre.nombre}</h4>
        <p> CANTIDAD ${pre.cantidad}</p>
        <button id=""btn-borrar${pre.id}>Borrar</button>
        </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto()
}
        
function borrarProducto(){
    carrito.forEach((prod)=>{
        document.querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", ()=> {
            carrito = carrito.filter (
                (prendaFilter) => prendaFilter.id !== pre.id
            );
           renderizarCarrito();
        });
        
        })
}

