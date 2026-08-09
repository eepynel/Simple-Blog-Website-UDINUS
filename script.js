const guestForm = document.getElementById('guestForm');

if (guestForm) {
    guestForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form reload halaman

        // Mengambil nilai dari 5 inputan
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const instansi = document.getElementById('instansi').value;
        const kategori = document.getElementById('kategori').value;
        const pesan = document.getElementById('pesan').value;

        // Menampilkan hasil di bawah tombol form
        document.getElementById('resNama').innerText = "Nama: " + nama;
        document.getElementById('resEmail').innerText = "Email: " + email;
        document.getElementById('resInstansi').innerText = "Instansi: " + instansi;
        document.getElementById('resKategori').innerText = "Kategori: " + kategori;
        document.getElementById('resPesan').innerText = "Pesan: " + pesan;

        // Tampilkan box hasil
        document.getElementById('formResult').style.display = "block";

        // Opsi alert (Sesuai instruksi tugas)
        alert("Terima kasih! Data buku tamu berhasil dikirim.");
    });
}

const sapaanElement = document.getElementById('sapaan');

if (sapaanElement) {
    const jam = new Date().getHours();
    let teksSapaan = "";

    if (jam < 10) {
        teksSapaan = "Selamat Pagi!";
    } else if (jam < 14) {
        teksSapaan = "Selamat Siang!";
    } else if (jam < 17) {
        teksSapaan = "Selamat Sore!";
    } else {
        teksSapaan = "Selamat Malam!";
    }

    sapaanElement.textContent = teksSapaan;
}