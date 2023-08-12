// Objetos dentro de objetos
let user = {
    userName: "Santiago",
    edad : 20,
    nacionalidad : {
        nacionalidadPrincipal : "Argentina",
        nacionalidadSecundaria : "Italiana"
    },
    Hobbies : ["Futbol","Cocinar","Leer","Fiesta"],
    infoPersonal : {
        altura : 183,
        peso : 82,
        enfermedades : "Ninguna"
    }
}

console.log(user);


// Acceder a propiedades de Objetos anidados
console.log(user.nacionalidad);

// Modificanco propiedades en Objetos Anidados
user.infoPersonal.peso = 78;
console.log(user.infoPersonal.peso);

// Agregando de propiedades en Objetos Anidados
user.infoPersonal.residencia = "Cordoba,Argentina";
console.log(user.infoPersonal.residencia);

// Destructuring en Objtos 
const {userName,edad} = user;
console.log(userName);
console.log(edad);

// Destructuring con Asignación
const {userName: nombre} = user;
console.log(nombre);

// Destructuring en Objetos Anidados
const { nacionalidad:{ nacionalidadPrincipal: nacionalidad ,nacionalidadSecundaria } } = user;
console.log(nacionalidad);
console.log(nacionalidadSecundaria);