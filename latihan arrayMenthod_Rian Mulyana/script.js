console.log("No.1. Membuat array");
const mahasiswa = [
  "Andrew",
  "Bob",
  "clark",
  "David",
  "Ethan",
  "Fernando",
  "gabriel",
];
console.log(mahasiswa);
console.log("");
console.log("No.2. Menambahkan nama pada array");
mahasiswa.push("Harold", "Iglesies", "Jackson");
console.log(mahasiswa);

console.log(" ");
console.log("No.3. Menampilkan nama Bob David dan Fernando");
const mhs1 = mahasiswa.slice(1, 2);
const mhs2 = mahasiswa.slice(3, 4);
const mhs3 = mahasiswa.slice(5, 6);
console.log(mhs1 + ", " + mhs2 + ", " + mhs3);

console.log("");
console.log("No.4. Menghapus Jackson");
mahasiswa.pop();
console.log(mahasiswa);

console.log("");
console.log("No.5. Menghapus Andrew");
mahasiswa.shift();
console.log(mahasiswa);

console.log("");
console.log("No.6. meambahkan andy sebelum Bob");
mahasiswa.unshift("Andy");
console.log(mahasiswa);

console.log("");
console.log("No.7. Ubah nama Fernando menjadi Francesco");
mahasiswa.splice(5, 1, "Francesco");
console.log(mahasiswa);