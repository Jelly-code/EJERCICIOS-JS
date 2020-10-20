// EJERCICIO 1 🍒

const arrayDeBandas=["Pink Floyd", "Nirvana", "ac/dc", "Aerosmith", "Pearl jam", "Audioslave"]
const primerBanda = arrayDeBandas[0]
const tercerBanda = arrayDeBandas[2]
const sextaBanda = arrayDeBandas[5]

console.log(`El nombre de la primera banda es ${primerBanda}, el nombre de la tercera banda es ${tercerBanda} y el nombre de la cuarda banda es ${sextaBanda}`)

// EJERCICIO 2 🍒

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumarNotas = (notas) => {
    let total = 0
    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    return total
}

console.log(sumarNotas(notas))

const calcularPromedio = (notas) => {
    let promedio = sumarNotas(notas) / 10
    return promedio
}

console.log(calcularPromedio(notas))

// EJERCICIO 3 🍒

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

const mostrarPlaylist = (playlist) => {
    for(let cancion of playlist) {
        console.log(cancion)
    }
}

mostrarPlaylist(playlist)

const mostrarPlaylistAlReves = (playlist) => {
    let ultimo = playlist.length - 1;
    for (let i = ultimo; i >= 0; i--) {
        console.log(playlist[i])
    }
}

mostrarPlaylistAlReves(playlist)

// EJERCICIO 4 🍒

const items = ['🍉', '🍐', '🍌', '🍇', '🍓', '🍒']


const obtenerNumeroAlAzar = () => {
    let numero = Math.floor(Math.random() * (items.length));
    return numero
}

obtenerNumeroAlAzar()

const obtenerFrutaAlAzar = (items) => {
    let fruta = items[obtenerNumeroAlAzar()]
    return fruta
    
}

console.log(obtenerFrutaAlAzar(items))

// EJERCICIO 5 🍒

let listaDeFrutas = []

listaDeFrutas.push(obtenerFrutaAlAzar());
listaDeFrutas.push(obtenerFrutaAlAzar());
listaDeFrutas.push(obtenerFrutaAlAzar());
listaDeFrutas.push(obtenerFrutaAlAzar());
listaDeFrutas.push(obtenerFrutaAlAzar());

// EJERCICIO 6 🍒

let listaDeFrutas = []
for ( i = 0; i <= 5; i++) {
listaDeFrutas.push();
}



