window.onload = () => {
    iniciar();
}

function iniciar() {
    let botonEnviar = document.getElementById("send_btn")
    let botonPokemon = document.getElementById("bringThePokemon_btn")

    botonPokemon.onclick = () => {
        console.log("Quieres pokemons?")
        getAllPokemon();
    }

    botonEnviar.onclick = () => {
        console.log("Quieres enviar?");
        doOnClick();
    }
}

function getAllPokemon () {
    consumirApi('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', llegadaDeDatos);
}

function consumirApi(urlParam, sucessFuntionParam) {
    $.ajax({
        url: urlParam,
        dataType: 'json',
        success: sucessFuntionParam
    });
}

let pokemon;

function llegadaDeDatos(data) {
    console.log(data.results.length-1);
    let pokemonRandom = getRandomInt(data.results.length);
    pokemon = data.results[pokemonRandom];
    autoCompletarDatos(pokemon.name, pokemon.url)
    console.log(pokemon);
    getOnePokemon();
}

function getOnePokemon () {
    consumirApi(pokemon.url, llegadaDeDatosPokemon)
}

function llegadaDeDatosPokemon (resultado) {
    console.log(resultado.sprites.front_default);
    const imgPokemonFrontal = document.getElementById("imgPokemonFrontal");
    imgPokemonFrontal.src = resultado.sprites.front_default;
    console.log(resultado.sprites.back_default);
    const imgPokemonTrasera = document.getElementById("imgPokemonTrasera");
    imgPokemonTrasera.src = resultado.sprites.back_default;
    // añadir acordeon que muestre imagen frontal, lateral y trasera.
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
    getAllPokemon();
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