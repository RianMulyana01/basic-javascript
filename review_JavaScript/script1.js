for (let num = 1; num <= 100; num++)
{
let Bil_prima = true;

// Bilangan prima harus lebih besar dari 1
if (num > 1) {
    // Loop untuk memeriksa apakah num bisa dibagi oleh bilangan lain selain 1 dan num itu sendiri
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            Bil_prima = false;
            break; // Keluar dari loop karena sudah pasti bukan bilangan prima
        }
    }
} else {
    Bil_prima = false; // Bilangan kurang dari atau sama dengan 1 bukan bilangan prima
}

// Cetak nomor dan pesan apakah bilangan prima
if (Bil_prima) {
    console.log(num + " adalah bilangan prima");
} 

else {
    console.log(num);
}
}



