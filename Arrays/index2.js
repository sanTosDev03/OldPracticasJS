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

// Agregar uno o mas elementos al final del array
ligaArgentina.push("Atletico de Rafaela");

// Agrega uno o mas elementos al primer lugar de la fila 
ligaArgentina.unshift("Godoy Cruz");

console.table(ligaArgentina);

// Unir dos array con el spreed operator 

const ligaAscenso = [
    "Chacarita",
    "Club Deportivo Maipu",
    "Club Atlético San Martín de Tucumán",
    "Club Almirante Brown",
    "Club Atlético Nueva Chicago"
]
const copaArgentina = [...ligaArgentina,...ligaAscenso]
console.table(copaArgentina);


// Eliminar el ultimo elemento 
copaArgentina.pop();

// Eliminar el primer elemento
copaArgentina.shift();

// Eliminar un elemento en una posición específica 
copaArgentina.splice(19,1);

console.table(copaArgentina);