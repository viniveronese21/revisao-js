const numero = Number(prompt ('Digite um numero'));
const numId = document.getElementById('num-id');
const text = document.getElementById('text');

numId.innerHTML = numero;

text.innerHTML = '';
text.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
text.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} </p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;
