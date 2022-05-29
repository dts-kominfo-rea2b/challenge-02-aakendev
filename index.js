// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
  for (i = 0; i < arrayObjectPegawai.length; i++) {
    let namaDepanBelakang =
      arrayObjectPegawai[i].namaDepan +
      " " +
      arrayObjectPegawai[i].namaBelakang;
    hasilLooping.push(namaDepanBelakang);
  }
  // DEBUG Data hasilLooping
  console.log(typeof hasilLooping); // Hasil Looping harus berupa Array
  console.log(hasilLooping.length); // Hasil Looping Harus 100
  console.log(hasilLooping[0]); // Hasil Looping Data Pertama Harus "Edyth Roberts"
  console.log(hasilLooping[99]); // Hasil Looping Data Terakhir Harus "Lavern Braun"

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0;
  for (i = 0; i < arrayObjectPegawai.length; i++) {
    if (arrayObjectPegawai[i].jenisKelamin == "M") {
      jumlahPria += 1;
    }
  }
  // DEBUG Data jumlahPria
  console.log(typeof jumlahPria); // Jumlah Pria harus berupa Number
  console.log(jumlahPria); // Hasil Jumlah Pria harus 48

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0;
  for (i = 0; i < arrayObjectPegawai.length; i++) {
    if (arrayObjectPegawai[i].jenisKelamin == "F") {
      jumlahWanita += 1;
    }
  }
  // DEBUG Data jumlahPria
  console.log(typeof jumlahWanita); // Jumlah Wanita harus berupa Number
  console.log(jumlahWanita); // Hasil Jumlah Wanita harus 52

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";
  if (jumlahPria > jumlahWanita) {
    komentar = "Jumlah Pria lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria) {
    komentar = "Jumlah Wanita lebih banyak dari Pria";
  } else if (jumlahPria == jumlahWanita) {
    komentar = "Jumlah Pria dan Wanita berimbang";
  }
  // DEBUG Data Komentar
  console.log(typeof komentar); // Komentar harus berupa String
  console.log(komentar.toLowerCase()); // Hasil komentar harus "jumlah wanita lebih banyak dari pria"

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
