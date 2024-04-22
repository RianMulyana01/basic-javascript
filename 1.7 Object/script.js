 // key-value pair (pasangan kunci-nilai)
 //key: value (huruf titik untuk key di console)
    
const  mahasiswa = {
    Nama : "Rian Mulyana",
    Nim  : "101112125",
    Umur : 19,
};
console.log(mahasiswa)

//Menambahkan properti ke dalam object
mahasiswa["alamat"] = "Rawagabus pos"
mahasiswa["no_telpon"] = "08122486138"
mahasiswa ["sapa"] = function () {
console.log("Hallo Nama Saya Rian");
};
console.log(mahasiswa);
console.log(mahasiswa.sapa());
console.log(typeof mahasiswa);

//Menghapus properti pada Object
delete mahasiswa["Umur"]
console.log(mahasiswa)

//kumpulan data siswa bentuk array{array of Object}
const siswaBLK = [
    {
        Nama : " Taopik Nurhidayat",
        alamat : "Baduy",
        Umur : 35,
    },
    {
        Nama : " Faisal Muhammad Fahlevi",
        Alamat : "Majalaya",
        Umur : 37,
    },
    {
        Nama : " Naufal Zian A.",
        Alamat : "Kosambi",
        Umur : 29,
    },
];
console.log(
    "hallo, nama saya" + 
    siswaBLK[1].Nama +
    ", Alamat di " +
    siswaBLK[1].Alamat +
    ", umur saya" +
    siswaBLK[1].Umur 
);