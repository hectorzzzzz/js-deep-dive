// =========================================================================
// MASTER NOTE: ARROW FUNCTION & DATA MANIPULATION
// =========================================================================

/**
 * CATATAN:
 * Gunakan command cd (change directory) kalau kamu masih diluar lingkup folder arrow-function
 * Contoh di terminal:
       F:\users\LNV\Learning\Javascript> cd F:\users\LNV\Learning\Javascript\arrow-function
 * Untuk menjalankan kode, kamu harus masuk lebih dalam dan berada di dalam folder arrow function
   karena folder basics dan lainnya berada di dalam folder tersebut
 * Untuk menjalankan kode pakai command node [nama file]
 * Contoh di terminal:
       F:\users\LNV\Learning\Javascript> node basics.js
**/

/**
 * 1. FUNGSI / KEGUNAAN ARROW FUNCTION
 * -----------------------------------------
 * - Menyederhanakan penulisan fungsi menjadi jauh lebih ringkas.
 * - Sangat sering digunakan sebagai "Fungsi Titipan" (Callback) saat mengolah data 
 *   banyak (Array Methods) seperti .map() dan .filter() di React/Next.js.
 * 
 * 2. KENAPA PAKAI ARROW FUNCTION & CONST?
 * -----------------------------------------
 * - const: Mengunci fungsi agar tidak bisa ditimpa atau dirusak oleh kode lain di bawahnya.
 * - Implicit Return: Jika kodenya cuma 1 baris, kita GAK PERLU ketik kurung kurawal {} 
 *   dan kata 'return'. Hasilnya otomatis dikembalikan oleh JavaScript.
**/

// 3. PERBEDAAN SINTAKSIS: CARA LAMA VS CARA BARU
//-----------------------------------------

// Cara Lama (Function): Wajib ketik 'function', {}, dan 'return' walau cuma sebaris.
function sapaLama(nama) {
    return "Halo " + nama;
}
console.log(sapaLama("nama kamu"))

// Cara Baru (Arrow): Langsung pakai const, nama fungsi, dan panah (=>).
const sapaBaru = (nama) => "Halo " + nama;
console.log(sapaBaru("nama baru"))

// =========================================================================
// PARTE 1: BEDAH ANATOMI & VARIASI PARAMETER (VARIABEL VS KEY OBJECT)
// =========================================================================

/**
 * MODEL A: VARIABEL BIASA
 * Digunakan jika data yang dimasukkan adalah nilai tunggal (Bukan Object {}).
 */
// Contoh:
const hargaMakanan = 15000
const hitungPajak = (harga) => harga * 0.1;
// [1]     [2]        [3]   [4]   [5]
console.log(hitungPajak(hargaMakanan));

// Keterangan:
// [1] const       : Mengunci fungsi agar aman.
// [2] hitungPajak : Nama fungsi (menggunakan camelCase).
// [3] (harga)     : Parameter/Variabel Masukan biasa.
// [4] =>          : Simbol Arrow Function ("Lakukan operasi berikut").
// [5] harga * 0.1 : Hasil akhir yang langsung dikembalikan (Implicit Return).

// Contoh lebih dari 1 Parameter biasa (Wajib pakai kurung biasa):
const namaBarang = "Baju Cocomelon";
const jumlahStok = 10;
const buatLabelProduk = (nama, stok) => "Produk: " + nama + " | Stok: " + stok;
console.log(buatLabelProduk(namaBarang, jumlahStok))

// Catatan: 
// 1. VARIABEL : Wadah/tempat untuk menampung data asli (dibuat pakai const/let).
// 2. PARAMETER: Nama variabel yang bertindak sebagai "Slot Kosong" (const ... = (param1, param2, ...)) di dalam kurung fungsi.
//               Jumlah parameter tergantung seberapa banyak slot yang kita buat (misal: 1 atau 2 slot).
// 3. ARGUMEN  : Variabel asli atau data mentah yang kita masukkan ke dalam fungsi saat dipanggil.
//
// CONTOH NYATA ALUR DATA:
// const namaBarang = "Baju Cocomelon"; // <-- Ini VARIABEL (Data Asli)
// (nama, stok)                         // <-- Ini PARAMETER (Slot kosong yang menerima data tersebut)
// (namaBarang, jumlahStok);            // <-- Ini ARGUMEN (Mengirim data asli ke fungsi)

/**
 * MODEL B: VARIABEL DARI KEY OBJECT (Destructuring Parameter)
 * Digunakan jika inputnya OBJEK, tapi kita cuma mau ambil KUNCI (KEY) tertentu saja.
 * Wajib pakai kurung kurawal di dalam kurung biasa: ({ key })
 */

// Contoh:
const produkCelana = {
    nama: "Celana Jeans",
    stok: 0
}
const cekStokSaja = ({ stok }) => stok === 0; 
console.log(cekStokSaja(produkCelana))
// Cara bacanya: "Masuk ke objek, ambil isi dari key 'stok' saja, lalu cek apakah nilainya 0."


// =========================================================================
// PARTE 2: BEDAH LOGIKA OUTPUT (PELAJARAN MAHAL DARI EKSPERIMENMU)
// =========================================================================

