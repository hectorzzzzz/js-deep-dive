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






const createRoleCheckerArrow = allowedRole => userRole => userRole === allowedRole
const isAdminArrow = createRoleCheckerArrow("admin");
console.log(isAdminArrow("admin"));
console.log(isAdminArrow("customer"));
