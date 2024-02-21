let id = location.search.split('=').at(-1)

let h1 = document.querySelector('h1')
let p = document.querySelector('p')

let object = document.querySelector('.object')

fetch("http://localhost:5500/users/" + id)
    .then(res => res.json())
    .then(res => {
        h1.innerHTML = "User:" + ' ' + id + " " + '-' + " " + res.name

        p.innerHTML = JSON.stringify(res)
    })
