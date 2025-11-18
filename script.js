const revealElements = document.querySelectorAll("[data-reveal]");

function scrollReveal() {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;

        if (isVisible) {
            el.classList.add("revealed");
            el.parentElement.classList.add("revealed");
        } else {
            el.classList.remove("revealed");
            el.parentElement.classList.remove("revealed");
        }
    });
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);