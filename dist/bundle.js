/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calc)
/* harmony export */ });
function calc() {
   //Имплементация калькулятора активности
   const male = document.querySelector('#male');
   const female = document.querySelector('#female');

   const userHeight = document.querySelector('#height');
   const userWeight = document.querySelector('#weight');
   const userAge = document.querySelector('#age');

   const low = document.querySelector('#low');
   const small = document.querySelector('#small');
   const medium = document.querySelector('#medium');
   const high = document.querySelector('#high');
   const activitiyBtn = [low, small, medium, high];
   let BMR = 0;
   let indexActivity = 1.375;
   let calories = 0;


   const btnCalculatingChoose = document.querySelectorAll('.calculating__choose');
   btnCalculatingChoose.forEach(item => item.addEventListener('click', (e) => {
      if(e.target.id === 'female') {
         female.classList.add('calculating__choose-item_active');
         male.classList.remove('calculating__choose-item_active');
      } else if(e.target.id === 'male') {
         male.classList.add('calculating__choose-item_active');
         female.classList.remove('calculating__choose-item_active');
      } else if(e.target.id === 'low') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         low.classList.add('calculating__choose-item_active');
         indexActivity = 1.2;
      } else if(e.target.id === 'small') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         small.classList.add('calculating__choose-item_active');
         indexActivity = 1.375;
      } else if(e.target.id === 'medium') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         medium.classList.add('calculating__choose-item_active');
         indexActivity = 1.55;
      } else if(e.target.id === 'high') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         high.classList.add('calculating__choose-item_active');
         indexActivity = 1.725;
      };
   }));

   const activityСalculation = () => {
      if(userHeight.value != '' && userWeight.value != '' && userAge.value != '' &&  Number(userHeight.value)>0 && Number(userAge.value)>0 && Number(userWeight.value)>0 &&  Number(userHeight.value)<280 && Number(userAge.value)<=120 && male.classList.contains('calculating__choose-item_active')) {
         BMR = 88.36 + (13.4 * Number(userWeight.value)) + (4.8 * Number(userHeight.value)) - (5.7 * Number(userAge.value));
         calories = Math.round(BMR * indexActivity);
      } else if(userHeight.value != '' && userWeight.value != '' && userAge.value != '' &&  Number(userHeight.value)>0 && Number(userAge.value)>0 && Number(userWeight.value)>0 &&  Number(userHeight.value)<280 && Number(userAge.value)<=120 && female.classList.contains('calculating__choose-item_active')) {
         BMR = 447.6 + (9.2 * Number(userWeight.value)) + (3.1 * Number(userHeight.value)) - (4.3 * Number(userAge.value));
         calories = Math.round(BMR * indexActivity);
      }
   }

   setInterval(()=>{
      activityСalculation();
      document.querySelector('#calories').textContent = calories;
   },1000)
}

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cards)
/* harmony export */ });
function cards() {
      class Menu {
      constructor () {
         this.getData();
         this.transfer = 74;
      }
      changeToUSD(price) {
         return Math.floor(price / this.transfer);
      }
      buildItemMenu (img, altimg, title, descr, price) {
         price = this.changeToUSD(price);
         const menuConteiner = document.querySelector('.container_menu');
         const menuItem = 
            `<div class="menu__item">
               <img src=${img} alt=${altimg}>
               <h3 class="menu__item-subtitle">${title}</h3>
               <div class="menu__item-descr">${descr}</div>
               <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${price}</span> $/день</div>
               </div>
            </div>`
         menuConteiner.insertAdjacentHTML('beforeend', menuItem);
      }
      getData () {
         const getResource = async (url) => {
            const res = await fetch(url);
            if(!res.ok) {
               throw new Error(`Could not fetch ${url}, status: ${res.status}`)
            }
            return await res.json();
         }
         getResource('http://localhost:3000/menu')
         .then(data => data.forEach(({img, altimg, title, descr, price}) => {
                  this.buildItemMenu(img, altimg, title, descr, price);
               }
            )
         );
      }
   }
   new Menu();
}


   // //запрос к серверу createCard(data)
   // const getResource = async (url) => {
   //    const res = await fetch(url);
   //    if(!res.ok) {
   //       throw new Error(`Could not fetch ${url}, status: ${res.status}`)
   //    }
   //    return await res.json();
   // }

   // getResource('http://localhost:3000/menu')
   //    .then(data => createCard(data));


   // //Имплементация панелей меню
   // function createCard(data) { //беру массив объектов с сервера(в db.json)
   //    data.forEach(({img, altimg, title, descr, price}) => {
   //       const changeToUSD = Math.floor(price / 74.5);
   //       const menuConteiner = document.querySelector('.container_menu')
   //       const element = document.createElement('div');
   //       element.classList.add('menu__item');
   //       element.innerHTML = `
   //       <div class="menu__item">
   //          <img src=${img} alt=${altimg}>
   //          <h3 class="menu__item-subtitle">Меню ${title}</h3>
   //          <div class="menu__item-descr">${descr}</div>
   //          <div class="menu__item-divider"></div>
   //          <div class="menu__item-price">
   //             <div class="menu__item-cost">Цена:</div>
   //             <div class="menu__item-total"><span>${changeToUSD}</span> $/день</div>
   //          </div>
   //       </div>
   //       `;
   //       menuConteiner.append(element);
   //    });
   // };


   // const getResource = async (url) => {
   //    const res = await fetch(url);
   //    if(!res.ok) {
   //       throw new Error(`Could not fetch ${url}, status: ${res.status}`)
   //    }
   //    return await res.json();
   // }

   // getResource('http://localhost:3000/menu')
   //    .then(data => data.forEach(({img, altimg, title, descr, price}) => {
   //                   new ItemMenu(img, altimg, title, descr, price);
   //                }
   //             )
   //          );
   // class ItemMenu {
   //    constructor (img, altimg, title, descr, price) {
   //       this.img = img;
   //       this.altimg = altimg;
   //       this.title = title;
   //       this.price = price;
   //       this.descr = descr;
   //       this.transfer = 74;
   //       this.changeToUSD();//работает сразу внутри
   //    }
   //    changeToUSD() {
   //       this.price = Math.floor(this.price / this.transfer) //перевод в доллары
   //    }
   //    buildItemMenu () {
   //       const menuConteiner = document.querySelector('.container_menu')
   //       const menuItem = 
   //          `<div class="menu__item">
   //             <img src=${this.img} alt=${this.altimg}>
   //             <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
   //             <div class="menu__item-descr">${this.descr}</div>
   //             <div class="menu__item-divider"></div>
   //             <div class="menu__item-price">
   //                <div class="menu__item-cost">Цена:</div>
   //                <div class="menu__item-total"><span>${this.price}</span> $/день</div>
   //             </div>
   //          </div>`
   //       menuConteiner.insertAdjacentHTML('beforeend', menuItem);
   //    }
   // }


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
function modal() {
    //Модальное окно
    const btnModal = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector('.modal');

   btnModal.forEach(item => item.addEventListener('click', ()=>{
      openModalWindow();
   }))

   function openModalWindow() {
   modalWindow.classList.add('show');
   document.body.style.overflow = 'hidden'; //убрал скролл страницы во время показа модального окна
   clearTimeout(timeOutModalWindow);//если пользователь сам открыл модальное окно мы очищаем этот интервал
   window.removeEventListener('scroll', showModalByScroll); //удалим обработчик на скролл после открытия модалки пользователем
   }

   function closeModalWindow() {
   modalWindow.classList.remove('show');
   document.body.style.overflow = ''; //вернул прокрутку, браузер сам подставит по умолчанию auto
   }

   modalWindow.addEventListener('click', (e) => {
   if(e.target === modalWindow || e.target.getAttribute('data-close') == '') { //если то по чему кликнули совпадает с тем, что в modalWindow или на то у чего есть атрибут data-close, закрываем МО
      closeModalWindow();
   }
   })

   document.addEventListener('keydown', (e) => {
   if(e.code === 'Escape' && modalWindow.classList.contains('show')) { //если код нажатой кнопки совпадает с 'Escape' и модальное окно содержит класс show выполняет
      closeModalWindow();
   }
   })

   //Открыть модальное окно через 10сек автоматически
   const timeOutModalWindow = setTimeout(() => {
   openModalWindow();
   window.removeEventListener('scroll', showModalByScroll); //удалим обработчик после срабатывания по интервалу
   }, 10000);

   //Показать модальное окно после прокрутки до конца страницы
   function showModalByScroll () {
   if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWindow();
      clearTimeout(timeOutModalWindow);//очистим интервал, если долистали быстрее до самого низа
      window.removeEventListener('scroll', showModalByScroll); //удалим обработчик после 1 срабатывания
   }
   }
   window.addEventListener('scroll', showModalByScroll);


   //Отправка форм обратной связи на сервер
   //для этого создаю файл для бэка server.php
   const forms = document.querySelectorAll('form');
   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Скоро мы с Вами свяжемся',
      failure: 'Ошибка. Что-то пошло не так...'
   };

   forms.forEach(item => {
      bindPostData(item);
   });

   const postData = async (url, data) => {
      const res = await fetch(url, {
         method: 'POST',
         body:  data,
         headers: {
            'Content-type': 'application/json'
         }
      });
      return await res.json();
   }

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         //Cпинер загрузки, помещаем в нее пустой div
         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display:block;
            margin: 20px auto auto auto;
         `;

         form.insertAdjacentElement('afterend', statusMessage);//вставляем в форму спинер загрузки после формы

         const formData = new FormData(form);
         const json = JSON.stringify(Object.fromEntries(formData.entries()))

         postData('http://localhost:3000/requests', json)
         .then(data => {
               console.log(data);
               showThanksModal(message.success);
         }).catch(() => {
               showThanksModal(message.failure);
         }).finally(() => {
            form.reset();
            statusMessage.remove();
         });
      });
   };

   //отдельное модальное окно для вывода информации отправки формы
   function showThanksModal(message) {
      //получаю блок modal__dialog из html
      const prevModalDialog = document.querySelector('.modal__dialog');
      //скрою этот блок, созданным css классом с display:none
      prevModalDialog.classList.add('hide');
      //открою модальное окно, в котором пока нет контента
      openModalWindow()
      //создаю обертку
      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog'); //заменил предыдущий div modal__dialog на новый
      thanksModal.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
         </div>
      `;
      //помещаем наше модальное окно на страницу в div c классом modal
      document.querySelector('.modal').append(thanksModal);
      //Через какое то время блок модалки с сообщением исчезает и все возвращается обратно как было
      setTimeout(() => {
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         document.querySelector('.modal').removeChild(thanksModal);
         closeModalWindow();
      }, 3000);
   };
}

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider() {
   //Имплементация слайдера
   const slideImages = document.querySelectorAll('.offer__slide');
   const buttonLeft = document.querySelector('.offer__slider-prev');
   const buttonRight = document.querySelector('.offer__slider-next');
   const currentNumber = document.querySelector('#current');
   const totalNumber = document.querySelector('#total');
   const dotsCase = document.querySelector('.dots__case');
   //Начальная установка слайдера
   totalNumber.textContent = slideImages.length < 9 ? `0${slideImages.length}` : slideImages.length;
   dotsCase.innerHTML = '<button class="dot"></button>'.repeat(+totalNumber.textContent);
   let countImages = 0;
   const dots = document.querySelectorAll('.dot');
   dots.forEach((item, index) => {index===countImages?item.classList.add('dot_active'):''});
   slideImages.forEach(item => item.classList.add('hide'));
   slideImages[countImages].classList.remove('hide');
   currentNumber.textContent = countImages < 9 ? `0${countImages+1}` : countImages+1;
   //Перелистывание картинки(общие функции левой и правой кнопки)
   const nextPicture = () => {
      currentNumber.textContent = countImages < 9 ? `0${countImages+1}` : countImages+1
      slideImages[countImages].classList.remove('hide');
      dots.forEach(item => item.classList.remove('dot_active'))
      dots[countImages].classList.add('dot_active');
   };

   //Обработчики событий перелистывание картинки
   buttonLeft.addEventListener('click', ()=>{
      if(countImages != 0) {
         slideImages[countImages].classList.add('hide');
         countImages--;
         nextPicture();
      } else if(countImages == 0){
         slideImages[countImages].classList.add('hide');
         countImages = slideImages.length-1;
         nextPicture();
      }; 
   });
   buttonRight.addEventListener('click', ()=>{
      if(countImages < slideImages.length-1) {
         slideImages[countImages].classList.add('hide');
         countImages++;
         nextPicture();
         console.log(totalNumber);
      } else if(countImages == slideImages.length-1) {
         slideImages[countImages].classList.add('hide');
         countImages = 0;
         nextPicture();
      } 
   });
   //Точки навигации
   dots.forEach((item, index) => {
      item.addEventListener('click', () => {
         console.log('click');
         slideImages.forEach(item => item.classList.add('hide'));
         dots.forEach(item => item.classList.remove('dot_active'))
         countImages = index;
         slideImages[index].classList.remove('hide');
         item.classList.add('dot_active');
         currentNumber.textContent = index < 9 ? `0${index+1}` : index+1;
      })
   })
}

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs)
/* harmony export */ });
function tabs() {
   //Имплементация меню стиля питания
   const tabsParrent = document.querySelector('.tabheader__items'),
         tabs = document.querySelectorAll('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent');

   //Функция скрывающая не активные табы
   function hideTabContent () {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      })
      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      })
   }

   //Функция показывающая табы
   function showTabContent (i = 0) { //i = 0 задаем по умолчанию если в функцию ничего не передается
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }
   hideTabContent();
   showTabContent();

   //Делегируем события клик на табы
   tabsParrent.addEventListener('click', (event) => {
      const target = event.target;
      if(target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, index) => {
            if(target === item) { //если таргет совпадает с элементом из цикла forEach то
               hideTabContent(item);
               showTabContent(index);
            };
         });
      };
   });
}

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timer)
/* harmony export */ });
function timer() {
   //Имплементация таймера обратного отчета
   const deadline = '2023-07-13 01:04:00';
   
   function getTimeRemaining(endtime) { //'Получить оставшееся время'
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());//количество милисекунд до которого нам надо досчитать(2023-08-30) и вычитаем из нее количю миллисекунд до текущей даты
      if(t<=0) { //если придет уже прошедшая дата, мы покажем нули в таймере а не минусовое значение
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
      } else {
         days = Math.floor(t/(1000 * 60 * 60 * 24)), //получили колво дней
         hours = Math.floor((t/(1000 * 60 * 60) % 24)),//берем общее кол-во мс, делим на кол-во мс в одном часе и узнаем остаток от деления на 24
         minutes = Math.floor((t/(1000*60)) % 60),//молучили минуты разделив общее количество секунд на количесто мс в минуте и получили остаток от деления на кол-во секунд в минуте 60
         seconds = Math.floor(t/1000 % 60);//кол-во сек внутри мс, остатком от деления на 60 узнаем колво последних 60 секунд
      }

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };//переменные часов мин и секунд создались внутри функции и поэтому ф-ция будет возвращать объект
   };

   //Функция подстановки нуля впереди значения в таймере, если значение однозначное
   function getZero(num) {
      if(num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      };
   };

   function timerShow (selector, endtime) {
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minuts = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerInterval = setInterval(updateClock, 1000);

      updateClock();//запустим здесь для того что бы не ждать 1с и в это время видеть начальную верстку

      function updateClock() {
         const timerSet = getTimeRemaining(endtime);
         days.textContent = getZero(timerSet.days);//передаем значение в getZero которая вернет 09 или 13
         hours.textContent = getZero(timerSet.hours);
         minuts.textContent = getZero(timerSet.minutes);
         seconds.textContent = getZero(timerSet.seconds);

         if(timerSet.total <= 0) {
            clearInterval(timerInterval)
         };
      };
   };
   timerShow('.timer', deadline);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc */ "./src/calc.js");







window.addEventListener('DOMContentLoaded', () => {
   //Модальное окно
   (0,_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
   //Имплементация меню стиля питания
   (0,_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
   //Имплементация таймера обратного отчета
   (0,_timer__WEBPACK_IMPORTED_MODULE_2__["default"])();
   //Имплементация панелей меню
   (0,_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
   //Имплементация слайдера
   (0,_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
   //Имплементация калькулятора активности
   (0,_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map