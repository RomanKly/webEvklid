// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".our-work__nav__steps__link").forEach(function (navSteps) {
//       navSteps.addEventListener("click", function (event) {
//         const path = event.currentTarget.dataset.path;

//         document.querySelectorAll('tab-content').forEach(function(tabContent){
//             tabContent.classList.remove('tab-content-active')
//         });
//         document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
//       });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  // находим секцию "Как мы работаем", чтоб все остальное искать уже внутри нее
  const ourWork = document.querySelector(".our-work");

  // сначала находим все кнопки шагов внутри ourWork и сохраняем их в переменную tabBtns, на всякий случай преобразовав в массив с помощью Array.from
  const tabBtns = Array.from(
    ourWork.querySelectorAll(".our-work__nav__steps__link")
  );

  // аналогично поступаем с контентом табов
  const tabContents = Array.from(
    ourWork.querySelectorAll(".our-work__advisory")
  );

  // создаем функцию для обработки клика по табу (функция обработчик, или callback). В ней используем название параметра evt вместо event
  function onStepClick(evt) {
    // находим путь
    const path = evt.currentTarget.dataset.path;

    // находим нужный контент
    const activeContent = ourWork.querySelector(`[data-target="${path}"]`);

    // скрываем все табы
    tabContents.forEach(function (tabContent) {
      if (tabContent !== activeContent) {
        tabContent.classList.remove("tab-content-active");
      }
    });

    // находим и показываем таб с нашим путем
    activeContent.classList.add("tab-content-active");
  }

  // навешиваем обработчик события на все кнопки табов
  tabBtns.forEach(function (navStep) {
    navStep.addEventListener("click", onStepClick);
  });
});
