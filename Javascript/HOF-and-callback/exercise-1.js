// =========================================================================
// 1. Membuat fungsi HOF dan callback
// =========================================================================
console.log ("===Jawaban Fungsi===")

// Fungsi ini harus mengembalikan sebuah FUNGSI BARU.
// Fungsi baru tersebut menerima parameter (userRole) 
// dan mengembalikan true/false (apakah userRole === allowedRole?)
const createRoleChecker = allowedRole => userRole => userRole === allowedRole

// Cara pakai/bikin printernya:
const isAdmin = createRoleChecker("admin");
// flow:
// const isAdmin = (userRole) => userRole === "admin"

console.log(isAdmin("admin"));
console.log(isAdmin("customer"));

// 1. Jalankan fungsi 'rumusDiskon' dengan memasukkan 'hargaTotal' ke dalamnya untuk dapat nilai potongan.
// 2. Kembalikan hasil akhir: hargaTotal dikurangi nilai potongan tersebut.
function diskonPersen(harga) { return harga * 0.10; } // Potong 10%
function diskonNominal(harga) { return 5000; }         // Potong 5000

const hitungKasir = (hargaTotal, rumusDiskon) => hargaTotal - rumusDiskon (hargaTotal)

console.log(hitungKasir(100000, diskonPersen));
console.log(hitungKasir(20000, diskonNominal));

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
const kirimNotifikasi = (namaUser, teksPesan, mediaPengirim) => mediaPengirim (namaUser, teksPesan)

console.log(kirimNotifikasi("Hector", "Pesanan Matcha Latte kamu sedang dibuat!", viaWhatsApp));
// Ekspektasi: [WA - +62] Halo Hector, Pesanan Matcha Latte kamu sedang dibuat!

console.log(kirimNotifikasi("Grenn", "Voucher diskon 20% khusus untukmu.", viaEmail));
// Ekspektasi: [EMAIL - info@chatime.com] Dear Grenn, Voucher diskon 20% khusus untukmu.