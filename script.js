let input = document.querySelector('#input')
let button = document.querySelector('#button')
let list = document.querySelector('#list')

let tl = []

button.addEventListener('click', add)

function add() {
    if (input.value === '') {
        retern
    }
createEl()
input.value = ''
console.log(tl)
}

function createEl() {

let li = document.createElement ('li')
li.className = 'li'
li.textContent = input.value
let tl2 = {
    name: input.value
}
tl.push(tl2)



let btn = document.createElement ('button')
btn.className = 'del'
btn.id = 'del'
btn.textContent = ('Удалить')
li.appendChild(btn)

list.appendChild(li)


li.addEventListener('click', important)

function important() {
    li.classList.toggle('li-important')
}

btn.addEventListener('click', deleteEl)

function deleteEl() {
    let tll = []
    list.removeChild(li)
    let n1 = {
        name: list.textContent
    }
    tll.push(n1)
    console.log(tll)
}

let removeAll = document.querySelector('#deleteAll')
    removeAll.addEventListener('click', deleteAll)

function deleteAll() {
    // alert('Вы уверены что хотите удалить?')
    list.removeChild(li)
    
}

}
