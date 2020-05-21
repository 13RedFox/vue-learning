"use strict";

new Vue({
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
    title: "Счетчик 3",
    x: 0,
    y: 0,
    inputValue: "Initial value",
    isActive: false,
    color: "blue",
    color2: "blue",
    height: 100,
    type: 'a',
    isVisible: true,
    isVisible2: true,
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
  },
});
