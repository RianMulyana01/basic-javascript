const No5 = prompt("Masukan angka yang akan di kalikan:!");
console.log(" Berikut tabel perkalian " + No5);
let hasil = " ";
for (let i = 1; i <= 10; i++) {
    hasil = No5 * i;
    console.log(No5 +" X"+ i + "=" + " "+ hasil)
}
