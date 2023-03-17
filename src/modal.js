export default function modal() {
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