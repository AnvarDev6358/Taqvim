'use strict'

const getData = async (region = localStorage.getItem('selectedLocation')) => {
    // console.log(region);
    renderTime()
    try {
        const today = await fetch(`https://islomapi.uz/api/present/day?region=${region}`)
        const result = await today.json()
        console.log(result);

        const week = await fetch(`https://islomapi.uz/api/present/week?region=${region}`)
        const weekResult = await week.json()
        console.log(weekResult);


        localStorage.setItem("day", JSON.stringify(result));
        localStorage.setItem("week", JSON.stringify(weekResult));

    }
    catch (er) {
        console.log(er);
    }

}
getData()


$('#region').addEventListener('change', (e) => {
    localStorage.setItem('selectedLocation', e.target.value)
    getData(e.target.value)
    selectRegion()

})


function renderTime() {
    let data = JSON.parse(localStorage.getItem('day'))
    let weekData = JSON.parse(localStorage.getItem('week'))
    // console.log(data);
    // console.log(weekData);




    // ===========get data===========
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    let today = `${day}.${month}.${year}`
    // console.log(today);
    $('.today').innerHTML = today

    const weekDay = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]


    weekDay.forEach((e) => {
        $("#weekResult").innerHTML = ''
        weekData.forEach((el) => {
            let table = createElement('tr', `${el.weekday === e ? "bg-success fw-bold fst-italic " : "info-tr fw-bold"}`)
            table.innerHTML = `
        <th>${el.weekday}</th>
        <td>${el.region}</td>
        <td>${el.date.substring(0, 10)}</td>
        <td>${el.times.tong_saharlik}</td>
        <td>${el.times.quyosh}</td>
        <td>${el.times.peshin}</td>
        <td>${el.times.asr}</td>
        <td>${el.times.shom_iftor}</td>
        <td>${el.times.hufton}</td>
        `
            console.log(table);
            console.log(weekData);
            $("#weekResult").appendChild(table)
        })
    })







    // ===========get hours===========
    setInterval(() => {
        let hours = new Date().getHours();
        let Minutes = new Date().getMinutes();
        let Secunds = new Date().getSeconds();
        let hour = `${hours}:${Minutes}:${Secunds}`
        console.log(hour);
        console.log(hour);
        $('.fullHour').innerHTML = hour;
    }, 1000);



    const cardTimes = $$('.time')
    const {
        times: {
            asr,
            hufton,
            peshin,
            quyosh,
            shom_iftor,
            tong_saharlik,
        }
    } = data

    cardTimes[0].innerHTML = tong_saharlik;
    cardTimes[1].innerHTML = quyosh;
    cardTimes[2].innerHTML = peshin;
    cardTimes[3].innerHTML = asr;
    cardTimes[4].innerHTML = shom_iftor;
    cardTimes[5].innerHTML = hufton;

    // console.log(weekData);

}



const states = ["Toshkent", "Andijon", "Buxoro", "Farg'ona", "Jizzax", "Qarshi", "Namangan", "Navoiy", "Nukus", "Samarqand", "Guliston"]
states.forEach((e) => {
    const option = document.createElement('option')
    option.setAttribute('class', 'option')
    option.innerHTML = e
    $('#region').appendChild(option)
})


function selectRegion() {
    $("#selectedLocation").innerHTML = localStorage.getItem('selectedLocation')

}
selectRegion()
