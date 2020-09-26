window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', myAnimation);

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(fade, 10);

        function fade() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
});