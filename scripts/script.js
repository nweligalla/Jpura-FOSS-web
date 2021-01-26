var myVar;

const loading = () => {
    myVar = setTimeout(showPage, 5000);
}

document.addEventListener('DOMContentLoaded', loading());

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}