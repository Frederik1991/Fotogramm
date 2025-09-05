const dialogRef = document.getElementById("img_one");
const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const imgButtons = document.querySelectorAll(".button_look"); 

const images = [
    "./img/iceberg-8008071_1280.jpg",
    "./img/iceberg-8162195_1280.jpg",
    "./img/antarctic-3474502_1280.jpg",
    "./img/antarctic-7719963_1280.jpg", 
    "./img/antarctic-7719964_1280.jpg",
    "./img/ice-7761319_1280.jpg",
    "./img/ice-7788590_1280.jpg",
    "./img/iceberg-404966_1280.jpg",
    "./img/iceberg-8369810_1280.jpg",
    "./img/ocean-7981878_1280.jpg",
    "./img/navigation-2608122_1280.jpg",
    "./img/antarctic-7719971_1280.jpg"
];

let currentIndex = 0;

function openDialog() {
    dialogRef.showModal();
    galleryImage.src = images[currentIndex]; 
}

function closeDialog() {
    dialogRef.close();
}


imgButtons.forEach(button => {
    button.addEventListener("click", function() {
        const index = parseInt(button.dataset.index);
        if (!isNaN(index)) {
            currentIndex = index;
            galleryImage.src = images[currentIndex];
        }
    });
});


nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    galleryImage.src = images[currentIndex];
});


prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    galleryImage.src = images[currentIndex];
});

dialogRef.addEventListener("click", (event) => {
    // Wenn direkt auf den Dialog (nicht auf Inhalt) geklickt wurde → schließen
    if (event.target === dialogRef) {
        dialogRef.close();
    }
});