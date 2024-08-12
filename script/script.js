// toggle class active - ham menu
const navbarItems = document.querySelector(".navbar-items");
// Saat ham menu di klik
document.querySelector("#menu").onclick = (e) => {
  navbarItems.classList.toggle("active");
  e.preventDefault();
};
// Klik di luar sidebar untuk menghilangkan menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarItems.contains(e.target)) {
    navbarItems.classList.remove("active");
  }
});
// tampilkan under contruction
// document.querySelector("#maintenance").onclick = (e) => {
//   alert("under contruction!");
//   e.preventDefault();
// };
// data base - google sheets
const scriptURL = "https://script.google.com/macros/s/AKfycbyrhKwwuAj8_2JgE0T5h_W-XUkkqQDZVvV73CNk4nnQu_0l8bI3iUHENbkorfddfYfs/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const icon = document.querySelector(".close-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol kirim, hilangkan tombol loading
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      myAlert.classList.toggle("d-flex");
      icon.onclick = (e) => {
        myAlert.classList.toggle("d-none");
        myAlert.classList.toggle("d-flex");
        e.preventDefault();
      };
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
