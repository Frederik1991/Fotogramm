const dialogRef = document.getElementById("img_one");

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

const images = [
    "./img/iceberg-8008071_1280.jpg",
    "./img/iceberg-8162195_1280.jpg"
]

let currentIndex = 0; // aktuelles Bild
const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Erstes Bild laden
galleryImage.src = images[currentIndex];

// Weiter-Button
nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // zurück zum ersten Bild
    }
    galleryImage.src = images[currentIndex];
});

// Zurück-Button
prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // zum letzten Bild
    }
    galleryImage.src = images[currentIndex];
});