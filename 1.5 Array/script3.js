const arr = [3,5,7,9,11];

//leght = Menampilkan jumlah isi dari array
console.log(arr.length)// 5

//join = mengabungkan isi array menjadi sebuah string
const word = ['k','A','T', 'A', 'K'];
const word2 = ["selamat","Datang","di","BLK"];
console.log(word.join(" "));
console.log(word2.join(" "));

//push = menambahkan elemen array di bagian terakhir.
arr.push(13, 15, 17);
word.push("B","E","R","A","C","U","N") ;
word2.push("Karawang");

console.log(arr);
console.log(word.join(" ")+"\n"+word2.join(" "));

//pop = menghapus elemen terakhir array
arr.pop()
console.log(arr)

//unshift = menambahkan elemen di awal array
arr.unshift(1)
console.log(arr)

//shift = menghapus elemen pertama di array
word.shift()
    console.log()                                                                                                                                                                              

//slice = (idAwal, idAkhir )
const siswa = ["maulana","Naufal","Faisal","Taufik","Ryann"];

//slice=  Akan menghasilkan array baru
const siswa2 = siswa.slice(2,5);
console.log(siswa2);

//splice = menisipkan elemen di index tertentu
//splice(idxAwal, mau di hapus berapa, elemen1,elemen2, ...)

siswa.splice(2 , 0 , "yudha","Jabbar","Dani");
console.log(siswa);

//foreach = sama kayak perulangan "for"
const nilai = [70 , 75 , 82, 65 ,58]

nilai.forEach(function (e,i ) {
    console.log("Index ke-" + i + " = " + e);
})

//sort = mengurutkan array
console.log(nilai,sort());

//map
const dikaliDua = nilai.map(function (e){
    return e * 2
});
console.log(dikaliDua);

//filter & find
const bilanganbulat = [2,3,1,7,6,8,11,8]

const bilbul1 = bilanganbulat.filter(function (e) {
    return e > 5 ;
});

const bilbul2 = bilanganbulat.find(function (e) {
    return e > 5 ;
});

console.log(bilbul1);
console.log(bilbul2);