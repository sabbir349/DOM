// const title = document.getElementsByTagName('h1')
// console.log(title[1].innerText)

// const title = document.getElementsByClassName('friend')

// for(const ti of title){
//     console.log(ti)
// }

// const title = document.getElementById('lorem').innerText

// const title = document.querySelectorAll('.friend')
// for(const ti of title){
//     console.log(ti)
// }

// const first = document.getElementById('first')
// first.innerText = 'changed'

// first.style.backgroundColor = 'blue'
// first.style.color = 'white'
// first.style.borderRadius = '15px'
// first.style.textAlign = 'center'
// first.style.width = '60%'

// const container = document.getElementById('container')
// container.setAttribute('class','sabbir')
// container.classList.add('rasel','rafi')
// container.classList.add('shipon')
// container.classList.remove('rafi')
// console.log(container.parentNode.parentNode)
// console.log(container.childNodes[0].nextSibling.innerText)

// const lorem = document.getElementById('lorem')
// lorem.setAttribute('class','sabbir')
// const classDiyeGetKorbo = document.getElementsByClassName('sabbir')
// lorem.removeAttribute('id')
// console.log(classDiyeGetKorbo[0])

const select = document.getElementById('select')
const h2 = document.createElement('h2')
h2.innerText = 'amar sonar bangla'
select.appendChild(h2)

const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = 'tmr akash tmr batash'
ul.appendChild(li)
select.appendChild(ul)

li.setAttribute('id','jatio')
const jation = document.getElementById('jatio')
jation.style.color = 'red'

