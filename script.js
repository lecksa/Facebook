let base_url = "http://localhost:8060/"

let wrap_1 = document.querySelector('.wrap_1')
let wrap_2 = document.querySelector('.wrap_2')
let wrap_3 = document.querySelector('.wrap_3')

let p_1 = document.getElementById('f')
let p_2 = document.getElementById('s')
let p_3 = document.getElementById('t')

fetch(base_url + "users")
    .then(res => res.json())
    .then(res => {
        cut(res, wrap_1)
        cut_2(res, wrap_2)
        cut_3(res, wrap_3)
    })



function reload(arr, place_1) {
    place_1.innerHTML = ""

    for (let item of arr) {
        place_1.innerHTML += `
        <div class="box">
            <h1>${item.name}</h1>
            <p>
                age: ${item.age} <br>
                company: ${item.company.name} <br>
                website: ${item.website} <br>
                phone: ${item.phone}
            </p>
            <button>
                <a href="/index_2.html?id=${item.id}">Подробнее</a>
            </button>
        </div>
        `
    }
}

function reload_2(arr, place_2) {
    place_2.innerHTML = ""

    for (let item of arr) {
        place_2.innerHTML += `
        <div class="box">
            <h1>${item.name}</h1>
            <p>
                age: ${item.age} <br>
                company: ${item.company.name} <br>
                website: ${item.website} <br>
                phone: ${item.phone}
            </p>
            <button>
                <a href="/index_2.html?id=${item.id}">Подробнее</a>
            </button>
        </div>
        `
    }
}

function reload_3(arr, place_3) {
    place_3.innerHTML = ""

    for (let item of arr) {
        place_3.innerHTML += `
        <div class="box">
            <h1>${item.name}</h1>
            <p>
                age: ${item.age} <br>
                company: ${item.company.name} <br>
                website: ${item.website} <br>
                phone: ${item.phone}
            </p>
            <button>
                <a href="/index_2.html?id=${item.id}">Подробнее</a>
            </button>
        </div>
        `
    }
}

function cut(arr, place_1) {

    for (let item of arr) {
        if (item.age <= 18) {
            console.log(item);
            fetch(base_url + "junior", {
                method: "post",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            let filtered = arr.slice(0, 4)
            reload(filtered, place_1)

            p_1.onclick = () => {
                fetch(base_url + "junior")
                    .then(res => res.json())
                    .then(res => reload(res, place_1))
            }
        }
    }
}

function cut_2(arr, place_2) {

    for (let item of arr) {
        if (item.age <= 25) {
            fetch(base_url + "adult", {
                method: "post",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            let filtered = arr.slice(0, 4)
            reload_2(filtered, place_2)

            p_2.onclick = () => {
                fetch(base_url + "adult")
                    .then(res => res.json())
                    .then(res => reload_2(res, place_2))
            }
        }
    }
}

function cut_3(arr, place_3) {

    for (let item of arr) {
        if (item.age > 25) {
            fetch(base_url + "older", {
                method: "post",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            let filtered = arr.slice(0, 4)
            reload_3(filtered, place_3)

            p_3.onclick = () => {
                fetch(base_url + "older")
                    .then(res => res.json())
                    .then(res => reload_3(res, place_3))
            }
        }
    }
}
