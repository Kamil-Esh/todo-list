// let ul = document.createElement('ul')
// let li = document.createElement('li')
// li.textContent = 'Drink cofee'
// ul.appendChild(li)
// document.body.appendChild(ul)
//
// let musicInput = document.querySelector('.music-input')
// let addBtn = document.querySelector('.add-btn')
// let ul = document.createElement('ul')
//
// addBtn.addEventListener('click', () => {
//     let li = document.createElement('li')
//     if (musicInput.value.length > 0) {
//         li.textContent = musicInput.value
//         let delBtn = document.createElement('button')
//         delBtn.textContent = 'Delete'
//         delBtn.addEventListener('click', () => {
//             li.remove()
//         })
//         li.appendChild(delBtn)
//         ul.appendChild(li)
//         document.body.appendChild(ul)
//         musicInput.value = ''
//     }
// })
localStorage.setItem('test', 'Drink cofee')
const add = () => {
    const newTodo = document.querySelector('.todo-input').value
    if (newTodo.length > 0) {
        let todos = getTodos()
        todos = [...todos, newTodo]
        localStorage.setItem('todos', JSON.stringify(todos))
        document.querySelector('.todo-input').value = ''
        view()
    }
}

const getTodos = () => {
    let todos = []
    let todos_in_storage = JSON.parse(localStorage.getItem('todos'))
    if (todos_in_storage !== null) {
        todos = todos_in_storage
    }
    return todos
}



const view = () => {
    let todos = getTodos()
    let ul = '<ul>'
    todos.forEach(el => ul = ul + `<li>${el} <a href="#" class="clear-text del-btn"><svg id="Layer_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg></a></li>`)
    ul = ul + '</ul>'
    document.querySelector('.todos').innerHTML = ul
    document.querySelectorAll('.del-btn').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            let todos = getTodos()
            todos.splice(idx,1)
            localStorage.setItem('todos',JSON.stringify(todos))
            view()
        })
    })
}

document.querySelector('.add-btn').addEventListener('click', add)
document.querySelector('.todo-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        add()
    }
})
view()

