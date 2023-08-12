const user = {
    name : "Santiago",
    age : 20,
    nationality : "Italian",
    saludo : function() {
        console.log(`Bienvenido ${this.name}`);
    }
}
user.saludo();


// Acceder y recorrer un Objeto
console.log(user.age); // Notación de punto (.)
console.log(user["nationality"]); // Notación de corchetes []


// Metodos para obtener las claves y valores del Objeto

let claves = Object.keys(user);
console.log(claves); // Las claves son los nombres de las propiedades

let valores = Object.values(user);
console.log(valores); // Los valores son los valores de las claves

let infoCompleta = Object.entries(user);
console.log(infoCompleta);


// Agregar y eliminar Propiedades a una Objeto 

user.profesion = "Desarrollador de Software y Emprendedor Digital"; // Agregar con notacion de puntos
user["recidencia"] = "Cordoba,Argentina"; // Agregar con notación de Corchetes

let infoPersonal = {
    altura : 183,
    peso : 82,
    hobby : ["Futbol","Fiesta","Cocinar"],
}
Object.assign(user,infoPersonal); // Agregar con el use del metodo Object.assign
console.log(user);



