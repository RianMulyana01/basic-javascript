//If statment

/*
const total_belanja = 80000
if (total_belanja > 100000) {
console.log("selamat anda mendapatkan hadiah !")
}
console.log("Terima kasih sudah berbelanja")


/*
//If ...else
const total_belanja = prompt("masukan total belanja: ");
if (total_belanja > 100000){
    console.log("selamat anda mendapatkan piring cantik!")
} else {
    console.log("Mohon maap anda belum dapat hadiah!")
}
console.log("Terima kasih sudah berbelanja")
*/

/*
// 2.Login
const password = "legendofaang";
if (password === "legendofaang"){
    console.log( "Silahkan masuk , ang!");
} else {
    console.log ("password salah, silahkan coba lagi!");
}
*/

/*
//if ..else if ..else statement


/*
//Switch statemen
const warna = "merah"
let pesan ="";

switch (warna){
 case "merah":
    pesan = "anda memilih warna merah";
    break;

 case "biru":
    pesan = "anda memilih warna biru";
    break;

 case "oren":
    pesan = "anda memilih warna oren";
    break;

    default:
        pesan ="warna yang anda pilih tidak ada!";
        break;
}
console.log(pesan);
*/

const nama = prompt("masukkan Nama Karyawan")
const gol = prompt ("masukkan Golongan Kerja")
const jam_kerja = prompt ("Masukkan jam kerja per minggu")

let gaji_per_jam;

switch (gol){
  case " A ":
  gaji_per_jam = 6000;
  break;
  case " B ":
  gaji_per_jam = 7000;
  break;
  case " C ":
  gaji_per_jam = 8000;
  break;
  case " D ":
  gaji_per_jam = 10000;
  break;
  default:
  console.log("golongan tidak tersedia")
  break;
}

let total_gaji_per_minggu = jam_kerja * gaji_per_jam

let uang_lembur;
if (jam_kerja > 48) {
  uang_lembur = (jam_kerja - 48) * 5000
}

let total_gaji = total_gaji_per_minggu + uang_lembur
console.log("Nama :" + nama+"\n Gololongan: "+gol+"\n jam kerja : "+jam_kerja)
console.log(nama+"menerima gaji sebesar"+total_gaji+"per minggu.")
