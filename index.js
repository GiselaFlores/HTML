let numero = true;
const frutas = ["manzana", "pera", "kiwi"];
const frutasCaribeñas = ["mango", "papaya", "maracuya", "coco"];

console.log(frutas);
console.log(frutas.length -1);

//console.log(frutas[0][1]);

// metodos

// agregar al final
frutas.push("Ananá");
console.log(frutas);

// agregar al principio
frutas.unshift("frutilla");
console.log(frutas);

// eliminar al final
frutas.pop();
console.log(frutas);

// eliminar al principio
frutas.shift();
console.log(frutas);

// unir arrays
const frutasDeEstacion = frutas.concat(frutasCaribeñas);
console.log(frutasDeEstacion);

// convertir array en string
const texto = frutasDeEstacion.join(",");
console.log(texto);

const frutasDeEstacion2 = texto.split(",");
console.log(frutasDeEstacion2);

// cortar una parte de un array

const cortado = frutasDeEstacion2.slice(2, 5);
console.log(cortado);

// ordenamiento
console.log(frutasDeEstacion2.sort());

const numeros = [95, 5, 25, 10, 250];
console.log(numeros.sort());

console.log(numeros.sort((a, b)=> a - b));

// recorridos foreach  array.forEach((iteración)=>{proceso})

numeros.forEach((numero)=>{
    console.log("El numero es: " + numero);
})


const mapRetorno = numeros.map((num)=>{
                                        let multi10 = num*10;

                                        return multi10;
                                    });

console.log(mapRetorno);

const mapRetorno2 = numeros.map(num2 => num2*10);
console.log(mapRetorno2);


//DOM

let cualquiera = document.querySelector("p");
console.log(cualquiera);

cualquiera.textContent = "Hola mundo";

