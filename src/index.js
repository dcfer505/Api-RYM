import Card from './components/Card.js'

let root = document.querySelector('#root')

let container = document.createElement('div')
container.classList.add('container')
root.append(container)

for (let i = 0; i < 6; i++) {
    container.append(Card(`<p>Hola perro, soy la card ${i + 1}</div>`))
}
