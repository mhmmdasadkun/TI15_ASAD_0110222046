let jam_masuk = 7
let jam_keluar = 11

let lama_jam = jam_keluar - jam_masuk

let biaya_parkir = 0
if(lama_jam <= 2) {
    biaya_parkir = 3000
} else if(lama_jam > 2) {
    let biaya_tambahan = (lama_jam - 2) * 1000
    biaya_parkir = 3000 + biaya_tambahan
}

console.log("Jam Masuk : " + jam_masuk);
console.log("Jam Keluar : " + jam_keluar);
console.log("Lama Parkir : " + lama_jam + " Jam");

console.log("Harga parkir yang harus dibayar adalah : " + "Rp. " + biaya_parkir);