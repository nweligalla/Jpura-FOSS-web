const loading = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("loading-content").style.display = "block";
    }, 500);
}

document.addEventListener('DOMContentLoaded', loading());

logo = document.querySelector(".brand-logo");
logo.addEventListener('click', () => location.reload());
