const loading = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("loading-content").style.display = "block";
    }, 1000);
}

document.addEventListener('DOMContentLoaded', loading());
