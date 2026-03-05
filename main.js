function mostrar(id){

document.querySelectorAll(".pantalla").forEach(p=>{

p.classList.remove("activa")

})

document.getElementById(id).classList.add("activa")

}

function conectar(){

document.getElementById("panelLuces").style.display="flex"

}