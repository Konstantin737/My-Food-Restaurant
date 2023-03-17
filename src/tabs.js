export default function tabs() {
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