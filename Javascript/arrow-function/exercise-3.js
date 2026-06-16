// =========================================================================
// 1. Membuat function biasa (Sulit)
// =========================================================================
console.log ("===Jawaban Function===")

// Fungsi ini harus mengembalikan sebuah FUNGSI BARU.
// Fungsi baru tersebut menerima parameter (userRole) 
// dan mengembalikan true/false (apakah userRole === allowedRole?)
function createRoleChecker(allowedRole) { 
    return (userRole) => userRole === allowedRole
    // kita return/outputnya berupa param + isi fungsi yang nanti dipakai
    // oleh fungsi baru, bisa dikatakan kita attach ke variabel yang jadi fungsi baru
}

// Cara pakai/bikin printernya:
const isAdmin = createRoleChecker("admin");
// flow:
// const isAdmin = (userRole) => userRole === "admin"

console.log(isAdmin("admin"));   // Ekspektasi: true
// flow: isAdmin jadi arrow function terima param userRole
console.log(isAdmin("customer"));  // Ekspektasi: false
// flow: sama seperti atas

// Anggap saja ini fungsi tiruan API eksternal (jangan diubah)
// Ambil properti 'name' dan 'price' dari dalam 'response.data'
// Kembalikan teks: "Menu: name, Harga: price"
const fakeFetchMenu = () => Promise.resolve({ status: 200, data: { name: "Matcha Latte", price: 25000 } });

async function getMenuData() {
    try {
        const response = await fakeFetchMenu();
        // Tulis kodemu di sini:
        const res = response.data
        return `Menu : ${res.name}, Harga : ${res.price}`
    } catch (error) {
        return "Gagal mengambil data";
    }
}

// Cara eksekusi (karena async, harus pakai .then atau di dalam async lain)
getMenuData().then(res => console.log(res)); // Ekspektasi: "Menu: Matcha Latte, Harga: 25000"

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
// Ekspektasi: { bulan: 'Juni', grafikData: [ 15000000, 10000000 ] }

// 1. Jalankan fungsi 'rumusDiskon' dengan memasukkan 'hargaTotal' ke dalamnya untuk dapat nilai potongan.
// 2. Kembalikan hasil akhir: hargaTotal dikurangi nilai potongan tersebut.
function diskonPersen(harga) { return harga * 0.10; } // Potong 10%
function diskonNominal(harga) { return 5000; }         // Potong 5000

function hitungKasir(hargaTotal, rumusDiskon) {
    return hargaTotal - rumusDiskon (hargaTotal) 
}

console.log(hitungKasir(100000, diskonPersen));  // Ekspektasi: 100000 - 10000 = 90000
console.log(hitungKasir(20000, diskonNominal));

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
// Ekspektasi: [ 'ASUS ROG', '16GB', 'RTX 4060' ]

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
// Ekspektasi: { namaKaryawan: 'Hector', status: 'LULUS' }

// 1. Ini Fungsi Callback A
function viaWhatsApp(nama, pesan) {
    return `[WA - +62] Halo ${nama}, ${pesan}`;
}

// 2. Ini Fungsi Callback B
function viaEmail(nama, pesan) {
    return `[EMAIL - info@chatime.com] Dear ${nama}, ${pesan}`;
}

// 1. Jalankan fungsi 'mediaPengirim'
// 2. Ingat "POSISI KURSI PARAMETER"! Fungsi viaWhatsApp/viaEmail di atas meminta 2 parameter: (nama, pesan).
// 3. Masukkan 'namaUser' ke kursi 1, dan 'teksPesan' ke kursi 2 milik 'mediaPengirim'.
// 4. Langsung kembalikan (return) hasilnya!

// Ini HIGH-ORDER FUNCTION
function kirimNotifikasi(namaUser, teksPesan, mediaPengirim) {
    return mediaPengirim (namaUser, teksPesan)
}

// EXECUTION MATCHING (Uji coba di terminal)
console.log(kirimNotifikasi("Hector", "Pesanan Matcha Latte kamu sedang dibuat!", viaWhatsApp));
// Ekspektasi: [WA - +62] Halo Hector, Pesanan Matcha Latte kamu sedang dibuat!

console.log(kirimNotifikasi("Grenn", "Voucher diskon 20% khusus untukmu.", viaEmail));
// Ekspektasi: [EMAIL - info@chatime.com] Dear Grenn, Voucher diskon 20% khusus untukmu.


// =========================================================================
// 2. Membuat Arrow Function dari soal sebelumnya
// =========================================================================
console.log ("\n===Jawaban Arrow Function===");

const createRoleCheckerArrow = allowedRole => userRole => userRole === allowedRole
const isAdminArrow = createRoleCheckerArrow("admin");
console.log(isAdminArrow("admin"));
console.log(isAdminArrow("customer"));

const getMenuDataArrow = async () => {
    try {
        const response = await fakeFetchMenu();
        const res = response.data
        return `Menu : ${res.name}, Harga : ${res.price}`
    } catch (error) {
        return "Gagal mengambil data";
    }
}

getMenuDataArrow().then(res => console.log(res));

const transformReportArrow = ({ periode, finance: { omsetKotor, biayaOperasional } }) =>
    ({bulan: periode, grafikData: [omsetKotor, omsetKotor - biayaOperasional]})

console.log(transformReportArrow(reportMentah));

const hitungKasirArrow = (hargaTotal, rumusDiskon) => hargaTotal - rumusDiskon (hargaTotal)
console.log(hitungKasirArrow(100000, diskonPersen));
console.log(hitungKasirArrow(20000, diskonNominal));

const ringkasSpekArrow = ({brand, specs: {memory: {ramSize}, gpu: {model}}}) => [brand, ramSize, model]
console.log(ringkasSpekArrow(dataLaptop));

const evaluasiKaryawanArrow = ({nama, metrics: {nilaiCoding, disiplin}}) => ({
    namaKaryawan: nama,
    status: nilaiCoding >= 80 && disiplin >= 80 ? "LULUS" : "GAGAL"
});

console.log(evaluasiKaryawanArrow(devPerformance));

const kirimNotifikasiArrow = (namaUser, teksPesan, mediaPengirim) => mediaPengirim (namaUser, teksPesan)
console.log(kirimNotifikasiArrow("Hector", "Pesanan Matcha Latte kamu sedang dibuat!", viaWhatsApp));
console.log(kirimNotifikasiArrow("Grenn", "Voucher diskon 20% khusus untukmu.", viaEmail));
