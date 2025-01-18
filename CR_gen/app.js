const qrText = document.getElementById("qr_text");
const imgContainer = document.getElementById("img_container");
const qrIMG = document.getElementById("qrImage");
const generate_button = document.getElementById("generate");
const download_button = document.getElementById("download");

generate_button.addEventListener("click", () => {
    if (qrText.value.length > 0) {
        qrIMG.src = "http://api.qrserver.com/v1/create-qr-code/?data=" + qrText.value + "&size=100x100";
        imgContainer.classList.add("show-img");
        console.log(qrText.value);

        download_button.addEventListener("click", async () => {
            const res = await fetch(qrIMG.src);
            const blob = await res.blob();
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "QR_code.jpg";
            link.click();
        });
    } else {
        qrText.classList.add("error");
        setTimeout (() => {
            qrText.classList.remove("error");
        }, 1000);
    }
});