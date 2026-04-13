const a_els = document.getElementsByClassName('cc-click');
Array.from(a_els).forEach(
    (el) => {
        const tag = el.id.substring(6);
        const viddiv = document.getElementById('div-' + tag);
        const ifr = document.getElementById('iframe-' + tag);
        const fireFn = (e) => {
            viddiv.classList.toggle('cc-video-active');
            el.classList.toggle('cc-open');
            if (!viddiv.classList.contains('cc-video-active')) {
                ifr.src = ifr.src;
                ifr.tabIndex = -1;
            } else {
                ifr.tabIndex = 0;
            }
        };
        const keyFn = (e) => {
            if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                fireFn(e);
            } else if (e.key === "Enter") {
                fireFn(e);
            }
        };
        el.addEventListener('click', fireFn, {passive: true});
        el.addEventListener('keydown', keyFn);
    });
