// // menu btn script Start

// let menuBtn = document.getElementById("menu-btn");
// let menuClose = document.getElementById("menu-close");
// var showMenu = document.querySelector(' #navbar .links ul')


// menuBtn.addEventListener('click', () => {
//     showMenu.classList.add('active');
// })

// menuClose.addEventListener('click', () => {
//     showMenu.classList.remove('active');
// })

// // ///////////////////////////////////////////////////////////////////
// let menuBtn2 = document.getElementById("menu-btn2");
// let menuClose2 = document.getElementById("menu-close2");
// var showMenu2 = document.querySelector(' #navbar2 .links ul')


// menuBtn2.addEventListener('click', () => {
//     showMenu2.classList.add('active');
// })

// menuClose2.addEventListener('click', () => {
//     showMenu2.classList.remove('active');
// })


// menu btn script End

// js navbar code start
// var resultShow = window.matchMedia("(min-width:500px)");
// var moreBtn = document.querySelector('.button-text');
// moreBtn.innerHTML = 'more';
// alert('working');

// var resultShow = window.matchMedia("(max-width:500px)");
// var moreBtn = document.querySelector('.button-text');
// moreBtn.innerHTML = 'Explore more';
// alert('working');



remove();



window.addEventListener('scroll', reveal)
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var revealpoint = 627;
        if (revealpoint < window.scrollY) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}

// js navbar code end

// explore more button code start

function remove() {


    // if (window.matchMedia("(max-width:500px)").matches) {
   
    // console.log('hello world');
    //     }
    // }
}



    // var resultShow = window.matchMedia("(min-width:500px)");
    // var moreBtn = document.querySelector('.button-text');
    // moreBtn.innerHTML = 'more';
    // alert('working');


//



// explore more button code end