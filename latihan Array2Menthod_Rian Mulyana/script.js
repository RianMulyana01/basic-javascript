const nilaiMahasiswa = [36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80, 79];

function tentukanIndexNilai(nilai) {
    if (nilai > 80) {
        return 'A';
    } else if (nilai >= 70 && nilai <= 80) {
        return 'B';
    } else if (nilai >= 55 && nilai < 70) {
        return 'C';
    } else if (nilai >= 45 && nilai < 55) {
        return 'D';
    } else {
        return 'E';
    }
}

function tampilkanNilaiDanIndex(nilaiArray) {
    console.log("===============================");
    console.log("No\tNilai Ujian\tIndex Nilai");
    console.log("===============================");
    for (let i = 0; i < nilaiArray.length; i++) {
        const nilai = nilaiArray[i];
        const indexNilai = tentukanIndexNilai(nilai);
        console.log((i+1) + "\t\t" + nilai + "\t\t\t" + indexNilai);
    }
    console.log("===============================");

}
tampilkanNilaiDanIndex(nilaiMahasiswa);