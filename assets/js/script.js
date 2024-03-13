let navitems = document.querySelector('.navitems');
let menubox = document.querySelector('.menubox');

menubox.addEventListener("click", function () {
    navitems.classList.toggle("show")
})

$('.sliderbox').slick({
    dots: false,
    infinite: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                autoplay: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
            }
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let scroll_button = document.querySelector('.scroll-button')

function backtoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scroll_button.setAttribute("style", "display: flex;")
    } else {
        scroll_button.setAttribute("style", "display: none;")

    }

})