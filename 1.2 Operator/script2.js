function hitungUpah() {
    let nama = document.getElementById("nama").value;
    let jamKerja = parseFloat(document.getElementById("jamKerja").value);
  
    let gaji;
    if (jamKerja <= 48) {
      gaji = jamKerja * 2000;
    } else {
      let lembur = jamKerja - 48;
      gaji = 48 * 2000 + lembur * 3000;
    }
  
    // Menambahkan hasil ke tabel
    let tbody = document.getElementById("hasilBody");
  
    // Baris untuk Nama dan Upah
    let newRowNamaUpah = tbody.insertRow();
    let cellNama = newRowNamaUpah.insertCell(0);
    let cellUpah = newRowNamaUpah.insertCell(1);
  
    cellNama.innerHTML = nama;
    cellUpah.innerHTML = gaji;
  
    // Baris untuk Jam Kerja
    let newRowJamKerja = tbody.insertRow();
    let cellJamKerjaLabel = newRowJamKerja.insertCell(0);
    let cellJamKerjaValue = newRowJamKerja.insertCell(1);
  
    cellJamKerjaLabel.innerHTML = "Jam Kerja";
    cellJamKerjaValue.innerHTML = jamKerja;
  
    tbody.append(td_fun());
  
    // Create td
    function td_fun() {
      let td = document.createElement("tr");
      td.innerHTML = `
      <tr>
                  <td id="namaResult" class="result-cell">MauL</td>
                  <td id="upahResult" class="result-cell">96000</td>
              </tr>
              <tr>
                  <td id="jamKerjaLabel" class="result-cell">Jam Kerja</td>
                  <td id="jamKerjaResult" class="result-cell">48</td>
              </tr>
      `;
      return td;
    }
  
    alert("Data berhasil ditambahkan!");
  }
  