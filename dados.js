// localStorage.setItem('teste','Krons')
// sessionStorage.setItem('teste','Hendrix')

// const testeLocal = localStorage.getItem('teste')
// const testeSession = sessionStorage.getItem('teste')

// divLocal.innerText = testeLocal
// divSession.innerText = testeSession



const divLocal = document.getElementById('local')
const divSession = document.getElementById('session')


const nomes = ['Krons', 'Mike', 'Hendrix', 'Talon']

localStorage.setItem('teste', JSON.stringify(nomes))

const recuperandoDados = localStorage.getItem('teste')



console.log(recuperandoDados)


