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

let user2 = {
    userName: "Maria",
    edad : 23,
    nacionalidad : {
        nacionalidadPrincipal : "Argentina",
        nacionalidadSecundaria : "Italiana"
    },
    Hobbies : ["Futbol","Cocinar","Leer","Fiesta"],
    infoPersonal : {
        altura : 163,
        peso : 72,
        enfermedades : "Ninguna"
    }
}


// Metodo Object.freeze() // Congela un objeto y no permite que se modificado de ninguna manera

Object.freeze(user);

user.peinado = "Degrade";
console.log(user.peinado); // Retorna undefinded porque esta congelado


//Metodo Object.seal() // Sella un objeto para que no se le pueda añadir ninguna propiedad mas pero si modificaciones
Object.seal(user2);
user2.Hobbies = ["Leer","Entrenar","Familia"];
console.log(user2); // Retorna la modificación porque si la permite

user2.libroPreferido = "Los juegos del Hambre";
console.log(user2.libroPreferido); // Retorna undefined porque no permite añadir ninguna propiedad nueva
