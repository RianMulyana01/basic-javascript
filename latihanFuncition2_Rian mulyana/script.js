//Kalkulator Volume Bangun Ruang
function kubus(a) {
    return a ** 3;
  }
  
  function balok(a, b, c) {
    return a * b * c;
  }
  
  function tabung(a, b) {
    return  (1/2) * a * b;
  }

  function bola(a, b) {
    return 
    function kubus(a) {
        return a ** 3;
      }
      
      function balok(a, b, c) {
        return a * b * c;
      }
      
      function tabung(a, b) {
        return  (1/2) * a * b;
      }
    
      function bola(a, b) {
        return (4/3) * a * b (jariJari, 3);
      }
      
      function kerucut(a, b) {
        return (1/3) * a * b (jariJari, 2) * tinggi;
      }
      
      let lanjut;

      do {
        console.log("--APLIKASI KALKULATOR VOLUME BANGUN RUANG--");
        console.log("=================================");
        console.log("--Silahkan pilih menu di bawah: ");
        console.log("--1. Kubus");
        console.log("--2. Balok");
        console.log("--3. Tabung");
        console.log("--4. Bola");
        console.log("--5. Kerucut");
        console.log("=================================");
      
        const menu = prompt("Pilih Menu: ");
        let a, b;
        switch (menu) {
            case "1":
              a = parseInt(prompt("Masukan nilai a :"));
              b = parseInt(prompt("Masukan nilai b :"));
              console.log(kubus(a, b));
              break;
        
            case "2":
              a = prompt("Masukan nilai a :");
              b = prompt("Masukan nilai b :");
              console.log(parseFloat(balok(a, b)));
              break;
        
            case "3":
              a = prompt("Masukan nilai a :");
              b = prompt("Masukan nilai b :");
              console.log(parseFloat(tabung(a, b)));
              break;
    
            case "4":
              a = prompt("Masukan nilai a :");
              b = prompt("Masukan nilai b :");
              console.log(parseFloat(bola(a, b)));
              break;
    
            case "5":
                a = prompt("Masukan nilai a :");
                b = prompt("Masukan nilai b :");
                console.log(parseFloat(kerucut(a, b)));
                break;
          
        
        
            default:
              alert("Menu yang anda pilih tidak tersedia!");
              break;
          }
          lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
        } while (lanjut === "Y" || lanjut === "y");
        
        console.log("--PROGRAM SELESAI--");
  }
  
  function kerucut(a, b) {
    return
  }
  
  let lanjut;
  do {
    console.log("--APLIKASI KALKULATOR VOLUME BANGUN RUANG--");
    console.log("=================================");
    console.log("--Silahkan pilih menu di bawah: ");
    console.log("--1. Kubus");
    console.log("--2. Balok");
    console.log("--3. Tabung");
    console.log("--4. Bola");
    console.log("--5. Kerucut");
    console.log("=================================");
  
    const menu = prompt("Pilih Menu: ");
    let a, b;
    switch (menu) {
        case "1":
          a = parseInt(prompt("Masukan nilai a :"));
          b = parseInt(prompt("Masukan nilai b :"));
          console.log(kubus(a, b));
          break;
    
        case "2":
          a = prompt("Masukan nilai a :");
          b = prompt("Masukan nilai b :");
          console.log(parseFloat(balok(a, b)));
          break;
    
        case "3":
          a = prompt("Masukan nilai a :");
          b = prompt("Masukan nilai b :");
          console.log(parseFloat(tabung(a, b)));
          break;

        case "4":
          a = prompt("Masukan nilai a :");
          b = prompt("Masukan nilai b :");
          console.log(parseFloat(bola(a, b)));
          break;

        case "5":
            a = prompt("Masukan nilai a :");
            b = prompt("Masukan nilai b :");
            console.log(parseFloat(kerucut(a, b)));
            break;
      
    
    
        default:
          alert("Menu yang anda pilih tidak tersedia!");
          break;
      }
      lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
    } while (lanjut === "Y" || lanjut === "y");
    
    console.log("--PROGRAM SELESAI--");