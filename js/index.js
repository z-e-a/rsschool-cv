

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function (){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function (){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function (){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function (){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function (){
        return (isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch')
} else {
    document.body.classList.add('_pc')
}

/////////  smooth scroll ///////////////////////////////////////

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuClick)
    });

    function onMenuClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(menuBtn.classList.contains('_active')){
               menuBtn.classList.remove('_active');
               menuBody.classList.remove('_active');
               document.body.classList.remove('_lock');
           }
           
            window.scrollTo(
                {top: gotoBlockValue,
                 behavior: "smooth"}
            );
        }
        e.preventDefault();
    }
}

///////// Menu button handling ////////////////////////////////////

const menuBtn = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        menuBtn.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        if(menuBtn.classList.contains('_active')){
            document.body.classList.add('_lock');
        } else {
            document.body.classList.remove('_lock');
        }
    });
    
}