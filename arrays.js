const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const ul = document.querySelector("ul");

numeros.forEach((num)=>{

    const li =document.createElement("li");
    li.textContent = num;

    ul.appendChild(li);
    
});

const multiplosDeDiez = numeros.map(multi => multi*10)
console.log(multiplosDeDiez);

const multiplosDeDiez2 = numeros.map((multiDos) => {
    
    const li =document.createElement("li");
    let resultado = multiDos*10;

    li.textContent = resultado;

    ul.appendChild(li);

    return resultado;
    
    });

console.log(multiplosDeDiez2);

const pares = numeros.filter(num => num>2 && num<5);
console.log(pares);


const inverso = numeros.sort((a, b)=> a>b ? -1:1);
console.log(inverso);



