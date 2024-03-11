let navitems = document.querySelector('.navitems');
let menubox = document.querySelector('.menubox');

menubox.addEventListener("click", function () {
    navitems.classList.toggle("show")
})

$('.sliderbox').slick({
    dots: false,
    infinite: false,
    prevArrow: '.prev',
    nextArrow: '.next',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});