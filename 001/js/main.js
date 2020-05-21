"use strict";
/**
 * TODO: Изучение по книге.
 */
new Vue({
  el: "#app",
  data: {
    message: "Наш король мертв! Пришлите подмогу!",
    stories: [
      {
        plot: "Сегодня я разбил машину!",
        writer: "Алекс",
      },
      {
        plot: "Кто-то съел мой шоколад!",
        writer: "Джон",
      },
      {
        plot: "Вчера кто-то украл мою сумку!",
        writer: "Джон",
      },
      {
        plot: "Я съел чей-то шоколад...",
        writer: "Алекс",
      },
    ],
  },
});

/**
 * ! Практика домашних примеров
 */
new Vue({
  el: "#app2",
  data: {
    gender: "female",
    name: "Вселенная",
    personalQualities: {
      name: "Костас",
      height: "1.73 м.",
      weigh: "65кг",
      eyeColor: "Коричневый",
      favoriteFood: "Долма",
    },
  },
});
