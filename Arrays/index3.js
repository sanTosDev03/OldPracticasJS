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

// Destructuring
const [primerEquipo,segundoEquipo] = ligaArgentina;
console.log(primerEquipo);
console.log(segundoEquipo);

// Destructuring dejando espacios
const [ , , tercerEquipo,cuartoEquipo ] = ligaArgentina;
console.log(tercerEquipo);
console.log(cuartoEquipo);
