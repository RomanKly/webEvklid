window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#burger").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#close").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#search").addEventListener("click", function () {
        document.querySelector("#form").classList.toggle("active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#close-search")
        .addEventListener("click", function () {
            document.querySelector("#form").classList.toggle("active");
        });
});



// window.addEventListener("DOMContentLoaded", function () {
//     const faq = document.querySelector(".faq");
//     const accordionItems = Array.from(faq.querySelectorAll(".faq__list__item"));
//     const accordionMore = Array.from(faq.querySelectorAll(".faq__item__more"));

//     function onClickItem(evt) {
//         const path = evt.currentTarget.dataset.path;
//         const activeItem = faq.querySelector(`[data-target="${path}"]`);

//         accordionMore.forEach(function (accordionMore) {
//             if (accordionMore !== activeItem) {
//                 accordionMore.classList.remove("active-accordion");
//             }
//         });

//         activeItem.classList.add("active-accordion");
//     }

//     accordionItems.forEach(function (nav) {
//         nav.addEventListener("click", onClickItem);
//     });

// });

// document.querySelector(".faq__list__item").addEventListener("click", function(){
  //     document.querySelector(".faq__item__more").classList.toggle("active-accordion");
  // });
