
let a = 3
let b = 2

let c = a + b 
console.log (c)

a=6
b=3

c = a * b;
console.log(c)

//Penjumlahan
let bilangan1 =15;
let bilangan2 =5;
jumlah = bilangan1 + bilangan2;
console.log(jumlah);

//pengurangan
let angka1 = 15;
let angka2 = 5;
jumlah = angka1 - angka2;
console.log(jumlah)

//perkaliian
let perkalian1 = 20;
let perkalian2 = 2;
jumlah = perkalian1 * perkalian2;
console.log(jumlah)

//pembagian
let pembagian1 = 20;
let pembagian2 = 2;
jumlah = pembagian1/pembagian2;
console.log(jumlah);

//Augmented Assigment
let x = 3
let y = 5
console.log(x +=y) //; x = x + y = = 8
console.log(x +=y)//; 13
console.log(x -=y)//;
console.log(x *=y)//;

//Operator Unary Increment
let k = 5;

console.log(k++);
console.log(k++);
console.log(k++);
console.log(k--);
console.log(k--);
console.log(k--);

//Operator String = bisa mengabungkan kata

const kata1='Selamat'
const kata2='Datang'
console.log(kata1 + kata2);

//Operator ternarry
let angka7 = 15

const ganjilgenap=
angka7 % 2 === 0 ? "ini bilangan genap" : "ini bilangan ganjil";
console.log(ganjilgenap);

let i = 10 
i++;//increment (menambahkan 1 ke Dalam angka sebelumnya)
i++;

++i;//13
i--;// (mengurangi 1 dari angka sebelumnya)
i--;
console.log(i)

const password = "luwakwhitecoffe"
const inslogin =
        password === "biskuithatari"
        ? "anda bayar gue"
        : "lo bayar gue"

// Operator logika
//&& (AND), II (OR), ! (NEGASI)

console.log (10 % 2 === 1 && 10/5 == 2)

//hitung luas segitiga

let alas = prompt("Masukan Alas: ")
console.log("alas segitiga: "+alas)

let tinggi = prompt("Masukan Tinggi:" )
console.log("tinggi segitiga: "+tinggi)

let segitiga = ( alas * tinggi )/ 2
console.log("luas segitiga: "+segitiga)