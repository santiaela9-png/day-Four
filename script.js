// const barang = {
// kode: "INV-001",
// nama: "Leptop",
// stok: 15,
// harga: 7500000,
// };
// console.log(barang.nama); // output leptop
// console.log(barang.stok); // output 15
// console.log("Nama =", barang.nama); // output leptop
// console.log("Stok =", barang.stok); // output 15

// const stok = 0;
// console.log(stok === 0);
// console.log(stok > 0);

// const stok = 0;
// const status = "habiss";
// if (stok === 0 && status !== "habis") {
// console.log("periksa keterangan barang");
// } else {
// console.log("stok barang tersedia");
// }

// const stok = 3;
// if (stok === 0) {
// console.log("habis");
// } else if (stok < 5) {
//  console.log("stok menipis");
// } else {
// console.log("stok aman");
// }

// const statusTugas = "selesai";
// switch (statusTugas) {
// case "belum":
// console.log("tugas belum dikerjakan");
// break;
// case "Proses":
// console.log("tugas belum dikerjakan");
// break;
// case "selesai":
// console.log("tugas belum dikerjakan");
// break;
// default:
// break;
// }

// for (let i = 1; i <= 5; i++) {
// console.log("perulangan ke-", i);
// }

// for (let i = 1; i <= 10; i++) {
// if (i % 2 == 0) {
// console.log(i, "adalah angka genap");
// } else {
// console.log(i, "adalah angka ganjil");
// }
// }

// const daftarBarang = ["leptop", "mouse", "kayboard", "monitor"];
// for (let i = 0; i < daftarBarang.length; i++) {
// console.log(daftarBarang[i]);
// }

// function sapa() {
// console.log("selamat belajarv javaScript");
// }

// sapa();
// sapa();

function tentukanStatusStok(stok) {
  if (stok === 0) {
    return "Habis";
  } else if (stok < 5) {
    return "Menipis";
  } else {
    return "Aman";
  }
}

console.log(tentukanStatusStok(0));
console.log(tentukanStatusStok(3));
console.log(tentukanStatusStok(15));

const hitungLuas = function (panjang, lebar) {
  return panjang * lebar;
};
console.log(hitungLuas(5, 3));
