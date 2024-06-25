// Bounce entrance animation for training items
window.addEventListener("load", () => {
    const items = document.querySelectorAll('.training__item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('bounce');
        }, index * 200); // delay for each item
    });
});

// Animation on scroll for academic cards
window.addEventListener("scroll", function () {
    var cards = document.querySelectorAll(".academic-card");
    var windowHeight = window.innerHeight;
    cards.forEach(function (card, index) {
        var cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            setTimeout(function () {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, index * 200);
        }
    });
});

// Animation on scroll for core values
window.addEventListener("scroll", function () {
    var items = document.querySelectorAll(".core-values__item");
    var windowHeight = window.innerHeight;
    items.forEach(function (item, index) {
        var itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 100) {
            setTimeout(function () {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 100);
        }
    });
});
