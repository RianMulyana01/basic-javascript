const barang = [];

let lanjut = true;

while (lanjut) {
  const kode_barang = prompt("Masukkan kode barang: ");
  const nama_produk = prompt("Masukkan nama produk: ");
  const harga = prompt("Masukkan harga: ");
  const stock = prompt("Masukkan stock: ");

  const barangBaru = {
    kode_barang,
    nama_produk,
    harga,
    stock,
  };

  barang.push(barangBaru);

  console.log(
    "======================================================================"
  );
  console.log("Kode Barang\t\t\t\tNama Produk\t\t\t\tHarga\t\t\tStock");
  console.log(
    "======================================================================"
  );
  barang.forEach((item) => {
    console.log(
      item.kode_barang +
        "\t\t\t\t\t" +
        item.nama_produk +
        "\t\t\t\t\t\t" +
        item.harga +
        "\t\t\t" +
        item.stock
    );
  });
  console.log(
    "======================================================================"
  );

  const jawab = prompt("Apakah Anda ingin menambahkan barang lagi? (Y/T) ");
  if (jawab.toLowerCase() !== "y") {
    lanjut = false;
  }
}