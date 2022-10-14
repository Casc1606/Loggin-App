const idInputEnviar = "enviar";
const idInputNombre = "nombre";
const idInputApellido = "apellido";
const idInputCorreo = "correo";
const idInputNumero = "numero";
const idInputNacionalidad = "nacionalidad";
const idInputOcupacion = "ocupacion"; 
const prefitsIdInput = "id_";
const idTabla = "tbody";

window.onload = () => {

    getElementById(idInputEnviar).onclick = () => {
        doOnClick ();
    };

    document.getElementById("id_autocompletar").onclick = () => {
        autoCompletarDatos("Camilo", "Salamanca", "casc@casc.com", "3222251464", "Estudiante", "Colombiano")
    };

    traerInformacionInicial();

    // document.getElementById("id_nombre").value

}

function traerInformacionInicial () {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: llegadaDeDatos
      });
}

function llegadaDeDatos(data) {
    console.log(data);
    infoLlegada = data.results[0];
    console.log(infoLlegada);
    autoCompletarDatos(infoLlegada.name.first, infoLlegada.name.last, infoLlegada.email, infoLlegada.cell, "Estudiante", infoLlegada.location.country)
  }

let infoLlegada; 

function addNewRowToTable (datos) {
        
        
    var table = getElementById("tbody");
    var row = table.insertRow(0);

    addCellWithValue (0, datos.nombre, row)
    addCellWithValue (1, datos.apellido, row)
    addCellWithValue (2, datos.correo, row)
    addCellWithValue (3, datos.numero, row)
    addCellWithValue (4, datos.nacionalidad, row)
    addCellWithValue (5, datos.ocupacion, row)
}

function autoCompletarDatos(nombre, apellido, correo, numero, ocupacion, nacionalidad) {
    getElementById(idInputNombre).value = nombre;
    getElementById(idInputApellido).value = apellido;
    getElementById(idInputCorreo).value = correo;
    getElementById(idInputNumero).value = numero;
    getElementById(idInputNacionalidad).value = nacionalidad;
    getElementById(idInputOcupacion).value = ocupacion;
}

function getElementById (elementId) {
    let elemento = document.getElementById(prefitsIdInput + elementId)
    return elemento
}

function getElementValueById (elementId) {
    let elementValue = getElementById (elementId);
    return elementValue.value
}

function consoleLogByElementId (elementId) {
    console.log(getElementById(elementId));
}


function doOnClick () {
    // consoleLogByElementId(idInputNombre);
    // consoleLogByElementId(idInputApellido);
    // consoleLogByElementId(idInputCorreo);
    // consoleLogByElementId(idInputNumero);
    // consoleLogByElementId(idInputNacionalidad);
    // consoleLogByElementId(idInputOcupacion);
    var datos = {
        nombre: getElementValueById(idInputNombre),
        apellido: getElementValueById(idInputApellido),
        correo: getElementValueById(idInputCorreo),
        numero: getElementValueById(idInputNumero),
        nacionalidad: getElementValueById(idInputNacionalidad),
        ocupacion: getElementValueById(idInputOcupacion),
    }

    addNewRowToTable(datos)
    traerInformacionInicial();
}

function addCellWithValue (index, value, row) {
    var cell = row.insertCell(index);
    cell.innerHTML = value;
}