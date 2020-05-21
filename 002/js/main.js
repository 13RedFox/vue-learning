"use strict";

let vue1 = new Vue({
  el: "#app",
  data: {
    name: "Vue",
    number: 100,
    isOk: true,
    string: "My name is Serhii",
    url: "http://google.com",
    link: '<a href="http://google.com">Google</a>',
    counter: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
    title: "Счетчик 3",
    x: 0,
    y: 0,
    inputValue: "Initial value",
    isActive: false,
    color: "blue",
    color2: "blue",
    height: 100,
    type: "a",
    isVisible: true,
    isVisible2: true,
    title: "Hello I am Vue!",
    title1: "Hello I am Vue1",
    title2: "Hello I am Vue2",
    people: [
      { name: "Vlad", age: 25 },
      { name: "Elena", age: 20 },
      { name: "Max", age: 30 },
    ],
    person: {
      name: "Max",
      age: 50,
      job: "Frontend",
    },
  },
  computed: {
    getCssClasses: function () {
      return {
        red: this.isActive,
        green: !this.isActive,
      };
    },
    circleClasses: function () {
      return {
        background: this.color2,
        height: this.height + "px",
      };
    },
    computedResult: function () {
      return this.counter > 3 ? "More than 3" : "Less than 3";
    },
  },
  methods: {
    sayHello: function () {
      return "I am function";
    },
    riseCounter: function () {
      this.counter++;
    },
    onHover: function (event) {
      event.target.style.color = "red";
    },
    riseCounter2: function (num, str, event) {
      this.counter3 += num;
      this.title = str;

      if (num === 5) {
        event.target.style.color = "blue";
      } else if (num === 10) {
        event.target.style.color = "red";
      }
    },
    handleMouseMove: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertValue: function (event) {
      alert(event.target.value);
    },
    add: function () {
      this.counter4++;
    },
    sub: function () {
      this.counter4--;
    },
    result: function () {
      return this.counter > 3 ? "More than 3" : "Less than 3";
    },
    alertFast: function () {
      alert("I am from Vue 1");
    },
    updateFirstTitle1: function () {
      this.title = "New title!";
      this.$refs.heading.style.color = "red";
      console.log(this.$refs.heading);
    },
  },
  watch: {
    counter5: function (val) {
      console.log("From watch object", val);
    },
  },
  beforeCreate: function () {
    console.log("Before Create");
    // ! Вызывается тогда, когда выполнилас иницилизация и Vue пытается создать новое приложение
  },
  created: function () {
    console.log("Created");
    // ! На этом этапе Vue приложение уже будет создано
  },
  beforeMount: function () {
    console.log("Before Mount");
    // ! Начало анализировать шаблон Vue и собирается вставить в скомпилированный шаблон непосредственно в DOM-дерево.
  },
  mounted: function () {
    console.log("Mounted");
    // ! После этого шаблон вставляется в элемент DOM-дерева
  },
  beforeUpdate() {
    console.log("Before Update");
    // ! Метод вызывается когда что то меняется что то в приложении
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy: function () {
    console.log("Before Destroy");
    // ! Метод реагирует на удаление элемента приложения
  },
  destroyed: function () {
    console.log("Destroyed");
  },
});

new Vue({
  el: "#app2",
  data: {
    title: "Hello from Vue 2!",
  },
  methods: {
    updateFirstTitle: function () {
      vue1.title = "Update from second app";

      setTimeout(function () {
        vue1.alertFast();
      }, 1000);
    },
  },
});

const vue = new Vue({
  data: {
    title: "Hello, I am Vue!",
  },
  template: `
    <div>
      <h3>{{ title }}</h3>
    </div>
  `,
});

vue.$mount("#app3");
