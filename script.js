const btnAdicionar = document.getElementById('adicionar');
const valorTarefa = document.getElementById('texto-input');

const li = document.createElement('li')


if (tarefas = JSON.parse(localStorage.getItem('listas'))) {

    tarefas.forEach(element => {
        let algumacoisa = criarTarefa(element)
        renderizarTarefa(algumacoisa)
    });
}


//  const retornoMap = arrayTarefas.map((element) => {
//      const li = document.createElement('li')

//     li.innerHTML = `
//      <p>${element}</p>
//      <div> 
//          <button class="excluir"></button>
//           <button class="concluir"></button>
//        </div>`
//     return li
//    });

//    console.log(retornoMap)


function criarTarefa(valorTarefa) {
    const li = document.createElement('li')

    li.innerHTML = `
    <p>${valorTarefa}</p>
    <div> 
        <button class="excluir"></button>
        <button class="concluir"></button>
    </div>`
    return li
}

function renderizarTarefa(tarefa) {
    const listaTarefas = document.querySelector('ul')

    listaTarefas.appendChild(tarefa)

}

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    if (valorTarefa.value == '') {
        alert('Digite uma tarefa válida.')
    }
    else {

        const tarefa = criarTarefa(valorTarefa.value)

        renderizarTarefa(tarefa)
        

        tarefas.push(valorTarefa.value)

    }
    localStorage.setItem('listas', JSON.stringify(tarefas));


    valorTarefa.value = ''
})


const listaTarefas = document.querySelector('ul')

listaTarefas.addEventListener('click', (elemento) => {
    const itemClicado = elemento.target


    if (itemClicado.classList.contains('excluir')) {
        itemClicado.parentElement.parentElement.remove()

        localStorage.removeItem('listas');

    }
    if (itemClicado.classList.contains('concluir')) {
        itemClicado.parentElement.parentElement.classList.toggle('concluido')
    }

})
