const loading = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading-content").style.display = "block";
  }, 500);
};

document.addEventListener("DOMContentLoaded", loading());

logo = document.querySelector(".brand-logo");
logo.addEventListener("click", () => location.reload());

//form submit
submitBtn = document.querySelector("#submit");
fname = document.querySelector("#fname");
lname = document.querySelector("#lname");
email = document.querySelector("#email");



submitBtn.addEventListener("click", () => {
  if (fname.value != "" || lname.value != "" || email.value != "") {
    submitBtn.classList.add("modal-close");
  }
});
