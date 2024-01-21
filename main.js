let date = new Date(); // Uzimam datum

let day = date.getDate(); // Iz datuma uzimam 'Dan'
console.log(date, day);
let month = date.getMonth() +1; // Iz datuma 'Mesec'
console.log(month);
let year = date.getFullYear(); // Iz datuma 'Godinu'
console.log(year);

// Dodajemo 0 ispred dana u mesecu zbog api-a
day = day < 10 ? `0${day}` : day;