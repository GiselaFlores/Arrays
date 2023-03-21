const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
ul = document.querySelector("ul");

//ForEach
numeros.forEach((num)=>{

    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
});

//Map
const multiplosDeDiez = numeros.map(multi => multi*50);
console.log(multiplosDeDiez);

const multiplosDeDiez2 = numeros.map((multiDos) =>{

    let resultado = multiDos;
    const li = document.createElement("li");
    li.textContent = resultado;
    ul.appendChild(li);

    return resultado;
});

console.log(multiplosDeDiez2);


/* Metodos

https://tutobasico.com/metodos-arrays-javascript/

https://francescricart.com/metodos-javascript/

https://es.javascript.info/array-methods

*/ 
const entreNum = numeros.filter(numDos => numDos>2 && numDos<6);
console.log(entreNum);

const contadorUnico = numeros.reduce((acumulador, itera)=>acumulador + itera);
console.log(contadorUnico);

const orden = numeros.sort((a, b)=> a>b ? -1:1);
console.log(orden);