let slideIndex = 1;

function openModal() {
    document.getElementById("modal").style.display = "block";
    showSlides(slideIndex);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            openModal();
            currentSlide(index + 1);
        });
    });

    closeBtn.addEventListener("click", closeModal);

    prevBtn.addEventListener("click", () => plusSlides(-1));
    nextBtn.addEventListener("click", () => plusSlides(1));

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    showSlides(slideIndex);
});
