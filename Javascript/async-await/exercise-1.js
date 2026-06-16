// =========================================================================
// 1. Membuat fungsi async-await
// =========================================================================
console.log ("===Jawaban Async-await===")

// Anggap saja ini fungsi tiruan API eksternal (jangan diubah)
// Ambil properti 'name' dan 'price' dari dalam 'response.data'
// Kembalikan teks: "Menu: name, Harga: price"
const fakeFetchMenu = () => Promise.resolve({ status: 200, data: { name: "Matcha Latte", price: 25000 } });

const getMenuData = async () => {
    try {
        const response = await fakeFetchMenu();
        const res = response.data
        return `Menu : ${res.name}, Harga : ${res.price}`
    } catch (error) {
        return "Gagal mengambil data";
    }
}

// Cara eksekusi (karena async, harus pakai .then atau di dalam async lain)
getMenuData().then(res => console.log(res)); // Ekspektasi: "Menu: Matcha Latte, Harga: 25000"
