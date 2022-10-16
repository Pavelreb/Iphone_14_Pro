

// Scroll to anchors
(function () {

    const menuBtn = document.querySelector('.burger-btn');
    const menuIcon = document.querySelector('.menu-icon');
    const headerWrapper = document.querySelector('.header-wrapper');
    const menuLink = document.querySelectorAll('.nav-item-link');
    const page = document.body;


    menuBtn.onclick = function(){
        menuIcon.classList.toggle('menu-icon-active');
        headerWrapper.classList.toggle('mobile');
        page.classList.toggle('no-scroll');
    }

    if (window.innerWidth <= 1100) {
        for(let i = 0; i < menuLink.length; i += 1) {
            menuLink[i].onclick = function(){
                menuIcon.classList.toggle('menu-icon-active');
                headerWrapper.classList.toggle('mobile');
                page.classList.toggle('no-scroll');
            }
        }
    }

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());