pindah = 1;
function ga() {
    if(pindah == 1) {
        btn.style.top=400;
        btn.style.left=300;
        pindah = 2;
    } else if (pindah == 2) {
        btn.style.top=400;
        btn.style.left=50;
        pindah = 3;
    } else if (pindah == 3) {
        btn.style.top=370;
        btn.style.left=166;
        pindah = 1;
    }
}