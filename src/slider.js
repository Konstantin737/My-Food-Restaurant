export default function slider() {
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