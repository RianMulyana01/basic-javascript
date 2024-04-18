function kubus(a) {
    return a ** 3;
  }
  function balok(a, b, c) {
    return a * b * c;
  }
  function tabung(a, b) {
    return (22 / 7) * a ** 2 * b;
  }
  function bola(a, b) {
    return (((4 / 3) * 22) / 7) * a ** 3;
  }
  function Kerucut(a, b) {
    return (1 / 3) * (22 / 7) * a ** 2 * b;
  }
  let lanjut;
do {
  console.log("--KALKULATOR VOLUME BANGUN RUANG--");
  console.log("=================================");
  console.log("--Silahkan pilih menu di bawah: ");
  console.log("1. Kubus  ");
  console.log("2. Balok  ");
  console.log("3. Tabung ");
  console.log("4. Bola   ");
  console.log("5. Kerucut");
  console.log("=================================");

  const menu = prompt("Pilih Menu: ");
  let a, b;

  switch (menu) {
    case "1":
      a = parseInt(prompt("Masukan panjang sisi kubus :"));
      console.log("Volume kubus dari " + a + "^3 " + "= " + kubus(a));
      break;

    case "2":
      a = prompt("Masukan panjang balok :");
      b = prompt("Masukan lebar balok :");
      c = prompt("Masukan tinggi balok :");
      console.log(
          "Volume balok dari " +
            a +
            "*" +
            b +
            "*" +
            c +
            " = " +
            parseInt(balok(a, b, c))
        );
        break;

    case "3":
      a = prompt("Masukan Jari-jari alas tabung :");
      b = prompt("Masukan Tinggi tabung :");
      console.log(
              "Volume tabung dari " +
                "22/7 * " +
                a +
                "^2" +
                " " +
                "* " +
                b +
                " = " +
                parseInt(tabung(a, b))
            );
            break;

    case "4":
      a = prompt("Masukan Jari-jari bola :");
      console.log(
                  "Volume bola dari " +
                    "4/3 * 22/7 * " +
                    a +
                    "^3" +
                    " = " +
                    parseFloat(bola(a))
                );
                break;
          
    case "5":
      a = prompt("Masukan Jari-jari alas :");
      b = prompt("Masukan tinggi kerucut :");
      console.log(
                  "Volume kerucut dari  1/3 * 22/7 * " +
                    a +
                    "^2" +
                    " * " +
                    b +
                    " = " +
                    parseFloat(bola(a, b))
                );
                break;

      default:
      alert("Menu yang anda pilih tidak tersedia !");
      break;
  }
  lanjut = prompt(" Mau pilih menu yang lain ? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log(" PROGRAM SELESAI !");