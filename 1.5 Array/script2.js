function penjumlahan ( a, b){
    return a + b ;
}

const total = penjumlahan ( 9 , 5) + penjumlahan ( 8,7);
console.log(total);

function pengurangan ( a , b ){
return a - b ;
}

//fungsi deklarasi
function perkalian (a ,b ){
    return a * b ;
}
 
// fungsi ekpresi
const pembagian = function ( a , b){
    return a/b ;
}

let lanjut;

do {
        console.log("-- APLIKASI KALKULATOR SEDERHANA--");
console.log("================================================");
console.log("-- Silahkan pilih menu di bawah ; --");
console.log("1. penjumlahan");
console.log("2. perkalian");
console.log("3. penguranagan");
console.log("4. pembagian");
console.log("================================================");

const menu = prompt (" pilih menu :");
let a,b;

switch (menu){
 case "1":
    a = prompt ("Masukan Nilai a : ");
    b = prompt ("Masukan Nilai b : ");
    console.log(parseInt(penjumlahan(a,b)));
 

case "2":
    a = prompt ("Masukan Nilai a : ");
    b = prompt ("Masukan Nilai b : ");
    console.log(parseInt(perkalian(a,b)));

case "3":
    a = prompt ("Masukan Nilai a : ");
    b = prompt ("Masukan Nilai b : ");
    console.log(parseInt(pengurangan(a,b)));

case "4":
    a = prompt ("Masukan Nilai a : ");
    b = prompt ("Masukan Nilai b : ");
    console.log(parseFloat(pembagian(a,b)));
     
    default:
      alert("Menu yang anda pilih tidak tersedia !");
      break;
}
   lanjut = prompt ("Mau ppilih menu yang lain ? (Y/T)")
} while (lanjut !== "Y" || lanjut === "T");

console.log("-- PROGRAM SELESAI ! ")
   
