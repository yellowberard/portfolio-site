var darkBtn = document.querySelector(".dark-mode");
var lightBtn = document.querySelector(".light-mode");

lightBtn.addEventListener("click", function () {
    darkBtn.classList.remove('hide');
    lightBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

});
darkBtn.addEventListener("click", function () {
    lightBtn.classList.remove('hide');
    darkBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        lightBtn.classList.remove("hide");
        darkBtn.classList.add("hide");
    }
}
var home_link = document.querySelector('.home-link');
var about_link = document.querySelector('.about-link');
var skill_link = document.querySelector('.skill-link');
var qual_link = document.querySelector('.qual-link');
var certi_link = document.querySelector('.certi-link');
var prjt_link = document.querySelector('.prjt-link');
var cntct_link = document.querySelector('.cntct-link');

var selectedBtn;
selectedBtn = home_link;

home_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    home_link.classList.add('slctBtn');
    selectedBtn = home_link;
})
about_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    about_link.classList.add('slctBtn');
    selectedBtn = about_link;
})
skill_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    skill_link.classList.add('slctBtn');
    selectedBtn = skill_link;
})
qual_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    qual_link.classList.add('slctBtn');
    selectedBtn = qual_link;
})
certi_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    certi_link.classList.add('slctBtn');
    selectedBtn = certi_link;
})
prjt_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    prjt_link.classList.add('slctBtn');
    selectedBtn = prjt_link;
})
cntct_link.addEventListener('click', () => {
    selectedBtn.classList.remove('slctBtn');
    cntct_link.classList.add('slctBtn');
    selectedBtn = cntct_link;
})

// Header small
var smallHeaderHead = document.querySelector(".header-small-head");
var smallHeaderContent = document.querySelector(".header-small-content");
var headerUpBtn = document.querySelector(".headerUp-btn");
var headerDownBtn = document.querySelector(".headerDown-btn");

headerUpBtn.addEventListener('click', function () {
    smallHeaderHead.classList.remove("header-show");
    smallHeaderHead.classList.add("header-small-hide");
    smallHeaderContent.classList.remove("header-small-hide");
    smallHeaderContent.classList.add("header-show");
});
headerDownBtn.addEventListener('click', function () {
    smallHeaderContent.classList.add("header-small-hide");
    smallHeaderContent.classList.remove("header-show");
    smallHeaderHead.classList.remove("header-small-hide");
    smallHeaderHead.classList.add("header-show");
});

var typed = new Typed('.type', {
    strings: ['a Web Developer.', 'a C++ Programmer.', 'a QA Tester.', 'a Gamer.'],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 50,
    backDelay: 1000,
    backSpeed: 40,
    loop: true,
});

//SCROLL SECTIONS (TODO)

var sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        var sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("slctBtn");

            if (sectionId != "home") {
                document.querySelector(".sc-fixed").classList.add("sc-show");
            } else {
                document.querySelector(".sc-fixed").classList.remove("sc-show");
            }
            if (sectionId !== "home") {
                document.querySelector(".top-btn").classList.add("top-btn-show");
            } else {
                document.querySelector(".top-btn").classList.remove("top-btn-show");
            }
        } else {
            document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("slctBtn");
        }
    });
});





// Skills 


var cardUpIcon = document.querySelectorAll(".card-up-icon")
var cardLabel = document.querySelectorAll(".card-label");
var cardContent = document.querySelectorAll(".card-content");
var flag = [1, 1, 1];

var drop = (i) => {
    cardLabel[i].addEventListener("click", function () {
        if (flag[i] === 1) {
            cardContent[i].classList.remove("card-hide");
            cardContent[i].classList.add("card-show");
            flag[i] = 0;
            cardUpIcon[i].classList.add("flip");
        } else {
            cardContent[i].classList.add("card-hide");
            cardContent[i].classList.remove("card-show");
            flag[i] = 1;
            cardUpIcon[i].classList.remove("flip");
        }
    });
}

for (var j = 0; j < 3; j++) {
    drop(j);
}

// Qualifications

var qualWork = document.querySelector(".qual-work-head");
var qualEdu = document.querySelector(".qual-edu-head");
var qualAch = document.querySelector(".qual-achiev-head");
var qualCat = document.querySelectorAll(".qual-c");
var qualTime = document.querySelectorAll(".qual-time");
var flag1 = [1, 1, 1];

qualEdu.addEventListener("click", function () {
    if (flag1[0] === 1) {
        qualEdu.classList.add("time-selected");
        qualTime[0].classList.remove("time-hide");
        qualWork.classList.remove("time-selected");
        qualAch.classList.remove("time-selected");
        qualTime[0].classList.add("time-show");
        qualTime[1].classList.remove("time-show");
        qualTime[2].classList.remove("time-show");
        qualTime[1].classList.add("time-hide");
        qualTime[2].classList.add("time-hide");
        flag1[0] = 0;

    } else {
        qualTime[0].classList.add("time-hide");
        qualTime[0].classList.remove("time-show");
        qualEdu.classList.remove("time-selected");
        flag1[0] = 1;

    }
});
qualWork.addEventListener("click", function () {
    if (flag1[1] === 1) {
        qualTime[1].classList.remove("time-hide");
        qualTime[1].classList.add("time-show");
        qualEdu.classList.remove("time-selected");
        qualAch.classList.remove("time-selected");
        qualWork.classList.add("time-selected");
        qualTime[0].classList.remove("time-show");
        qualTime[2].classList.remove("time-show");
        qualTime[0].classList.add("time-hide");
        qualTime[2].classList.add("time-hide");
        flag1[1] = 0;

    } else {
        qualTime[1].classList.add("time-hide");
        qualTime[1].classList.remove("time-show");
        qualWork.classList.remove("time-selected");
        flag1[1] = 1;

    }
});
qualAch.addEventListener("click", function () {
    if (flag1[2] === 1) {
        qualTime[2].classList.remove("time-hide");
        qualTime[2].classList.add("time-show");
        qualAch.classList.add("time-selected");
        qualEdu.classList.remove("time-selected");
        qualWork.classList.remove("time-selected");
        qualTime[1].classList.remove("time-show");
        qualTime[0].classList.remove("time-show");
        qualTime[1].classList.add("time-hide");
        qualTime[0].classList.add("time-hide");

        flag1[2] = 0;

    } else {
        qualTime[2].classList.add("time-hide");
        qualTime[2].classList.remove("time-show");
        qualAch.classList.remove("time-selected");
        flag1[2] = 1;

    }
});


