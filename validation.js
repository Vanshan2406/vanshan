// validation.js

// Fungsi validasi form pendaftaran
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let terms = document.getElementById("terms").checked;

    // Validasi email menggunakan regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Email tidak valid. Harap masukkan email yang benar.");
      event.preventDefault();
    }

    // Validasi panjang password (minimal 6 karakter)
    if (password.length < 6) {
      alert("Password harus minimal 6 karakter.");
      event.preventDefault();
    }

    // Pengecekan apakah semua field telah diisi
    if (!name || !email || !password || !terms) {
      alert(
        "Semua field harus diisi dan Anda harus menyetujui syarat dan ketentuan."
      );
      event.preventDefault();
    }
  });

// jQuery untuk menambah fitur dinamis dan efek hover pada tombol
$(document).ready(function () {
  // Tambahkan fitur baru saat tombol "Tambah Fitur" diklik
  $("#add-feature-btn").click(function () {
    $("#features ul").append("<li>Fitur baru untuk trading kripto</li>");
  });

  // Efek hover pada tombol
  $("button").hover(
    function () {
      $(this).css("background-color", "#ddd");
    },
    function () {
      $(this).css("background-color", "");
    }
  );

  // Mengubah warna tombol pendaftaran saat difokuskan
  $("#signupForm button")
    .focus(function () {
      $(this).css("background-color", "#28a745");
    })
    .blur(function () {
      $(this).css("background-color", "");
    });
});
