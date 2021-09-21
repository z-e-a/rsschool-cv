console.log("\
Task 'CV' by Evgeny Zubkov (aka z-e-a)\n\
Self-assessment:\n\
1)  [v] The layout is valid. Validity of the layout checked: https://validator.w3.org/nu/?doc=https%3A%2F%2Fz-e-a.github.io%2Frsschool-cv%2F (+10)\n\
2)  [v] Layout is semantic. 2 points for each unique HTML5 semantic tag or for each unique headline. Applied semantic tags: adress, figure, footer, header, main, nav, section. Used headings tags: h1, h2, h3, h4 (+20)\n\
3)  [v] CSS styles are used for the design of the CV. The file 'style.css' is attached in the <head> tag (+10)\n\
4)  [v] The content is placed in a block that is horizontally centered on the page. The page content is placed in a div-block with the class 'content-wrapper' style (+10)\n\
5)  [v] The layout is adaptive: no horizontal scrollbar appears on any of the screen resolutions down to 320px inclusive, while the entire content of the page is keept (+10)\n\
6)  [v] There is an adaptive burger menu. The links in the menu items lead to the main sections of the CV. When clicking on the menu items, a smooth scrolling through the anchors is implemented. When the screen width decreases, the menu becomes adaptive. (+10)\n\
7)  [v] There is an image on the CV page, the proportions of the image are not distorted (with=250px for class 'photo'), the image has the alt attribute (+10)\n\
8)  [v] Contacts and list of skills are arranged in the form of a list ul > li (+10)\n\
9)  [v] The CV contains contacts, brief information about yourself, skills, education, English level (+10)\n\
10) [v] The CV contains an example of code (solving a problem from the codewars website) with code highlighting. To highlight the code used highlight.js library (+10)\n\
11) [v] The CV contains images-links to the recent projects. On click on the image, the project page opens in a new tab. Each project has a name, a short description, and a list of technologies used. (+10)\n\
12) [v] The CV made in English (+10)\n\
13) [v] The requirements for the Pull Request are met: there is a link to the task, a screenshot of the CV page, a link to the CV page on GitHub Pages, deadline date is specified, self-assessment is completed (+10)\n\
14) [-] There is a video self-presentation in English. The video is embedded in the CV page (+0)\n\
15) [v] The quality design is not les than in the CV examples given in the task description (+10)\n\
Total score: 150\n\n\
Pull Request link: https://github.com/z-e-a/rsschool-cv/pull/4");

//////////////////////////////////////////////////////

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