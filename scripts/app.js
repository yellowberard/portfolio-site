var darkBtn = document.querySelectorAll(".dark-mode");
var lightBtn = document.querySelectorAll(".light-mode");

lightBtn[0].addEventListener("click", function () {
    darkBtn[0].classList.remove('hide');
    lightBtn[0].classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

});
darkBtn[0].addEventListener("click", function () {
    lightBtn[0].classList.remove('hide');
    darkBtn[0].classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});
lightBtn[1].addEventListener("click", function () {
    darkBtn[1].classList.remove('hide');
    lightBtn[1].classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

});
darkBtn[1].addEventListener("click", function () {
    lightBtn[1].classList.remove('hide');
    darkBtn[1].classList.add('hide');
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
    // console.log("hi");
});
headerDownBtn.addEventListener('click', function () {
    smallHeaderContent.classList.add("header-small-hide");
    smallHeaderContent.classList.remove("header-show");
    smallHeaderHead.classList.remove("header-small-hide");
    smallHeaderHead.classList.add("header-show");
    // console.log("hi");
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

var Sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    Sections.forEach((current) => {
        const SectionHeight = current.offsetHeight;
        const SectionTop = current.offsetTop - 60;
        var SectionId = current.getAttribute("id");

        if (scrollY > SectionTop && scrollY <= SectionTop + SectionHeight) {
            document.querySelector(".menu-2 a[href*=" + SectionId + "]").classList.add("slctBtn");

            if (SectionId != "home") {
                document.querySelector(".sc-fixed").classList.add("sc-show");
            } else {
                document.querySelector(".sc-fixed").classList.remove("sc-show");
            }
            if (SectionId !== "home") {
                document.querySelector(".top-btn").classList.add("top-btn-show");
            } else {
                document.querySelector(".top-btn").classList.remove("top-btn-show");
            }
        } else {
            document.querySelector(".menu-2 a[href*=" + SectionId + "]").classList.remove("slctBtn");
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


// FIND THE INDEX OF AN ITEM, INSIDE AN ARRAY OF ITEMS
const projectsToggle = document.querySelectorAll(".toggle-projects");
var projectSelect = projectsToggle[0];
var skip = [];

for (var i = 0; i < projectsToggle.length; i++) {
    projectsToggle[i].addEventListener("click", function () {
        projectSelect.classList.remove("selected");
        this.classList.add("selected");
        projectSelect = this;
        if (this.getAttribute("id") == "android-apps") {
            skip = [0, 1, 2, 3, 4, 5, 6, 11, 12];
            currentSlide(8);
        } else if (this.getAttribute("id") == "web-apps") {
            skip = [7, 8, 9, 10, 11, 12];
            currentSlide(1);
        } else if (this.getAttribute("id") == "electronics") {
            skip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            currentSlide(12);
        } else {
            skip = [];
            currentSlide(1);
        }
        executeHide();
    });
}

var numberText = document.querySelectorAll(".numbertext");
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

const executeHide = () => {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("hide-dot");
    }
    for (var i = 0; i < skip.length; i++) {
        dots[skip[i]].classList.add("hide-dot");
    }
};

for (var i = 0; i < numberText.length - skip.length; i++) {
    numberText[i].innerHTML = i + 1 + " / " + numberText.length;
}

document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    if (projectSelect != projectsToggle[0]) {
        if (n + slideIndex > slides.length) {
            slideIndex = 0;
        }
        if (slideIndex + n >= 1 && slideIndex + n <= 7) {
            skip = [7, 8, 9, 10, 11, 12];
            projectSelect.classList.remove("selected");
            projectsToggle[1].classList.add("selected");
            projectSelect = projectsToggle[1];
        } else if (slideIndex + n >= 8 && slideIndex + n <= 11) {
            skip = [0, 1, 2, 3, 4, 5, 6, 11, 12];
            projectSelect.classList.remove("selected");
            projectsToggle[2].classList.add("selected");
            projectSelect = projectsToggle[2];
        } else {
            skip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            projectSelect.classList.remove("selected");
            projectsToggle[3].classList.add("selected");
            projectSelect = projectsToggle[3];
        }
        executeHide();
    }

    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active-dot";
}

// const learnMore = document.querySelectorAll(".learn-more");
// const info = document.querySelectorAll(".slide-info p");

// for (var i = 0; i < learnMore.length; i++) {
//     learnMore[i].addEventListener("click", function () {
//         if (this.innerHTML == "Show Less") {
//             this.nextElementSibling.style.display = "none";
//             this.innerHTML = "Learn More";
//         } else {
//             this.nextElementSibling.style.display = "block";
//             this.innerHTML = "Show Less";
//         }
//     });
// }

function findIndex(item, items) {
    for (let index = 0; index < items.length; index++) {
        if (item === items[index]) {
            return index;
        }
    }
}