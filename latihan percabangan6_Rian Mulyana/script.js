console.log("== PROGRAM KALKULATOR SEDERHANA ==");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("5. Keluar Program");
console.log("Silahkan Pilih Menu : ");

console.log("\n\n\n\n\n");

const menu = prompt("Silahkan Pilih Menu: ");

let angka1;
let angka2;

switch (menu) {
  case "1": {
    angka1 = prompt("Angka Pertama: ");
    angka2 = prompt("Angka Kedua: ");

    console.log("Angka Pertama: " + angka1);
    console.log("Angka Kedua: " + angka2);

    console.log(
      "Hasil dari " +
        angka1 +
        " + " +
        angka2 +
        " = " +
        (parseInt(angka1) + parseInt(angka2))
    );
    break;
  }
  case "2": {
    angka1 = prompt("Angka Pertama: ");
    angka2 = prompt("Angka Kedua: ");

    console.log("Angka Pertama: " + angka1);
    console.log("Angka Kedua: " + angka2);

    console.log(
      "Hasil dari " + angka1 + " - " + angka2 + " = " + (angka1 - angka2)
    );
    break;
  }
  case "3": {
    angka1 = prompt("Angka Pertama: ");
    angka2 = prompt("Angka Kedua: ");

    console.log("Angka Pertama: " + angka1);
    console.log("Angka Kedua: " + angka2);
    console.log(
      "Hasil dari " + angka1 + " x " + angka2 + " = " + angka1 * angka2
    );
    break;
  }
  case "4": {
    angka1 = prompt("Angka Pertama: ");
    angka2 = prompt("Angka Kedua: ");

    console.log("Angka Pertama: " + angka1);
    console.log("Angka Kedua: " + angka2);

    console.log(
      "Hasil dari " + angka1 + " / " + angka2 + " = " + angka1 / angka2
    );
    break;
  }
  case "5":
    console.log("Keluar Program... Terima Kasih!");
    break;
  default:
    console.log("Menu yang Anda pilih tidak tersedia");
    break;
}