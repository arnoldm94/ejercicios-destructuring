//PARTE 1


const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

const [p1,p2,p3] = empleados

console.log(p2) //datos de ana

console.log(p1.email) //email de luis



const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}


const {name: nombre} = pokemon

console.log(nombre) // name cambiado por nombre y extraido el nombre del pokemon

const tipo = pokemon.type

console.log (tipo)

const [a1, a2, a3, a4] = pokemon.moves

console.log (a2) //se extrae el movimiento tackle


const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}


const pokemonmerge = { ...pokemon, ...pikachu}

console.log(pokemonmerge); //se combinan los valores iguales

let suma = 0
function sumEveryOther(...n){
    let total = n.reduce((a, b) => a + b, 0);

    console.log(total);

}



sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 



function addOnlyNums (...arr){
    if ((typeof(arr[1]) == Number)) {
        
    }
    let total = n.reduce((a, b) => a + b, 0);
}