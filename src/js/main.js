import { openDrop } from './module/openDrop.js';
import { activateTab } from './module/activateTab.js';
import { updateContent, openMenuLevel1, openMenuLevel2, handleResize, setupMobileMenu } from './module/dropDownCatalog.js';
import { openMenu } from './module/openMenu.js';
import { testWebP } from './module/testWebP.js';
import { toggleModal } from './module/toggleModal.js';
import { newTabs } from './module/newTabs.js';
//import { playVideo } from './module/playVideo.js';
import { initializeDropdown } from './module/initializeDropdown.js';
import { boxProductLine } from './module/boxProductLine.js'
import { setupFormValidation } from './module/setupFormValidation.js'


testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-btn')) {
  const btnsDrop = document.querySelectorAll('.drop-down-btn');
  btnsDrop.forEach(btn => {
    btn.addEventListener('click', () => {
      openDrop(btn, '.drop-down-item')
    })
  })
}

if (document.querySelector('#swiper-1') && document.querySelector('#swiper-1 > .swiper-wrapper') && document.querySelectorAll('#swiper-1 > .swiper-slide')) {
  const swiper1 = new Swiper("#swiper-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: false,
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec5__button-next",
      nextEl: ".main-sec5__button-prev",
    },
  });
}

if (document.querySelector('#swiper-2') && document.querySelector('#swiper-2 > .swiper-wrapper') && document.querySelectorAll('#swiper-2 > .swiper-slide')) {
  const swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: false,
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec4__button-next",
      nextEl: ".main-sec4__button-prev",
    },
  });
}

/*if (document.querySelectorAll(".card3__swiper")){
  document.querySelectorAll('.card3__swiper').forEach((swiperContainer) => {
    new Swiper(swiperContainer, {
      slidesPerView: 1,
      //direction: 'horizontal',
      spaceBetween: 10,
      pagination: {
        el: '.card3__swiper-pagination',
        clickable: true,
      },
      allowTouchMove: false, // Отключить свайп
      simulateTouch: false,
      nested: true, // Важно для вложенных свайперов
    });
  })
}*/

function initCard3Swipers() {
  document.querySelectorAll('.card3__swiper').forEach((swiperContainer) => {
    if (!swiperContainer.classList.contains('swiper-initialized')) {
      const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.card3__swiper-pagination',
          clickable: true, // Отключаем клики по пагинации
        },
        allowTouchMove: false,
        simulateTouch: false,
        nested: true,
      });

      swiperContainer.classList.add('swiper-initialized');

      /*let lastX = 0;
      let moveAccumulator = 0; // Накопитель смещения
      const threshold = 100; // Минимальная дистанция в пикселях для переключения (увеличил)

      swiperContainer.addEventListener('mousemove', (e) => {
        let deltaX = e.clientX - lastX;
        moveAccumulator += deltaX; // Накопливаем изменение

        if (Math.abs(moveAccumulator) > threshold) { 
          if (moveAccumulator > 0) {
            swiper.slideNext(); // Двигаем вправо
          } else {
            swiper.slidePrev(); // Двигаем влево
          }
          moveAccumulator = 0; // Сбрасываем накопитель после перелистывания
        }

        lastX = e.clientX; // Обновляем позицию
      });*/
    }
  });
}

const observer = new MutationObserver(() => {
  initCard3Swipers(); // Переинициализация, если появились новые карточки
});

observer.observe(document.body, {
  childList: true,
  subtree: true, // Отслеживание вложенных элементов
});

// Инициализируем Swiper для уже существующих карточек
initCard3Swipers();

if (document.querySelector('.product-catalog-sec2__swiper')){
  const swiperCatalog = new Swiper(".product-catalog-sec2__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    pagination: {
      el: '.product-catalog-sec2__swiper-pagination',
      clickable: true,
    },
  });
}

if (document.querySelector('#swiper-3') && document.querySelector('#swiper-3 > .swiper-wrapper') && document.querySelectorAll('#swiper-3 > .swiper-slide')) {
  const swiper3 = new Swiper("#swiper-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1380: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec3__button-next",
      nextEl: ".main-sec3__button-prev",
    },
  });
}

if (
  document.querySelector('#swiper-8') &&
  document.querySelector('#swiper-8 > .swiper-wrapper') &&
  document.querySelectorAll('#swiper-8 > .swiper-slide') &&
  document.querySelector('#swiper-4') &&
  document.querySelector('#swiper-4 > .swiper-wrapper') &&
  document.querySelectorAll('#swiper-4 > .swiper-slide')
) {
  const swiper4 = new Swiper("#swiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    //reverseDirection: true,
  });

  const swiper8 = new Swiper("#swiper-8", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    pagination: {
      el: ".main-sec1__swiper-pagination",
      clickable: true,
      //inversePagination: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false, // Продолжать автоплей после взаимодействия
    },
  });

  swiper4.controller.control = swiper8;
  swiper8.controller.control = swiper4;
}

