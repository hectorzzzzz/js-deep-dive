// =========================================================================
// 1. Membuat function biasa (Sedang/Moderate)
// =========================================================================
console.log ("===Jawaban Function===")

// Jika status === "success" kembalikan "bg-green"
// Jika status === "pending" kembalikan "bg-yellow"
// Selain itu (failed), kembalikan "bg-red"
// (Tips: Coba gunakan Ternary Operator `? :` bertingkat di dalam return)
function getBadgeColor(status) {
    return status === "success" ? "bg-green" : status === "pending" ? "bg-yellow" : "bg-red"
}

console.log(getBadgeColor("pending"));
console.log(getBadgeColor("failed"));

// Jika jumlah >= 1000, kembalikan (jumlah / 1000) ditambah string "K"
// Jika tidak, kembalikan jumlahnya saja dalam bentuk string
function formatSubscriber(jumlah) {
    return jumlah >= 1000 ? `${jumlah/1000}K` : `${jumlah}`
}
console.log(formatSubscriber(7500)); // Ekspektasi: "7.5K" atau "7.5K" (tergantung pembulatanmu, 7.5K aja aman)
console.log(formatSubscriber(450));  // Ekspektasi: "450"

// Ambil avatarUrl dan username dari parameter profile.
// Jika avatarUrl bernilai null/falsy, kembalikan string "default-avatar.png"
// Jika ada, kembalikan avatarUrl aslinya.
const userSatu = { username: "winny_dev", avatarUrl: "https://photos.com/winny.jpg" };
const userDua = { username: "anonim_coder", avatarUrl: null }; // Ceritanya belum upload

function getAvatar(profile) {
    return profile === profile.username ? profile.username : profile.avatarUrl
}
console.log(getAvatar(userSatu)); // Ekspektasi: "https://photos.com/winny.jpg"
console.log(getAvatar(userDua)); // Ekspektasi: "default-avatar.png"