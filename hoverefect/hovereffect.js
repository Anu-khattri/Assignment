

document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('box');

    box.addEventListener('mouseenter', function() {
        box.classList.add('box-hover');
    });

    box.addEventListener('mouseleave', function() {
        box.classList.remove('box-hover');
    });
});