// async funtion to prevent from redirection to other website
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var message = document.getElementById("text-message");
    var data = new FormData(event.target);
    fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json",
            },
        })

        .then((response) => {
            message.innerHTML = "Your message has been sent.";
            document.querySelector(".msg_style").style.display = "block";

            setTimeout(function () {
                document.querySelector(".msg_style").style.display = "none";
            }, 4000);
            form.reset();
        })
        .catch((error) => {
            message.innerHTML =
                "Oops! There was a problem delivering your message, please contact via other means.";
            document.querySelector(".msg_style").style.display = "block";

            setTimeout(function () {
                document.querySelector(".msg_style").style.display = "none";
            }, 4000);
        });
}

form.addEventListener("submit", handleSubmit);

// SELECT CAROUSEL
const carousel = document.querySelector(".carousel");

// SELECT NEXT BUTTON
const nextButton = document.querySelector(".right-btn");

// SELECT LEFT BUTTON
const previousButton = document.querySelector(".left-btn");

// SELECT THE NAV
const nav = document.querySelector(".carousel-nav");

// SELECT ALL THE DOTS
const dots = [...nav.children];

// SELECT ALL THE SLIDES INSIDE THE CAROUSEL
const slides = [...carousel.children];

// CALCULATE THE SLIDE WIDTH
let slideWidth = slides[0].getBoundingClientRect().width;

// POSITION THE SLIDES HORIZONTALY
function positionSlides(slides) {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.left = slideWidth * index + "px";
    }
}

positionSlides(slides);

// ON RIGHT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE LEFT
nextButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel, currentSlide, nextSlide);
    hideButton(nextSlide, slides);
    moveToDot(nextSlide, slides, nav, dots);
});

// ON LEFT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE RIGHT
previousButton.addEventListener("click", function () {
    const currentSlide = carousel.querySelector(".active");
    const previousSlide = currentSlide.previousElementSibling;

    moveToSlide(carousel, currentSlide, previousSlide);
    hideButton(previousSlide, slides);
    moveToDot(previousSlide, slides, nav, dots);
});

// ON DOT CLICK
nav.addEventListener("click", function (e) {

    // if we didn't click on a dot, we exit
    if (e.target === nav) return;

    // SELECT THE CLICKED DOT
    const targetDot = e.target;

    // SELECT THE CURRENT DOT
    const currentDot = nav.querySelector(".active");

    // SELECT THE CURRENT SLIDE
    const currentSlide = carousel.querySelector(".active");

    // find the index of the dot, so we can target the right slide
    let targetDotIndex = findIndex(targetDot, dots);

    // SELECT THE TARGET SLIDE
    const targetSlide = slides[targetDotIndex];

    moveToSlide(carousel, currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    hideButton(targetSlide, slides);
})

// MOVE TO DOT
function moveToDot(targetSlide, slides, nav, dots) {
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = nav.querySelector(".active");
    const targetDot = dots[slideIndex];
    toggleActive(currentDot, targetDot);
}
// MOVE TO SLIDE
function moveToSlide(carousel, currentSlide, targetSlide) {
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);
}

// Toggle ACTIVE CLASS
function toggleActive(current, target) {
    current.classList.remove("active");
    target.classList.add("active");
}

// HIDE BUTTON
function hideButton(targetSlide, slides) {
    // If the target slide is the first slide the previous button must be hidden
    // and the next button must be shown
    if (targetSlide === slides[0]) {
        previousButton.classList.add("carousel-btn-hide");
        nextButton.classList.remove("carousel-btn-hide");
        nextButton.classList.remove("carousel-btn-show");
        nextButton.classList.add("carousel-btn-show");

    } else if (targetSlide === slides[slides.length - 1]) {
        // If the target slide is the last slide the next button must be hidden
        // and the previous button must be shown
        nextButton.classList.add("carousel-btn-hide");
        previousButton.classList.remove("carousel-btn-hide");
        nextButton.classList.add("carousel-btn-show");
        // previousButton.classList.add("carousel-btn-show");
    } else {
        // if none of the above is true, we show both the next and prevoius button        
        previousButton.classList.remove("carousel-btn-hide");
        previousButton.classList.add("carousel-btn-show");
        nextButton.classList.add("carousel-btn-show");
        nextButton.classList.remove("carousel-btn-hide");
    }
}

// FIND THE INDEX OF AN ITEM, INSIDE AN ARRAY OF ITEMS
function findIndex(item, items) {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}