// =========================================================================
// DATA CONTOH UNTUK BEDAH KASUS
// =========================================================================
const barang = { nama: "Aki-akian", stok: 0 };
// Untuk console.log semua contoh kasus dijadikan satu di paling bawah

/**
 * KASUS 1: CARA YANG SALAH (Menggunakan Koma ',' di dalam Kurung Biasa)
 * ---------------------------------------------------------------------
 * JANGAN DIGUNAKAN UNTUK VALIDASI BANYAK KONDISI!
 * - JavaScript punya sifat "Comma Operator": Dia menghitung baris atas, 
 *   TAPI hasilnya dibuang. Hanya baris paling terakhir yang dijadikan output.
 * - Efek Samping: Jika nama barang diganti "Sandal Jepit", fungsi ini TETAP menghasilkan TRUE 
 *   karena dia cuma melihat 'stok === 0'. Ini lubang bug yang fatal!
 */

// Contoh:
const cekCaraSalah = ({ nama, stok }) => (
    nama === "Aki-akian",    // <-- Dihitung tapi hasil cek namanya dibuang!
    stok === 0               // <-- Cuma baris ini yang menentukan hasil akhir (Output: Boolean)
);

/**
 * KASUS 2: CARA BENAR - OUTPUT 1 KESIMPULAN (Boolean True/False)
 * ---------------------------------------------------------------------
 * - KESIMPULAN: Jika cuma butuh 1 output akhir (True/False), KITA TIDAK BUTUH kurung kurawal {}.
 * - Gunakan operator logika (&& atau ||) sebagai "Gatekeeper" (Penjaga Gawang).
 * - Berperan seperti GERBANG AND dan OR di elektronika
 * - Penggunaan AND (&&) bernilai True jika semua syarat bernilai benar, jika ada 1 saja yang salah,
 *   akan bernilai false
 * - Penggunaan OR (||) bernilai True jika semua ATAU salah satu syarat bernilai benar. False
 *   muncul hanya juka semua syarat bernilai salah
 */

// Contoh:
const cekCaraBenarPakaiAND = ({ nama, stok }) => nama === "Aki-akian" && stok === 0;
const cekCaraBenarPakaiOR = ({nama, stok}) => nama === "Aki-akua" || stok === 0;


/**
 * KASUS 3: CARA BENAR - OUTPUT LAPORAN DETAIL (Bentuk Objek Baru)
 * ---------------------------------------------------------------------
 * - KESIMPULAN: Jika butuh teks pesan yang jelas (String) untuk masing-masing key, 
 *   KITA WAJIB menggunakan kurung kurawal di dalam kurung biasa '({ })' untuk merakit OBJEK BARU.
 * - Ini memisahkan data laporan dari data asli agar data produk tidak rusak/tertimpa (Immutability).
 * - Gaya ini yang paling sering dipakai di React untuk menampilkan pesan error di bawah input HTML.
 */
const cekLaporanDetail = ({ nama, stok }) => ({
    statusNama: nama === "Aki-akian" ? "namanya benar" : "nama salah!",  // Output: String
    statusStok: stok === 0 ? "stok memang 0" : "stok tidak 0",           // Output: String
    isNamaValid: nama === "Aki-akian"                                    // Output: Boolean terpisah
});

/**
 * KASUS 4: CARA BENAR - OUTPUT LANGSUNG ARRAY BARU (Tanpa kata 'return')
 * ---------------------------------------------------------------------
 * - Jika hasil akhir fungsi yang kamu mau adalah sebuah ARRAY [],
 *   kamu BISA langsung menulis kurung siku setelah tanda panah => tanpa perlu kurung biasa ().
 * - Ini sangat berguna di React ketika kamu mau mengubah sebuah data objek 
 *   menjadi kumpulan list array (misalnya untuk dikonsumsi komponen Dropdown/Select).
 */

// Contoh:
const ubahKeArray = ({ nama, stok }) => [nama, stok]; // <-- Langsung pakai []
// Kita mau mengubah data objek barang menjadi array berisi [nama, stok]


// =========================================================================
// TEMPAT TES JALANIN KODE
// =========================================================================
console.log("--- JALANKAN DATA ASLI ---");
console.log("1. Gatekeeper AND :", cekCaraBenarPakaiAND(barang)); // Hasil: true
console.log("2. Gatekeeper OR :", cekCaraBenarPakaiOR(barang)); // Hasil: true
console.log("3. Laporan Object :", cekLaporanDetail(barang));  // Hasil: Object Laporan Lengkap

console.log("\n--- JALANKAN DATA PALSU (Uji Coba Bug) ---");
const barangPalsu = { nama: "Sandal Jepit", stok: 0 };
console.log("4. Cara Salah (Kecolongan) :", cekCaraSalah(barangPalsu));    // Hasil: true (Padahal namanya salah!)
console.log("5. Cara AND (Anti-kecolongan) :", cekCaraBenarPakaiAND(barangPalsu));  // Hasil: false (Aman, disaring)

console.log("\n--- UBAH DATA OBJECT KE ARRAY ---");
console.log("6. Hasil ubah data:", ubahKeArray(barang)); // Hasil: ['aki-akian', 0]