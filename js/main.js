"use strict"

// 1. Synchronous and Asynchronous What is the difference between synchronous and asynchronous code in JavaScript ?
// 2. fetch
// 3.rest API



// ==== Synchronous and Asynchronous What is the difference between synchronous and asynchronous code in JavaScript ?

// Synchronous bu odatiy functionlarni ishlawi yani misol uchun 10ta function yozib 10 xl vaqtda bajariw vaqti belgilansa Synchronous 
// functionlarda qaysi function brinchi yozilgan bolsa u function qacon qanca vaqtda ish bajarishidan qat'i nazar function caqirilish
// ketma ketlikigi boyica ishlaydi


// Asynchronous function esa qaysi function birinchi ish bajarishga tayyor bolsa yoki qaysi function osan backendan yuklansa uwani birinci ciqaradi
// va synchonous functionga nisbatan anca kamroq vaqt sarflaydi. va Asynchronous function ham promise metodida javob qaytaradi.





// ======================REST API======================

// API bu backEnd bilan frontEnd ozaro malumot almashishiga yani misol uchun inputdan malumot qidirayotkanimizda 
// input orqali yozilgan malumot backEndga ketadi va topsa frontEndgA qaytaradi agar topilmasa topilmadi deydi 
// ana uwa jarayonni API deymiz





// ======================================= fetch=============================


fetch('https://reqres.in/api/users?page=2')
    .then((data) => data.json())
    .then((result) => console.log(result.data))
    // .then((result) => renderUser(result.data))
    .catch((er) => console.log(er));



// function renderUser(data) {
//     data.forEach((el) => {
//         const card = document.creatElement('div')
//         card.setAttribute('card shadow')
//         card.innerHTML = `
//         <img src="${el.avatar}" alt="user" class="img-top-card">
//         <div class="card-body"
//         <h4>${el.first_name}</h4>
//         <h4>${el.last_name}</h4>
//         <p>${el.email}</p>
//         </div>
//         `

//         $('.wrapper').prepend(card)

//     });
//     console.log(card);
// }


