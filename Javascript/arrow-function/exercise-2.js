// =========================================================================
// 1. Membuat function biasa (Sedang/Moderate)
// =========================================================================
console.log ("===Jawaban Function===")

// Jika status === "success" kembalikan "bg-green"
// Jika status === "pending" kembalikan "bg-yellow"
// Selain itu (failed), kembalikan "bg-red"
// (Tips: Coba gunakan Ternary Operator `? :` bertingkat di dalam return)
function getBadgeColor(status) {
    return status === "success" ? "bg-green": status === "pending" ? "bg-yellow" : "bg-red"
}

console.log(getBadgeColor("pending"));
console.log(getBadgeColor("failed"));

// Jika jumlah >= 1000, kembalikan (jumlah / 1000) ditambah string "K"
// Jika tidak, kembalikan jumlahnya saja dalam bentuk string
function formatSubscriber(jumlah) {
    return jumlah >= 1000 ? `${jumlah/1000}K` : `${jumlah}`
}
console.log(formatSubscriber(7500));
console.log(formatSubscriber(450));  

// Ambil avatarUrl dan username dari parameter profile.
// Jika avatarUrl bernilai null/falsy, kembalikan string "default-avatar.png"
// Jika ada, kembalikan avatarUrl aslinya.
const userSatu = { username: "winny_dev", avatarUrl: "https://photos.com/winny.jpg" };
const userDua = { username: "anonim_coder", avatarUrl: null }; // Ceritanya belum upload

function getAvatar(profile) {
    return profile.avatarUrl ? profile.avatarUrl : "default-avatar.png";
    // atau return profile.avatarUrl || "default-avatar.png"
}
console.log(getAvatar(userSatu));
console.log(getAvatar(userDua));


const responseAPI = {
    item: "Eclaire Matcha Premium",
    detail: {
        hargaBaru: 28000,
        diskonPersen: 10
    }
};

// Ambil 'item' dan ambil 'hargaBaru' beserta 'diskonPersen' yang ada di DALAM objek 'detail'.
// Kembalikan OBJEK BARU dengan struktur: { namaProduk: item, nettPrice: hargaBaru, potongan: diskonPersen }
function ringkasData(data) {
    return {
        namaProduk: data.item,
        nettPrice: data.detail.hargaBaru,
        potongan: data.detail.diskonPersen
    }
}
console.log(ringkasData(responseAPI));

// Jika panjang teks > 15 karakter, kembalikan 15 karakter pertama ditambah "..."
// Jika tidak (15 karakter atau kurang), kembalikan teks aslinya tanpa diubah.
// (Tips: Gunakan method bawaan JS `teks.slice(0, 15)` untuk memotong teks)
function potongTeks(teks) {
    return teks.length > 15 ? `${teks.slice(0, 15)}...` : teks
}
console.log(potongTeks("Eclaire Matcha Premium Rasa Baru"));
console.log(potongTeks("Matcha Choco"));

// Hitung harga setelah dikurangi diskon.
// Lalu, harga setelah diskon tersebut ditambah pajak 11% (dikali 1.11).
// Kembalikan hasil akhir angka total bayarnya.
function hitungTotalBayar(hargaAsli, diskon = 0) {
    return (hargaAsli - diskon)*1.11;
}
console.log(hitungTotalBayar(20000, 5000)); // Ekspektasi: (20000 - 5000) * 1.11 = 16650
console.log(hitungTotalBayar(30000)); // Ekspektasi: diskon otomatis 0 -> 30000 * 1.11 = 33300

// Hitung sisa stok (stokAwal dikurangi terkeluar).
// Kembalikan sebuah ARRAY BARU berisi: [namaBarang, sisaStok]
const dataGudang = { kodeBarang: "Aki-01", namaBarang: "Motobatt MTZ5S", stokAwal: 50, terkeluar: 10 };

function cekSisaStok(gudang) {
    const sisaStok = gudang.stokAwal - gudang.terkeluar
    return [
        gudang.namaBarang, sisaStok
    ]
}
const dataGudangTerbaru = cekSisaStok(dataGudang)
console.log("Data terbaru :", dataGudangTerbaru); // Ekspektasi: [ 'Motobatt MTZ5S', 40 ]

// Ambil namaJalan, kota, dan provinsi dari objek lokasi.
// Kembalikan satu baris teks string (Gunakan backtick): "namaJalan, kota, provinsi"
const responseLokasi = {
    id: 12,
    namaJalan: "Jl. Kebon Jeruk No. 45",
    wilayah: {
        kota: "Jakarta Barat",
        provinsi: "DKI Jakarta"
    }
};

function formatAlamat(lokasi) {
    return `${lokasi.namaJalan}, ${lokasi.wilayah.kota}, ${lokasi.wilayah.provinsi}`
}
console.log(formatAlamat(responseLokasi)); 
// Ekspektasi: "Jl. Kebon Jeruk No. 45, Jakarta Barat, DKI Jakarta"

// =========================================================================
// 2. Membuat Arrow Function dari soal sebelumnya
// =========================================================================
console.log ("\n===Jawaban Arrow Function===");

const getBadgeColorArrow = (status) =>
    status === "success" ? "bg-green": status === "pending" ? "bg-yellow" : "bg-red"
console.log(getBadgeColorArrow("pending"));
console.log(getBadgeColorArrow("failed"));

const formatSubscriberArrow = (jumlah) => jumlah >= 1000 ? `${jumlah/1000}K` : `${jumlah}`
console.log(formatSubscriberArrow(7500));
console.log(formatSubscriberArrow(450));

const getAvatarArrow = ({avatarUrl}) => avatarUrl || "default-avatar.png"
console.log(getAvatarArrow(userSatu));
console.log(getAvatarArrow(userDua));

const ringkasDataArrow = ({item, detail: {hargaBaru, diskonPersen}}) => ({
    namaProduk: item,
    nettPrice: hargaBaru,
    potongan: diskonPersen
})

console.log(ringkasDataArrow(responseAPI));

const potongTeksArrow = (teks) => teks.length > 15 ? `${teks.slice(0, 15)}...` : teks
console.log(potongTeksArrow("Eclaire Matcha Premium Rasa Baru"));
console.log(potongTeksArrow("Matcha Choco"));

const hitungTotalBayarArrow = (hargaAsli, diskon = 0) => (hargaAsli - diskon)*1.11;
console.log(hitungTotalBayarArrow(20000, 5000));
console.log(hitungTotalBayarArrow(30000));

const cekSisaStokArrow = ({namaBarang, stokAwal, terkeluar}) => [namaBarang, (stokAwal-terkeluar)]
console.log("Data terbaru :", cekSisaStokArrow(dataGudang));

const formatAlamatArrow = ({namaJalan, wilayah: {kota, provinsi}}) => `${namaJalan}, ${kota}, ${provinsi}`
console.log(formatAlamatArrow(responseLokasi));