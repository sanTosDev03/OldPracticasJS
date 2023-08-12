const ligaArgentina = [
    "Boca Juniors",
    "River Plate",
    "Independiente",
    "Racing Club",
    "San Lorenzo",
    "Newell's Old Boys",
    "Rosario Central",
    "Estudiantes de la Plata",
    "Gimnasia y Esgrima de la Plata",
    "Huracan",
    "Lanús",
    "Banfield",
    "Vélez Sarfield",
    "Colón",
    "Unión",
    "Argentinos Juniors",
    "Talleres",
    "Belgrano",
    "Patronato",
    "Aldosivi"
];

console.table(ligaArgentina); // Acceder al array en forma de tabla

console.log(ligaArgentina[10]); // Acceder al array segun el indice

// Acceder al array en forma de bucle 
for (let i = 0; i < ligaArgentina.length; i++) { 
    console.log(ligaArgentina[i]);
}

// Acceder al array en forma de bucle for in // Devuelve los indices
for (const equipo in ligaArgentina) {
   console.log(equipo);
}

// Acceder al array en forma de bucle for of // Devuelve los valores
for (const teams of ligaArgentina) {
    console.log(teams);
}


// Método .forEach
ligaArgentina.forEach( (team,indice) => console.log(`El equipo: ${team} se encuentra en el indice: ${indice}`));

// Método .map

let equiposIndividuales = ligaArgentina.map( (equipos,index) => console.log(`El equipo: ${equipos} se encuentra en la posición: ${index}`));