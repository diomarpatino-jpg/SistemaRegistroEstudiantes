let contador = 1;

window.onload = cargarDatos;

function registrar(){

let nombre=document.getElementById("nombre").value.trim();
let edad=document.getElementById("edad").value;

if(nombre==""){
alert("Ingrese el nombre");
return;
}

if(edad==""){
alert("Ingrese la edad");
return;
}

if(edad<5 || edad>100){
alert("La edad debe estar entre 5 y 100 años");
return;
}

let fecha=new Date().toLocaleDateString();

let tabla=document.getElementById("tabla");

let fila=tabla.insertRow();

fila.innerHTML=`
<td>${contador}</td>
<td>${nombre}</td>
<td>${edad}</td>
<td>${fecha}</td>
<td><button class="eliminar" onclick="eliminar(this)">Eliminar</button></td>
`;

contador++;

guardar();

actualizarTotal();

document.getElementById("nombre").value="";
document.getElementById("edad").value="";

}

function eliminar(btn){

btn.parentNode.parentNode.remove();

guardar();

actualizarTotal();

}

function actualizarTotal(){

let filas=document.getElementById("tabla").rows.length;

document.getElementById("total").innerHTML="Total estudiantes: "+filas;

}

function buscar(){

let filtro=document.getElementById("buscar").value.toUpperCase();

let filas=document.getElementById("tabla").rows;

for(let i=0;i<filas.length;i++){

let nombre=filas[i].cells[1].innerHTML.toUpperCase();

filas[i].style.display=nombre.includes(filtro)?"":"none";

}

}

function borrarTodo(){

if(confirm("¿Desea eliminar todos los registros?")){

document.getElementById("tabla").innerHTML="";

guardar();

actualizarTotal();

}

}

function guardar(){

localStorage.setItem("tabla",document.getElementById("tabla").innerHTML);

}

function cargarDatos(){

let datos=localStorage.getItem("tabla");

if(datos){

document.getElementById("tabla").innerHTML=datos;

}

actualizarTotal();

}