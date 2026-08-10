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

    if (jam <= 10) {
        teksSapaan = "Selamat Pagi!";
    } else if (jam <= 14) {
        teksSapaan = "Selamat Siang!";
    } else if (jam <= 17) {
        teksSapaan = "Selamat Sore!";
    } else {
        teksSapaan = "Selamat Malam!";
    }

    sapaanElement.textContent = teksSapaan;
}

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol read more
  const readMoreBtns = document.querySelectorAll(".read-more-btn");

  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah halaman reload/scroll ke atas karena href="#"

      // Cari elemen paragraf induk dari tombol yang diklik
      const blogItem = this.closest(".blog-item");
      const moreText = blogItem.querySelector(".more-text");

      // Cek status tampilan teks
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        this.textContent = "Show Less / Sembunyikan";
      } else {
        moreText.style.display = "none";
        this.textContent = "Read More / Selengkapnya";
      }
    });
  });
});