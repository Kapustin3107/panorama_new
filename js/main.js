//opn modal blocks class
class Modal {
    constructor(element, block) {
        this.element = element;
        this.block = block;
        this.closeBtn = this.block.querySelector(".close-btn");
        this.activeState = "is-open";
        this.init();
    }
    init() {
        this.openModal();
    }
    openModal() {
        this.element.addEventListener("click", () => {
            this.block.classList.add(this.activeState);
        })
    }
    closeModal() {
        tthis.closeBtn.addEventListener("click", () => {
            this.block.classList.remove(this.activeState);
        })
    }
}

//init header burger for modal menu
const neaderBurger = document.querySelector(".header-burger");
const headerNav = document.querySelector(".header-nav");
const headerModal = new Modal(neaderBurger, headerNav);

//slider swiper init
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});