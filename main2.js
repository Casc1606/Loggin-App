window.onload = () => {


    const idInputEnviar = "enviar";
    const idInputNombre = "nombre";
    const idInputApellido = "apellido";
    const idInputCorreo = "correo";
    const idInputNumero = "numero";
    const idInputNacionalidad = "nacionalidad";
    const idInputOcupacion = "ocupacion"; 
    const prefitsIdInput = "id_";
    const idTabla = "tbody";

    getElementById(idInputEnviar).onclick = () => {
        doOnClick ();
    };

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
    }
    
    function addCellWithValue (index, value, row) {
        var cell = row.insertCell(index);
        cell.innerHTML = value;
    }

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


    document.getElementById("id_autocompletar").onclick = () => {
        miFuncion()
    };

    function miFuncion() {
        getElementById(idInputNombre).value = "Camilo";
        getElementById(idInputApellido).value = "Salamanca";
        getElementById(idInputCorreo).value = "casc@hotdog.com";
        getElementById(idInputNumero).value = "3223223223";
        getElementById(idInputNacionalidad).value = "Colombiano";
        getElementById(idInputOcupacion).value = "Chef";
    }

    // document.getElementById("id_nombre").value

}