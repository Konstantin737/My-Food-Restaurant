import modal from "./modal";
import tabs from "./tabs";
import timer from "./timer";
import cards from "./cards";
import slider from "./slider";
import calc from "./calc";

window.addEventListener('DOMContentLoaded', () => {
   //Модальное окно
   modal();
   //Имплементация меню стиля питания
   tabs();
   //Имплементация таймера обратного отчета
   timer();
   //Имплементация панелей меню
   cards();
   //Имплементация слайдера
   slider();
   //Имплементация калькулятора активности
   calc();
});