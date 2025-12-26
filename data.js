let isDark = true;

function tombol() {
    const mode= document.getElementById("mode")
    console.log(isDark);

    if(isDark) {
        mode.src = "assets/download (1).jpg";
    } else {
        mode.src = "assets/pin.jpg";
    }

    isDark = !isDark;
}

