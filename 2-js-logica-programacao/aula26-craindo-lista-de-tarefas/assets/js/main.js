const inputTarefa = document.querySelector('.imput-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () {
 const li = document.createElement('li');
 return li;
};

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
       if (!inputTarefa.value) return;
       criaTarefa(inputTarefa.value);
    }
});

function limpaImput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('Class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaImput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function(){
if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
       let tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
       listaDeTarefas.push(tarefaTexto);
   }

   const terefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas', terefasJSON);
}

function addTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of  listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();