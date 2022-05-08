// Images
import offer1 from './images/offer-1.png';
import offer2 from './images/offer-2.png';
import offer3 from './images/offer-3.png';
import offer4 from './images/offer-4.png';
import catalogItem1 from './images/catalog-item-1.png';
import catalogItem2 from './images/catalog-item-2.png';
import catalogItem3 from './images/catalog-item-3.png';
import catalogItem4 from './images/catalog-item-4.png';
import catalogItem5 from './images/catalog-item-5.png';
import catalogItem6 from './images/catalog-item-6.png';
import catalogItem7 from './images/catalog-item-7.png';
import catalogItem8 from './images/catalog-item-8.png';
import catalogItem9 from './images/catalog-item-9.png';
import catalogItem10 from './images/catalog-item-10.png';
import catalogItem11 from './images/catalog-item-11.png';
import catalogItem12 from './images/catalog-item-12.png';

export const assortmentItems = [
  {
    id: 1,
    src: offer1,
    text: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    price: 310,
    isHit: true,
  },
  {
    id: 2,
    src: offer2,
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 380,
    isHit: true,
  },
  {
    id: 3,
    src: offer3,
    text: 'Сливочно-клубничное с присыпкой из белого шоколада',
    price: 355,
    isHit: true,
  },
  {
    id: 4,
    src: offer4,
    text: 'Сливочное крем-брюле с карамельной подливкой',
    price: 415,
    isHit: true,
  },
];

export const promotionItems = [
  {
    id: 1,
    title: 'Малинка даром!',
    text: 'При покупке 2 кг любого фруктового мороженого, добавим в ваш заказ банку малинового варенья бесплатно.',
    buttonText: 'Хочу варенье!',
  },
  {
    id: 2,
    title: 'Шоколадки даром!',
    text: `При покупке 2 кг пломбира, добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно
      бесплатно.`,
    buttonText: 'Хочу шоколадки!',
  },
];

export const advantagesItems = [
  {
    id: 1,
    text: `Все наше мороженое изготавливается на собственном производстве, с использованием современного оборудования и
      проверенных временем технологий.`
  },
  {
    id: 2,
    text: `Закупка ингредиентов производится только у проверенных фермерских хозяйств и компаний, с которыми нас
      связывает долговременное сотрудничество.`
  },
  {
    id: 3,
    text: `Для приготовления мороженого используются настоящие сливки и молоко высочайшего качества. Все дополнительные
      ингредиенты и добавки произведены из натурального, экологически чистого сырья.`,
  },
  {
    id: 4,
    text: `Доставка нашего мороженого до заказчиков осуществляется в специальном термопаке, который не дает мороженому
      растаять в пути и позволяет сохранить превосходный вкус.`
  },
];

export const offersItems = [
  {
    id: 1,
    title: 'Крем-брюле и пломбир с малиновым джемом',
  },
  {
    id: 2,
    title: 'Шоколадный пломбир и лимонный сорбет',
  },
  {
    id: 3,
    title: 'Пломбир с помадкой и клубничный щербет',
  },
];

export const routes = {
  mainPage: '/',
  catalogPage: '/catalog',
}

export const sortingFilterOptions = [
  'Сначала дорогие',
  'Сначала дешевые',
  'По жирности',
];

export const filterTypes = {
  sorting: 'sorting',
  price: 'price',
  fatness: 'fatness',
  fillers: 'fillers',
}

export const MAXIMUM_PRICE = 714;

export const catalogItems = [
  {
    id: 1,
    price: 310,
    src: catalogItem1,
    text: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    fatness: 11,
    filler: 'choco',
    popularity: 1,
  },
  {
    id: 2,
    price: 380,
    src: catalogItem2,
    text: 'Сливочно-кофейное с кусочками шоколада',
    fatness: 0,
    filler: 'fruits',
    popularity: 2,
  },
  {
    id: 3,
    price: 355,
    src: catalogItem3,
    text: 'Сливочно-клубничное с присыпкой из белого шоколада',
    fatness: 4,
    filler: 'jams',
    popularity: 3,
  },
  {
    id: 4,
    price: 415,
    src: catalogItem4,
    text: 'Сливочное крем-брюле с карамельной подливкой',
    fatness: 36,
    filler: 'sugar',
    popularity: 4,
  },
  {
    id: 5,
    price: 325,
    src: catalogItem5,
    text: 'Сливочное с брусничным джемом',
    fatness: 38,
    filler: 'syrups',
    popularity: 5,
  },
  {
    id: 6,
    price: 410,
    src: catalogItem6,
    text: 'Сливочно-черничное с цельными ягодами черники ',
    fatness: 0,
    filler: 'fruits',
    popularity: 6,
  },
  {
    id: 7,
    price: 375,
    src: catalogItem7,
    text: 'Сливочно-лимонное с карамельной присыпкой',
    fatness: 7,
    filler: 'jams',
    popularity: 7,
  },
  {
    id: 8,
    price: 320,
    src: catalogItem8,
    text: 'Сливочное с шоколадной стружкой',
    fatness: 19,
    filler: 'choco',
    popularity: 8,
  },
  {
    id: 9,
    price: 440,
    src: catalogItem9,
    text: 'Сливочно-ванильное с кусочками шоколада',
    fatness: 28,
    filler: 'fruits',
    popularity: 9,
  },
  {
    id: 10,
    price: 435,
    src: catalogItem10,
    text: 'Сливочноe с ментоловым сиропом',
    fatness: 40,
    filler: 'sugar',
    popularity: 10,
  },
    {
    id: 11,
    price: 355,
    src: catalogItem11,
    text: 'Сливочное с кусочками черного шоколада',
    fatness: 0,
    filler: 'syrups',
    popularity: 11,
  },
  {
    id: 12,
    price: 420,
    src: catalogItem12,
    text: 'Сливочное с мятным сиропом',
    fatness: 3,
    filler: 'jams',
    popularity: 12,
  },
];

export const labelToSortingMap = {
  'По популярности': 'popularity',
  'Сначала дорогие': 'price',
  'Сначала дешевые': 'price',
  'По жирности': 'fatness',
}

export const labelToFatnessMap = {
  '0%': 1,
  'до 10%': 11,
  'до 30%': 31,
  'выше 30%': 101,
}

export const labelToFillerMap = {
  'шоколадные': 'choco',
  'сахарные присыпки': 'sugar',
  'фрукты': 'fruits',
  'сиропы': 'syrups',
  'джемы': 'jams',
}
