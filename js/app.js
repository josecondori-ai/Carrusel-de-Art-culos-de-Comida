document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.carrusel-item');
    let total = items.length;
    let current = 0;

    document.getElementById('moveRight').addEventListener('click', () => {
        let next = current + 1;
        setSlide(current, next);
    });

    document.getElementById('moveLeft').addEventListener('click', () => {
        let prev = current - 1;
        setSlide(current, prev);
    });

    function setSlide(prev, next) {
        if (next >= total) {
            next = 0;
        }

        if (next < 0) {
            next = total - 1;
        }

        items[prev].classList.remove('active');
        items[next].classList.add('active');
        current = next;

        setTimeout(() => {
            console.log('current ' + current);
            console.log('prev ' + prev);
        }, 800);
    }
});