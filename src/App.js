import { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Main from './pages/Main';

const animalsData = [
  {
    id: 1,
    src: '../images/matatabi.png',
    name: 'Мататаби',
    birthday: "29.12.2012",
    satiety80: 'Брюхо набито',
    satiety60: 'Перекусил бы',
    satiety40: 'Дай похавать',
    satiety0: 'Моя смерть на твоей совести',
  },
  {
    id: 2,
    src: '../images/sonGoky.png',
    name: 'Сон Гоку',
    birthday: "2.9.2010",
    satiety80: 'Було смачно',
    satiety60: 'Пошли абрикосы тырить',
    satiety40: 'Кабана будешь?',
    satiety0: 'О, Сталин, а шо ты тут делаешь?',
  },
  {
    id: 3,
    src: '../images/hachibi.png',
    name: 'Гьюки',
    birthday: "15.1.2015",
    satiety80: 'Жизнь хороша',
    satiety60: 'Бутер не помешает',
    satiety40: 'А можно чото в рот кинуть?',
    satiety0: 'Та за шо',
  },
  {
    id: 4,
    src: '../images/kurama.png',
    name: 'Курама',
    birthday: "6.6.2011",
    satiety80: 'Можно и поспать',
    satiety60: 'Хочу пиццу',
    satiety40: 'Ладно, давай свою гречку',
    satiety0: 'Кто свет выключил?',
  },
];

const animalsWithFun = [...animalsData].map((animal) => {
  return Object.assign(animal, {
    feed: () => {
      animal.lastEat = Date.now();
    }
  });
})


function App() {
  const [animals, setAnimals] = useState(animalsWithFun);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main animals={animals}/>}/>
      </Routes>
    </>
  );
}

export default App;
