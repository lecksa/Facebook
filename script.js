let base_url = "http://localhost:8080/users"

let wrap_1 = document.querySelector('.wrap_1')
let wrap_2 = document.querySelector('.wrap_2')
let wrap_3 = document.querySelector('.wrap_3')

let p_1 = document.getElementById('f')
let p_2 = document.getElementById('s')
let p_3 = document.getElementById('t')

fetch(base_url)
    .then(res => res.json())
    .then(res => {
        cut(res, wrap_1)
        cut_2(res, wrap_2)
        cut_3(res, wrap_3)
    })



function reload(arr, place) {
    place.innerHTML = ""

    for (let i = 0; i < 4; i++) {
        place.innerHTML += `
        <div class="box">
            <h1>${arr[i].name}</h1>
            <p>
                age: ${arr[i].age} <br>
                company: ${arr[i].company.name} <br>
                website: ${arr[i].website} <br>
                phone: ${arr[i].phone}
            </p>
            <button>
                <a href="/Facebook/index_2.html?id=${arr[i].id}">Подробнее</a>
            </button>
        </div>
        `
    }
}

function reload_all(arr, place) {
    place.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {
        place.innerHTML += `
        <div class="box">
            <h1>${arr[i].name}</h1>
            <p>
                age: ${arr[i].age} <br>
                company: ${arr[i].company.name} <br>
                website: ${arr[i].website} <br>
                phone: ${arr[i].phone}
            </p>
            <button>
                <a href="/Facebook/index_2.html?id=${arr[i].id}">Подробнее</a>
            </button>
        </div>
        `
    }
}


// function reload_2(arr, place_2) {
//     place_2.innerHTML = ""

//     for (let item of arr) {
//         place_2.innerHTML += `
//         <div class="box">
//             <h1>${item.name}</h1>
//             <p>
//                 age: ${item.age} <br>
//                 company: ${item.company.name} <br>
//                 website: ${item.website} <br>
//                 phone: ${item.phone}
//             </p>
//             <button>
//                 <a href="/index_2.html?id=${item.id}">Подробнее</a>
//             </button>
//         </div>
//         `
//     }
// }

// function reload_3(arr, place_3) {
//     place_3.innerHTML = ""

//     for (let item of arr) {
//         place_3.innerHTML += `
//         <div class="box">
//             <h1>${item.name}</h1>
//             <p>
//                 age: ${item.age} <br>
//                 company: ${item.company.name} <br>
//                 website: ${item.website} <br>
//                 phone: ${item.phone}
//             </p>
//             <button>
//                 <a href="/index_2.html?id=${item.id}">Подробнее</a>
//             </button>
//         </div>
//         `
//     }
// }

function cut(arr, place) {

    p_1.onclick = () => {
        let filtered = arr.filter(user => user.age <= 18)

        if (p_1.innerHTML === "Показать еще 3 пользователей") {
            p_1.innerHTML = "Скрыть"
            p_1.classList.add("hide")
            reload_all(filtered, place)
        } else {
            p_1.innerHTML = "Показать еще 3 пользователей"
            p_1.classList.remove("hide")
            reload(filtered, place)
        }
    }

    reload(arr.filter(user => user.age <= 18), place)

    // for (let item of arr) {
    //     if (item.age <= 18) {
    //         fetch(base_url + "junior", {
    //             method: "post",
    //             body: JSON.stringify(item),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 let filtered = JSON.stringify(res).slice(0, 4)
    //                 reload(filtered, place_1)
    //             })


    //         p_1.onclick = () => {
    //             if (p_1.innerHTML === "Показать еще 1 автомобилей") {
    //                 p_1.innerHTML = "Скрыть"
    //                 p_1.classList.add("hide")
    //                 fetch(base_url + "junior")
    //                     .then(res => res.json())
    //                     .then(res => reload(res, place_1))
    //             } else {
    //                 p_1.innerHTML = "Показать еще 1 автомобилей"
    //                 p_1.classList.remove("hide")
    //                 fetch(base_url + "users")
    //                     .then(res => res.json())
    //                     .then(res => {
    //                         cut(res, wrap_1)
    //                     })
    //             }
    //         }
    //     }
    // }
}

function cut_2(arr, place) {
    let filtered = arr.filter(user => user.age > 18 && user.age <= 25)

    p_2.onclick = () => {
        if (p_2.innerHTML === "Показать еще 3 пользователей") {
            p_2.innerHTML = "Скрыть"
            p_2.classList.add("hide")
            reload_all(filtered, place)
        } else {
            p_2.innerHTML = "Показать еще 3 пользователей"
            p_2.classList.remove("hide")
            reload(filtered, place)
        }
    }

    reload(filtered, place)
}

function cut_3(arr, place) {
    let filtered = arr.filter(user => user.age > 25)

    p_3.onclick = () => {
        if (p_3.innerHTML === "Показать еще 2 пользователей") {
            p_3.innerHTML = "Скрыть"
            p_3.classList.add("hide")
            reload_all(filtered, place)
        } else {
            p_3.innerHTML = "Показать еще 2 пользователей"
            p_3.classList.remove("hide")
            reload(filtered, place)
        }
    }

    reload(filtered, place)
}
