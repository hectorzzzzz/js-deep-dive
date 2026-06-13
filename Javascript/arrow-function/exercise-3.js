// =========================================================================
// 1. Membuat function biasa (Sulit)
// =========================================================================
console.log ("===Jawaban Function===")

// Fungsi ini harus mengembalikan sebuah FUNGSI BARU.
// Fungsi baru tersebut menerima parameter (userRole) 
// dan mengembalikan true/false (apakah userRole === allowedRole?)
function createRoleChecker(allowedRole) {
    userRole = "admin"
    return userRole === allowedRole

}

// Cara pakai/bikin printernya:
const isAdmin = createRoleChecker("admin"); 

console.log(isAdmin("admin"));     // Ekspektasi: true
console.log(isAdmin("customer"));  // Ekspektasi: false