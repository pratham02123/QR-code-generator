let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.trim() !== "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.style.display = "flex";
    } else {
        alert("Please enter some text or URL");
        imgBox.style.display = "none";
    }
}
