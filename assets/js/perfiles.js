function obtenerNombres(){
    var nombre = document.querySelector("#nombre");
    var nombre_obtenido = nombre.value;
    localStorage.setItem("nombreNino", nombre_obtenido);
    window.location.href = "../index.html";
}

var nombre_guardado = localStorage.getItem("nombreNino");
var nombre_Nino = document.querySelector("#Nombre_Nino");
if(nombre_Nino && nombre_guardado){
    nombre_Nino.innerHTML = nombre_guardado;
}