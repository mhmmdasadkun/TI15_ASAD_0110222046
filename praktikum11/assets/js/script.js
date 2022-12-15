// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
  // jika di klick akan menjalankan fungsi computerChoice
  a.addEventListener("click", (e) => {
    computerChoice(e);
  })
);

// fungsi untuk menghandle logic pada game
function computerChoice(e) {
  // menangkap element result pilihan komputer
  const result = document.querySelector("#result");

  // membuat list untuk pilihan komputer
  let choices = ["Batu", "Kertas", "Gunting"];

  // pilihan random untuk computer
  result.innerHTML = choices[Math.floor(Math.random() * choices.length)];

  // jika pilihan komputer == dengan pilihan user (draw)
  if (e.target.innerText.trim() == result.innerHTML) {
    setTimeout(() => alert("Imbang"), 100);
  }

  // jika pilihan user yg menang
  if (
    (e.target.innerText.trim() == "Batu" && result.innerHTML == "Gunting") ||
    (e.target.innerText.trim() == "Kertas" && result.innerHTML == "Batu") ||
    (e.target.innerText.trim() == "Gunting" && result.innerHTML == "Kertas")
  ) {
    setTimeout(() => alert("Kamu menang!"), 100);
  }

  // jika pilihan komputer yg menang
  if (
    (e.target.innerText.trim() == "Batu" && result.innerHTML == "Kertas") ||
    (e.target.innerText.trim() == "Kertas" && result.innerHTML == "Gunting") ||
    (e.target.innerText.trim() == "Gunting" && result.innerHTML == "Batu")
  ) {
    setTimeout(() => alert("Komputer menang!"), 100);
  }
}
