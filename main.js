let date = new Date(); // Uzimam datum

let day = date.getDate(); // Iz datuma uzimam 'Dan'
console.log(date, day);
let month = date.getMonth() +1; // Iz datuma 'Mesec'
console.log(month);
let year = date.getFullYear(); // Iz datuma 'Godinu'
console.log(year);

// Dodajemo 0 ispred dana i meseci zbog api-a
day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;
// Kreiram datum.
date = `${day}.${month}.${year}`
console.log(date);
// https://api.kursna-lista.info/e04c1183a16dc2bf05af01f0cbae109c/kl_na_dan/22.01.2024/json

const urlDate = `https://api.kursna-lista.info/e04c1183a16dc2bf05af01f0cbae109c/kl_na_dan/${date}/json`
console.log(urlDate);

let list = [];

$(document).ready(function(){
    $.ajax({
        url: urlDate,
        dataType: 'jsonp',
        success: function(data){
            console.log(data);
            list = data.result
            console.log(list);
            for(let x in list) {
                showData(x,list[x])
            }
        },
        error: function(error){
            alert(error.message)
        }
    })
})

const showData = (key, keyValue) => {
    const tableBody = document.querySelector('#tableBody')
    let html = ''
    if(key != 'date') {
        html += `
            <tr>
                <td>
                    <img src="images/kurs/${key}.png">
                    <span>${key}</span>
                </td>
                <td>${keyValue["kup"]}</td>
                <td>${keyValue["sre"]}</td>
                <td>${keyValue["pro"]}</td>
            </tr>
          `
    }
    tableBody.innerHTML += html
}