window.onload = () => {
    iniciar();
}

function iniciar() {
    let botonEnviar = document.getElementById("send_btn")
    let botonPokemon = document.getElementById("bringThePokemon_btn")

    botonPokemon.onclick = () => {
        console.log("Quieres pokemons?")
        traerInformacionPokemon();
    }

    botonEnviar.onclick = () => {
        console.log("Quieres enviar?");
        doOnClick();
    }
}

function traerInformacionPokemon() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
        dataType: 'json',
        success: llegadaDeDatos
    });
}

let pokemon;

function llegadaDeDatos(data) {
    console.log(data.results.length-1);
    let pokemonRandom = getRandomInt(data.results.length);
    pokemon = data.results[pokemonRandom];
    autoCompletarDatos(pokemon.name, pokemon.url)
    console.log(pokemon);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function autoCompletarDatos(pokemon, url) {
    document.getElementById("pokemonInput").value = pokemon
    document.getElementById("urlInput").value = url
}


function doOnClick() {
    const idPokemonInput = document.getElementById("pokemonInput").value;
    const idUrlInput = document.getElementById("urlInput").value;

    var datos = {
        pokemons: idPokemonInput,
        url: idUrlInput,
    }

    console.log(datos);

    addNewRowToTable(datos)
    traerInformacionPokemon();
}

function addNewRowToTable(datos) {


    var table = document.getElementById("id_tbody");
    var row = table.insertRow(0);

    addCellWithValue(0, datos.pokemons, row)
    addCellWithValue(1, datos.url, row)
}

function addCellWithValue(index, value, row) {
    var cell = row.insertCell(index);
    cell.innerHTML = value;
}