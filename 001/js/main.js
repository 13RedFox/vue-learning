"use strict";
/**
 * ! Изучение по книге.
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
    a: 1,
    b: 2,
    c: null,
    operator: "+",
  },
  methods: {
    calculate: function () {
      switch (this.operator) {
        case "+":
          this.c = this.a + this.b;
          break;
        case "-":
          this.c = this.a - this.b;
          break;
        case "*":
          this.c = this.a * this.b;
          break;
        case "/":
          this.c = this.a / this.b;
          break;
      }
    },
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
    candidates: [
      { name: "Мистер Черный", votes: 140 },
      { name: "Мистер Белый", votes: 135 },
      { name: "Мистер Розовый", votes: 145 },
      { name: "Мистер Коричневый", votes: 130 },
    ],
  },
  computed: {
    mayor: function () {
      let candidateSorter = this.candidates.sort(function (a,b) {
        return b.votes - a.votes;
      });
      return candidateSorter[0];
    }
  },
  methods: {
    clear: function() {
      this.candidates = this.candidates.map(function(candidate) {
        candidate.votes = 0;
        return candidate;
      })
    }
  },
});
