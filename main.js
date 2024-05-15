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




function sumEveryOther(...n){
    let total = n.reduce((a, b) => a + b, 0);

    console.log(total);

}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26 



function addOnlyNums(...arr){
    let sum=0
    for (let i=0; i<arr.length;i++){
        if(typeof arr[i] === "number"){
            sum+=arr[i]
        }
    }
    console.log(sum);
    return sum
}

addOnlyNums (1, 'perro', 2, 4); //7



function countTheArgs(...countargs){
   console.log(countargs.length)
}

countTheArgs('gato', 'perro') //2
countTheArgs('gato', 'perro', 'pollo', 'oso') //4

const n1=[1,2,3,4]
const n2=[10,12]
combineTwoArrays(n1,n2)

function combineTwoArrays(arr1,arr2){
   let arrayspread = [...arr1,...arr2]
console.log(arrayspread)
} 



//EXTRAS

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy)
console.log(maximaManana)

  

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); //['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

function onlyUniques (...a){
    const norepetidos = new Set(a);
   console.log(Array.from(norepetidos)) 
}



combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...arrays) {
    
    console.log( [].concat(...arrays));}



    function sumAndSquare(...args) {
        return args.map(num => num * num).reduce((sum, squared) => sum + squared, 0);
      }
      
      console.log(sumAndSquare(3, 6, 7, 8,2, 7, 3, 1)); 
      console.log(sumAndSquare(4, 5));    
      console.log(sumAndSquare(2, 7, 3, 1));
      