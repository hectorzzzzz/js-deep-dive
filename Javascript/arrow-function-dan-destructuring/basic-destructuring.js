// =========================================================================
// MASTER NOTE: DESTRUCTURING OBJECT PADA PARAMETER FUNGSI
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

// -------------------------------------------------------------------------
// KONSEP: Kenapa Harus Destructuring?
// Mengambil properti objek langsung di "pintu masuk" (parameter) fungsi,
// tanpa perlu membongkarnya satu per satu di dalam tubuh fungsi.
// -------------------------------------------------------------------------

const dataMusuh = { namaBos: "Dragon Lord", darah: 5000 };

// Cara Lama (Tanpa Destructuring):
const cekStatusLama = (musuh) => {
    const namaBos = musuh.namaBos;
    const darah = musuh.darah;
    return `Bos ${namaBos} memiliki HP sebesar ${darah}`;
};

//  Cara Modern (Dengan Destructuring):
const cekStatusModern = ({ namaBos, darah }) => `Bos ${namaBos} memiliki HP sebesar ${darah}`;

console.log("\n--- Perbandingan Sintaks ---");
console.log("Lama   :", cekStatusLama(dataMusuh));
console.log("Modern :", cekStatusModern(dataMusuh));


// =========================================================================
// 4 LEVEL TINGKATAN DESTRUCTURING (NEW VARIATION)
// =========================================================================

// --- LEVEL 1: Single Layer (Dasar) ---
// Skenario: Data pesanan meja di Cafe Eclaire. 
// Membongkar properti objek satu tingkat berdasarkan kecocokan nama kuncinya.
const pesananMeja = { nomorMeja: 5, menuUtama: "Croissant" };

const infoCafe = ({ nomorMeja, menuUtama }) => `Meja ${nomorMeja} memesan ${menuUtama}`;

console.log("\n--- Level 1: Dasar ---");
console.log(infoCafe(pesananMeja));


// --- LEVEL 2: Deep Nested Object (Menengah) ---
// Skenario: Status inventori senjata karakter Game RPG.
// Menggali masuk ke objek bersarang menggunakan tanda titik dua (:).
const dataKarakter = {
    username: "X-Chaser",
    equipment: {
        weapon: { namaPedang: "Excalibur", attack: 150 }
    }
};

// Alur galian: equipment -> masuk ke weapon -> ambil namaPedang
const cekSenjata = ({ username, equipment: { weapon: { namaPedang } } }) => 
    `Player ${username} sedang memegang ${namaPedang}`;

console.log("\n--- Level 2: Menengah (Deep Nested) ---");
console.log(cekSenjata(dataKarakter));


// --- LEVEL 3: Properti Rename / Aliasing (Hard) ---
// Skenario: Data cuaca mentah dari API luar negeri untuk widget UI website.
// Membongkar data, lalu mengubah nama variabelnya ke bahasa Indonesia agar sesuai standar UI.
const rawWeatherAPI = {
    city_name: "Jakarta",
    forecast: { temperatureCelsius: 32 }
};

// Mengubah nama variabel 'city_name' menjadi 'kota' saat digunakan di dalam fungsi
const transformWidgetCuaca = ({ city_name: kota, forecast: { temperatureCelsius: suhu } }) => ({
    lokasi: kota,
    kondisiSuhu: `${suhu}°C`
});

console.log("\n--- Level 3: Hard (Rename/Aliasing) ---");
console.log(transformWidgetCuaca(rawWeatherAPI));


// --- LEVEL 4: Destructuring + Kombinasi Logika (Master) ---
// Skenario: Validasi kelayakan item untuk ditukarkan (Trade System) di dalam game.
// Syarat item bisa ditukar: level minimal 50 DAN statusnya harus item langka (isRare true).
const itemPlayer = {
    namaItem: "Shadow Cloak",
    requirements: { minLevel: 55, isRare: true }
};

const verifikasiTradeArrow = ({ namaItem, requirements: { minLevel, isRare } }) => ({
    namaBarang: namaItem,
    statusTrade: minLevel >= 50 && isRare === true ? "BISA_DITUKAR" : "TERKUNCI"
});

console.log("\n--- Level 4: Master (Kombinasi Logika) ---");
console.log(verifikasiTradeArrow(itemPlayer));


// =========================================================================
// 3 ATURAN EMAS YANG WAJIB DIINGAT!
// =========================================================================
// 1. Positional Matching: Urutan nama parameter tidak berpengaruh, komputer mencari berdasarkan KEY objek.
// 2. Wajib Kurung Biasa ({...}) jika me-return objek baru secara implisit (sebaris) agar tidak dianggap scope fungsi.
// 3. Hati-hati Jalur Putus! Jika mencoba mendestructure properti dari objek undefined (jalur salah), kode akan eror.
