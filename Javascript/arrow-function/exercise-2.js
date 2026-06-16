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
const userSatu = { username: "hector_dev", avatarUrl: "https://photos.com/winny.jpg" };
const userDua = { username: "anonim_coder", avatarUrl: null }; // Ceritanya belum upload

function getAvatar(profile) {
    return profile.avatarUrl ? profile.avatarUrl : "default-avatar.png";
    // atau return profile.avatarUrl || "default-avatar.png"
}
console.log(getAvatar(userSatu));
console.log(getAvatar(userDua));


const responseAPI = {
    item: "Chatime Matcha Premium",
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
console.log(potongTeks("Chatime Matcha Premium Rasa Baru"));
console.log(potongTeks("Matcha Choco"));

// Hitung harga setelah dikurangi diskon.
// Lalu, harga setelah diskon tersebut ditambah pajak 11% (dikali 1.11).
// Kembalikan hasil akhir angka total bayarnya.
function hitungTotalBayar(hargaAsli, diskon = 0) {
    return (hargaAsli - diskon)*1.11;
}
console.log(hitungTotalBayar(20000, 5000));
console.log(hitungTotalBayar(30000));

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
console.log("Data terbaru :", dataGudangTerbaru);

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

// 1. Ambil 'periode' dari report.
// 2. Hitung untungBersih (omsetKotor dikurangi biayaOperasional).
// 3. Kembalikan OBJEK BARU dengan struktur: { bulan: periode, grafikData: [omsetKotor, untungBersih] }
const reportMentah = {
    id_laporan: "REP-2026",
    periode: "Juni",
    finance: {
        omsetKotor: 15000000,
        biayaOperasional: 5000000
    }
};

function transformReport(report) {
    const rep = report
    const untungBersih = rep.finance.omsetKotor - rep.finance.biayaOperasional
    return {
        bulan: rep.periode, grafikData: [rep.finance.omsetKotor, untungBersih]
    }
}

console.log(transformReport(reportMentah));

// Ambil brand, ramSize, dan model GPU.
// Kembalikan sebuah ARRAY baru dengan format: [brand, ramSize, model]
const dataLaptop = {
    brand: "ASUS ROG",
    specs: {
        memory: { ramSize: "16GB", type: "DDR5" },
        gpu: { model: "RTX 4060", vram: "8GB" }
    }
};

function ringkasSpek(laptop) {
    const data = laptop
    return [data.brand, data.specs.memory.ramSize, data.specs.gpu.model]
}

console.log(ringkasSpek(dataLaptop));

// 1. Jika nilaiCoding DAN disiplin kedua-duanya di atas atau sama dengan 80, maka statusnya "LULUS".
// 2. Jika ada salah satu saja yang di bawah 80, statusnya "GAGAL".
// 3. Kembalikan OBJEK BARU format: { namaKaryawan: ..., status: ... }
const devPerformance = {
    id: "DEV-01",
    nama: "Hector",
    metrics: { nilaiCoding: 85, disiplin: 90 }
};

function evaluasiKaryawan(karyawan) {
    const eval = karyawan.metrics.nilaiCoding >= 80 && karyawan.metrics.disiplin >= 80 ? "LULUS" : "GAGAL"
    return {namaKaryawan: karyawan.nama, status: eval}
}

console.log(evaluasiKaryawan(devPerformance));

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
console.log(potongTeksArrow("Chatime Matcha Premium Rasa Baru"));
console.log(potongTeksArrow("Matcha Choco"));

const hitungTotalBayarArrow = (hargaAsli, diskon = 0) => (hargaAsli - diskon)*1.11;
console.log(hitungTotalBayarArrow(20000, 5000));
console.log(hitungTotalBayarArrow(30000));

const cekSisaStokArrow = ({namaBarang, stokAwal, terkeluar}) => [namaBarang, (stokAwal-terkeluar)]
console.log("Data terbaru :", cekSisaStokArrow(dataGudang));

const formatAlamatArrow = ({namaJalan, wilayah: {kota, provinsi}}) => `${namaJalan}, ${kota}, ${provinsi}`
console.log(formatAlamatArrow(responseLokasi));

const transformReportArrow = ({ periode, finance: { omsetKotor, biayaOperasional } }) =>
    ({bulan: periode, grafikData: [omsetKotor, omsetKotor - biayaOperasional]})

console.log(transformReportArrow(reportMentah));

const ringkasSpekArrow = ({brand, specs: {memory: {ramSize}, gpu: {model}}}) => [brand, ramSize, model]
console.log(ringkasSpekArrow(dataLaptop));