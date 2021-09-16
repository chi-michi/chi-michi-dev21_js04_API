
const pokedex = document.getElementById("pokedex");

const fetchPokemon = () =>{
    
    const promises = [];

    for (let i = 1; i<= 150; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then( (res) => res.json()));
    }
    
    Promise.all(promises).then( (results) => {
        const pokemon = results.map( (data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map( (type) => type.type.name).join(' , ')
            
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokeman => `
    <li class="card">
        <img class = "card-image" src="${pokeman.image}"/>
        <h2 class = "card-title">${pokeman.id}. ${pokeman.name}</h2>
        <p class=card-subtitle">Type: ${pokeman.type} </p>
    </li>
    `
    )
    .join('');
    pokedex.innerHTML = pokemonHTMLString;
};


fetchPokemon();


// ベリー
const berrydex = document.getElementById("berrydex");

const fetchPokemonberry = () =>{
    
    const promises2 = [];

    for (let i = 1; i<= 64; i++){
        const url = `https://pokeapi.co/api/v2/berry/${i}/`;
        promises2.push(fetch(url).then( (res) => res.json()));
    }

    Promise.all(promises2).then( (results) => {
        const pokemonberry = results.map( (data) => ({
            name:data.name,
            id: data.id,
        }));
        console.log(pokemonberry)
        displayPokemonberry(pokemonberry);
    });
};


const displayPokemonberry = (pokemonberry) => {
    
    const pokemonberryHTMLString = pokemonberry.map(pokemanberry => `
    <li class="card">
        <h2 class = "card-title"> ${pokemanberry.id}. ${pokemanberry.name}</h2>

    </li>
    `
    )
    .join('');
    berrydex.innerHTML = pokemonberryHTMLString;
};


fetchPokemonberry();