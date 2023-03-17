export default function cards() {
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
   class Menu {
      constructor () {
         let data = this.getData();
         this.transfer = 74;
         this.changeToUSD();//работает сразу внутри
      }
      changeToUSD() {
         this.price = Math.floor(this.price / this.transfer) //перевод в доллары
      }
      buildItemMenu (item) {
         console.log(item);
         const menuConteiner = document.querySelector('.container_menu')
         const menuItem = 
            `<div class="menu__item">
               <img src=${img} alt=${altimg}>
               <h3 class="menu__item-subtitle">Меню ${title}</h3>
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
            .then(data => data.forEach(console.log(data))
         );
      }
   }
}