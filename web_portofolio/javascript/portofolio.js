alert('Kenalkan dirimu...');

var nama = prompt('Masukan Namamu : ');
if(nama){
    alert('Halo ' + nama + ', Selamat Datang di Website Portofolio Dwi Rama');
}else{
    alert('Selamat Datang di Website Dwi Rama');
}

// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("sticky", window.scrollY > 0);
// })

// start js Send a Message
 function sendToWhatsApp() {
    // Ambil data dari input
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Format pesan
    var text = `Halo, saya *${name}*.\nEmail: ${email}\nNo HP: ${phone}\nPesan: ${message}`;

    // Ganti dengan nomor WhatsApp kamu (gunakan kode negara tanpa +)
    var waNumber = "6282216087448";

    // Buat URL ke WhatsApp
    var url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

    // Arahkan ke WhatsApp
    window.open(url, '_blank');
  }
// end js send a message