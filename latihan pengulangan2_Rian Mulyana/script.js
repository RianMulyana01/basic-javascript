const nilai = prompt(" Silahkan Masukan Nilai N : ");

let total = 0;
for (let i = 1; i <= nilai; i++){
    total += i;
}

console.log("Hasil penjumlahan deret \n antara 1 sampai " + nilai + " adalah = " + total);