function mostrar(id){

document.querySelectorAll(".pantalla").forEach(p=>{

p.classList.remove("activa")

})

document.getElementById(id).classList.add("activa")

}

function conectar(){

document.getElementById("panelLuces").style.display="flex"

}
//interruptor
const toggle = document.getElementById("modoOscuro")

// cargar preferencia guardada

if(localStorage.getItem("modo") === "oscuro"){

document.body.classList.add("dark-mode")
toggle.checked = true

}

toggle.addEventListener("change",()=>{

if(toggle.checked){

document.body.classList.add("dark-mode")
localStorage.setItem("modo","oscuro")

}else{

document.body.classList.remove("dark-mode")
localStorage.setItem("modo","claro")

}

})