function initSwiper5() {
  if (document.querySelector('#swiper-5') && document.querySelector('#swiper-5 > .swiper-wrapper') && document.querySelectorAll('#swiper-5 > .swiper-slide') && document.querySelector('#swiper-6') && document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')) {
    const swiper6 = new Swiper("#swiper-6", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: false,
      breakpoints: {
        365: {
          slidesPerView: 3,
        },
        450: {
          slidesPerView: 4,
        },
        520: {
          slidesPerView: 5,
        },
        1030: {
          slidesPerView: 4,
        },
        1435: {
          slidesPerView: 5,
        }
      }
      //watchOverflow: true,
      //watchSlidesProgress: true,
    });
    const swiper5 = new Swiper("#swiper-5", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product-card-sec1__button-next",
        prevEl: ".product-card-sec1__button-prev",
      },
      thumbs: {
        swiper: swiper6,
      },
      allowTouchMove: false,
    })
  }
}

if (document.querySelector('.product-card-sec1__info')) {
  const parent = document.querySelector('.product-card-sec1__info')
  const buttons = parent.querySelectorAll('.btn6')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.id, "btn6", "product-card-sec1__info")
    })
  })
}

if (document.querySelector('.drop-down-catalog')) {
  const boxCatalog = document.querySelector('.drop-down-catalog')
  if (window.innerWidth > 950){
    openMenuLevel1({
      boxCatalog:boxCatalog,
      classBtns:'a.drop-down-catalog__btn', 
      classBox:'.drop-down-catalog__content-wrapp', 
      targetSelector:'.drop-down-catalog__main-content'
    });
  } else if (window.innerWidth <= 950) {
    setupMobileMenu()
  }
  
  
  window.addEventListener('resize', handleResize);
  handleResize();
}

if (document.querySelector("#dropCatalog") && document.querySelector(`[data-window-id="dropCatalog"]`)) {
  openMenu("dropCatalog")
}

if (document.querySelector("#burgerMenu") && document.querySelector(`[data-window-id="burgerMenu"]`)) {
  openMenu("burgerMenu", true)
}

if (document.querySelector('#swiper-7') && document.querySelector('#swiper-7 > .swiper-wrapper') && document.querySelectorAll('#swiper-7 > .swiper-slide')) {
  let swiper7;

  function initSwiper() {
    swiper7 = new Swiper('#swiper-7', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  function destroySwiper() {
    if (swiper7) {
      swiper7.destroy(true, true);
      swiper7 = null;
    }
  }

  function handleResize() {
    if (window.innerWidth < 1030 && !swiper7) {
      initSwiper();
    } else if (window.innerWidth >= 1030 && swiper7) {
      destroySwiper();
    }
  }
  handleResize();
  window.addEventListener('resize', handleResize);
}

if (!document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  initSwiper5()
} else if (document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.product-card-sec1__equipment-list-1') &&
        document.querySelector('#swiper-6') &&
        document.querySelector('.new_block')) {
      initializeSwiperSwitcher({
        buttonListSelector: '.product-card-sec1__equipment-list-1',
        swiperContainerId: 'swiper-6',
        newBlockSelector: '.new_block',
      });
    }
  });
}

function initializeSwiperSwitcher({
  buttonListSelector,
  swiperContainerId,
  newBlockSelector,
}) {
  const buttonList = document.querySelector(buttonListSelector);
  const swiperContainer = document.getElementById(swiperContainerId);
  const newBlock = document.querySelector(newBlockSelector);

  const updateSwiper = (index) => {
    console.log('Индекс для обновления Swiper:', index);
    const allSwipers = newBlock.querySelectorAll('.swiper-wrapper-6');
    console.log('Все списки ul:', allSwipers);
    const selectedSwiper = allSwipers[index];

    if (selectedSwiper) {
      swiperContainer.innerHTML = '';
      const clonedSwiper = selectedSwiper.cloneNode(true);
      swiperContainer.appendChild(clonedSwiper);
      initSwiper5()
      console.log(`Список с индексом ${index} вставлен.`);
    } else {
      console.error(`Список с индексом ${index} не найден.`);
    }
  };

  buttonList.addEventListener('click', (event) => {
    console.log('Клик по кнопке');
    const button = event.target.closest('.product-card-sec1__btn-fasteners');
    if (!button) return;

    const li = button.closest('li');
    const index = Array.from(buttonList.children).indexOf(li);
    console.log('Индекс выбранного элемента:', index);

    buttonList.querySelectorAll('li').forEach((item) =>
      item.classList.remove('selected')
    );
    li.classList.add('selected');
    updateSwiper(index);
  });

  const selectedIndex = Array.from(buttonList.children).findIndex((li) =>
    li.classList.contains('selected')
  );
  if (selectedIndex !== -1) {
    console.log('При загрузке найден элемент с индексом:', selectedIndex);
    updateSwiper(selectedIndex);
  } else {
    console.warn('Нет элемента с классом selected при загрузке.');
  }
}

