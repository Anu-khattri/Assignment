
$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slides img');
    const totalSlides = slides.length;
    let clickCount = 0;
    const maxClicks = 10;

    function showSlide(index) {
        const offset = -index * 100 + '%';
        $('.slides').css('transform', 'translateX(' + offset + ')');
    }

    function updateButtons() {
        if (clickCount >= maxClicks) {
            $('.prev, .next').prop('disabled', true);
        } else {
            if (currentIndex === 0) {
                $('.prev').prop('disabled', true);
                $('.next').prop('disabled', false);
            } else if (currentIndex === totalSlides - 1) {
                $('.next').prop('disabled', true);
                $('.prev').prop('disabled', false);
            } else {
                $('.prev, .next').prop('disabled', false);
            }
        }
    }

    $('.next').click(function () {
        if (clickCount < maxClicks && currentIndex < totalSlides - 1) {
            currentIndex++;
            showSlide(currentIndex);
            clickCount++;
            updateButtons();
        }
    });

    $('.prev').click(function () {
        if (clickCount < maxClicks && currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            clickCount++;
            updateButtons();
        }
    });


    showSlide(currentIndex);
    updateButtons();
});

