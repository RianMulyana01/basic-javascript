// Fungsi untuk meminta input jumlah angka yang diinginkan
function inputJumlah() {
    let jumlahAngka = parseInt(
      prompt("Berapa Angka yang ingin dimasukkan?")
    );
    return jumlahAngka;
  }
  
  function masukanAngka(jumlahAngka) {
    let nomor = [];
    for (let i = 0; i < jumlahAngka; i++) {
      let inputAngka = prompt(" Masukkan angka ke  " + (i + 1) + "")
      nomor.push(Number(inputAngka));
    }
    return nomor;
  }
  
  function rata_rata(nomor) {
    let jumlah = 0;
    for (let i = 0; i < nomor.length; i++) {
      jumlah += nomor[i];
    }
    let rataRata = jumlah / nomor.length;
    return { jumlah, rataRata };
  }
  
  let jumlahAngka = inputJumlah();
  
  let inputNomor = masukanAngka(jumlahAngka);
  
  console.log("Angka yang dimasukkan:");
  for (let i = 0; i < inputNomor.length; i++) {
    console.log(i + 1 + " = " + inputNomor[i]);
  }
  
  let { jumlah, rataRata } = rata_rata(inputNomor);
  console.log("Jumlah dari angka-angka yang dimasukkan adalah: " + jumlah);
  console.log("Rata-rata dari Angka yang dimasukkan adalah: " + rataRata);