if (document.querySelector('a.btn5') && document.querySelector('.modal_del_card')) {
  toggleModal('a.btn5', '.modal_del_card','.modal_del_close','.modal_del');
}

if (document.querySelector('a.btn-track-order') && document.querySelector('.modal_del_head_top')) {
  toggleModal('a.btn-track-order', '.modal_del_head_top','.modal_del_close','.modal_del_head');
}


if(document.querySelector('.product-card-sec1__box-left') && document.querySelector('.product-card-sec1__hidden-swiper-mobil')) {
  document.addEventListener('DOMContentLoaded', () => {
    const boxLeftWrapp = document.querySelector('.product-card-sec1__box-left-wrapp');
    const hiddenSwiperMobile = document.querySelector('.product-card-sec1__hidden-swiper-mobil');
    const originalParent = boxLeftWrapp.parentElement;

    const handleResize1 = () => {
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 1030) {
        if (!hiddenSwiperMobile.contains(boxLeftWrapp)) {
          hiddenSwiperMobile.appendChild(boxLeftWrapp);
        }
      } else {
        if (!originalParent.contains(boxLeftWrapp)) {
          originalParent.appendChild(boxLeftWrapp);
        }
      }
    };
    window.addEventListener('resize', handleResize1);
    handleResize1();
  });  
}


if (document.querySelectorAll(".product-card-sec1__item-tab .btn6") && document.querySelectorAll(".product-card-sec1__box-content")) {
  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".product-card-sec1__item-tab .btn6");
    const contentBlocks = document.querySelectorAll(".product-card-sec1__box-content");

    const activeButton = Array.from(tabButtons).find(button => button.classList.contains("active"));
    if (!activeButton && tabButtons.length > 0) {
      tabButtons[0].classList.add("active");
    }

    const activeContent = Array.from(contentBlocks).find(block => block.classList.contains("active"));
    if (!activeContent && contentBlocks.length > 0) {
      contentBlocks[0].classList.add("active");
    }
  });
}

if (document.getElementById('btnScroll')) {
  document.addEventListener('DOMContentLoaded', () => {
    const btnScroll = document.getElementById('btnScroll');
  
    const toggleScrollButton = () => {
      if (window.scrollY > document.documentElement.scrollHeight / 4) {
        btnScroll.classList.add('active');
      } else {
        btnScroll.classList.remove('active');
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    btnScroll.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', toggleScrollButton);
  });
}

if (document.querySelector('.box-double-catalog')){
  newTabs();
}

/*if(document.querySelectorAll(".btn-video-play")) {
  playVideo()
}*/

if(document.querySelectorAll(".drop-down3")){
  initializeDropdown('drop-down3__btn', 'drop-down3__list', 'active');
}

if(document.querySelector('.box-swiper2')){
  const swiper21 = new Swiper('.box-swiper2__swiper', {
    effect: 'coverflow', // Включаем эффект "coverflow"
    grabCursor: true,
    centeredSlides: true, // Центральный слайд по центру
    slidesPerView: "auto", // Слайды адаптируются к ширине контейнера
    initialSlide: 3, // Устанавливаем центральный слайд активным
    coverflowEffect: {
      rotate: 0, // Угол поворота второстепенных слайдов
      stretch: 0, // Растяжение между слайдами
      depth: 105, // Глубина (перекрытие слайдов)
      modifier: 2, // Интенсивность эффекта
      slideShadows: false, // Тени для слайдов
    },
    navigation: {
      nextEl: ".box-swiper2-prev",
      prevEl: ".box-swiper2-next",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.7,
        coverflowEffect: {
          depth: 65,
        }
      },
      1250: {
        slidesPerView: 3.7,
        coverflowEffect: {
          depth: 105,
        }
      },
    },
  });
}

if(document.querySelector('.box-swiper3')){
  const swiper21 = new Swiper('.box-swiper3__swiper', {
    effect: 'coverflow', // Включаем эффект "coverflow"
    //grabCursor: true,
    centeredSlides: true, // Центральный слайд по центру
    slidesPerView: "auto", // Слайды адаптируются к ширине контейнера
    initialSlide: 3, // Устанавливаем центральный слайд активным
    coverflowEffect: {
      rotate: 20, // Угол поворота второстепенных слайдов
      stretch: 0, // Растяжение между слайдами
      depth: 100, // Глубина (перекрытие слайдов)
      modifier: 2, // Интенсивность эффекта
      slideShadows: false, // Тени для слайдов
    },
    navigation: {
      nextEl: ".box-swiper2-prev",
      prevEl: ".box-swiper2-next",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.6,
        coverflowEffect: {
          depth: 100,
        }
      },
      1250: {
        slidesPerView: 3.6,
        coverflowEffect: {
          depth: 100,
        }
      },
    },
  });
}

