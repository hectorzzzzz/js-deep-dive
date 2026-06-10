// =========================================================================
// 1. Membuat function biasa (Mudah)
// =========================================================================
console.log ("===Jawaban Function===")

// Kembalikan string "Rp " ditambah angka yang di-format
function formatRupiah (angka) {
    return "Rp" + (angka)
}

console.log(formatRupiah(25000));

// Cek apakah panjang password >= 8 (Output: true/false)
function isPasswordValid(password) {
    return password.length >= 8
}

console.log(isPasswordValid("eclaire123"));

// Gabungkan kedua string kelas dengan spasi di tengahnya
function gabungClass (classDasar, classTambahan) {
    return classDasar + " " + classTambahan
}

console.log(gabungClass("rounded-lg", "bg-matcha"));

// Hitung rumus persentase (terisi dibagi total, lalu dikali 100)
function hitungProgress(terisi, total) {
    return (terisi/total)*100
}

console.log(hitungProgress(2, 10));

// Ambil properti firstName dari objek 'user'
// Ambil properti role dari objek 'roleUser'
// Kembalikan teks: "Selamat Datang, " namanya, "kamu adalah seorang, " role usernya
const responseUser = { id: 99, firstName: "Hector", role: "Developer" };

function getGreeting(dataUser) {
    return "Selamat Datang, " + dataUser.firstName + "! " + "Kamu adalah seorang " + dataUser.role
}

console.log(getGreeting(responseUser));

// Cek apakah plan === "premium" DAN status === "active"
const settingUser = { plan: "premium", status: "active" };

function canAccessFeature(setting) {
    return setting.plan === "premium" && setting.status === "active"
}
console.log(canAccessFeature(settingUser));

// Kembalikan sebuah OBJEK BARU {}
// yang isinya: { inputTarget: err.field, pesanPeringatan: err.message }
const apiError = { field: "email", message: "Email sudah terdaftar" };

function createFormError(err) {
    return {
        inputTarget: err.field,
        pesanPeringatan: err.message
    }
    // Tulis kodemu di sini: kembalikan sebuah OBJEK BARU {} 
    // yang isinya: { inputTarget: err.field, pesanPeringatan: err.message }
}
console.log(createFormError(apiError));

// Kembalikan sebuah ARRAY BARU [] yang isinya [koordinat.x, koordinat.y]
const titikKoordinat = { x: 120, y: 450, label: "Titik A" };

function getChartData(koordinat) {
    return `${koordinat.label}`+ " = " + [koordinat.x, koordinat.y]
}
console.log(getChartData(titikKoordinat));

// =========================================================================
// 2. Membuat Arrow Function dari soal sebelumnya
// =========================================================================
console.log ("\n===Jawaban Arrow Function===");

const formatRupiahArrow = (angka) => "Rp " + angka
console.log(formatRupiahArrow(25000));

const isPasswordValidArrow = (password) => password.length >= 8
console.log(isPasswordValidArrow("eclaire123"));

const gabungClassArrow = (classDasar, classTambahan) => classDasar + " " + classTambahan
console.log(gabungClassArrow("rounded-lg", "bg-matcha"));

const hitungProgressArrow = (terisi, total) => (terisi/total)*100
console.log(hitungProgressArrow(2, 10));

const getGreetingArrow = ({firstName, role}) => 
    "Selamat Datang, " + firstName + "! " + "kamu adalah seorang " + role
console.log(getGreetingArrow(responseUser));

const canAccessFeatureArrow = ({ plan, status }) => 
    plan === "premium" && status === "active"
console.log(canAccessFeatureArrow(settingUser));

const createFormErrorArrow = ({field, message}) => ({
    inputTarget: field,
    pesanPeringatan: message
})
console.log(createFormErrorArrow(apiError));

const getChartDataArrow = ({x, y, label}) =>  ({ label, data: [x, y] })
const hasil = getChartDataArrow(titikKoordinat);
console.log(hasil.label + ":", hasil.data);
