export default function timer(id, deadline) {
   //Имплементация таймера обратного отчета
   // const deadline = '2023-07-13 01:04:00';//передаем из script.js id, deadline в timer()
   
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
   timerShow(id, deadline);
}