if (document.querySelector('.product-card-sec1__box-right') && document.querySelector('.box-product-line')) {
  boxProductLine();
};

if (document.querySelector('#swiper-20') && document.querySelector('#swiper-21')){
  const swiper21 = new Swiper("#swiper-21", {
    spaceBetween: 5, // Расстояние между слайдами превью
    slidesPerView: 4, // Количество превью на экране
    freeMode: true, // Свободная прокрутка
    watchSlidesProgress: true, // Следит за активным слайдом
    breakpoints: {
      1030: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
    },
  });

  const swiper20 = new Swiper("#swiper-20", {
    spaceBetween: 4, // Отступ между слайдами
    breakpoints: {
      1030: {
        spaceBetween: 10,
      },
    },
    thumbs: {
      swiper: swiper21, // Привязываем превью-слайдер
    },
  });
}

/*if(document.querySelectorAll("#productViewer")){
$(document).ready(function () {
  const frames = 36;
  const imagePath = "../img/360/{frame}.jpg";
  const viewer = $("#productViewer");

  viewer.spritespin({
    source: Array.from({ length: frames }, (_, i) => imagePath.replace("{frame}", i + 1)),
    width: 500,
    height: 400,
    sense: -1,
    responsive: true,
    animate: false, // Стартуем без анимации
    loop: true,
    frame: 0,
    behavior: "drag",
  });

  let isAnimating = false;

  $("#toggle360").on("click", function () {
    const api = viewer.spritespin("api");
  
    if (api && api.data) {
      if (isAnimating) {
        api.stopAnimation(); // Останавливаем анимацию
        isAnimating = false;
        $("#toggle360").removeClass("active"); // Удаляем класс
      } else {
        api.startAnimation(); // Запускаем анимацию
        isAnimating = true;
        $("#toggle360").addClass("active"); // Добавляем класс
      }
    }
  });
});
}*/

if (document.querySelectorAll('.box-form-1__form')){
  document.querySelectorAll(".box-form-1__form").forEach(form => {
    setupFormValidation(form, ".box-form-1__submit");
  });
}

if (document.querySelector('.partners-sec2__swiper')) {
  const swiperEl = document.querySelector('.partners-sec2__swiper');
  const swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
  const slides = swiperWrapper.querySelectorAll('.swiper-slide');

  const partnersSwiper = new Swiper('.partners-sec2__swiper', {
    slidesPerView: 1,
    spaceBetween: 7,
    //centeredSlides: true,
    //initialSlide: 3,
    speed: 1000,
    freeMode: {
      enabled: true,  // свободное перемещение (без привязки к слайдам)
      momentum: true, // инерция при прокрутке
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    breakpoints: {
      580: { slidesPerView: 2, spaceBetween: 10 },
      850: { slidesPerView: 4, spaceBetween: 15 },
      1030: { slidesPerView: 5, spaceBetween: 27 },
    },
    navigation: {
      nextEl: '.partners-sec2__btn-prev',
      prevEl: '.partners-sec2__btn-next',
    },
    on: {
      reachEnd: () => {
        // При достижении конца добавляем копии первых слайдов
        slides.forEach((slide) => {
          const clone = slide.cloneNode(true);
          swiperWrapper.appendChild(clone);
        });
        partnersSwiper.update(); // обновляем Swiper
      },
    },
  });
  swiperEl.addEventListener('mouseenter', () => partnersSwiper.autoplay.stop());
  swiperEl.addEventListener('mouseleave', () => partnersSwiper.autoplay.start());
}

if (document.querySelector('.box-awards__swiper')){
  const awardsSwiper = new Swiper('.box-awards__swiper', {
    slidesPerView: 'auto', // Автоматическое количество видимых слайдов
    spaceBetween: 5, // Отступ между слайдами 10px
    //loop: true, // Бесконечный цикл
    navigation: {
      nextEl: '.box-awards__prev', // Кнопка "вперед"
      prevEl: '.box-awards__next', // Кнопка "назад"
    },
    breakpoints: {
      // Адаптивные настройки для разных размеров экрана
      320: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 9,
      },
      1200: {
        slidesPerView: 12,
      }
    }
  });
}