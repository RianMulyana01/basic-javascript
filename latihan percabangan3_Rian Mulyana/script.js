const belanja = prompt("Masukkan total belanja: ");
console.log("Totalbelanja = Rp." + belanja);
console.log(" ")
if (belanja < 100000) {
  console.log("maap anda belum dapat diskon !");
  console.log("Total bayar = Rp." + belanja);
} else if (belanja>= 100000 && belanja < 500000) {
  console.log("Selamat Anda mendapatkan diskon 10%");
  console.log("Total bayar = Rp." + (belanja - lbelanja * 0.1));
} else if (belanja >= 500000 && belanja < 1000000) {
  console.log("Selamat Anda mendapatkan diskon 20%");
  console.log("Total bayar = Rp." + (belanja - belanja * 0.2));
} else if (belanja >= 1000000) {
  console.log("Selamat Anda mendapatkan diskon 30%");
  console.log("Total bayar = Rp." + (belanja - belanja * 0.3));
}

