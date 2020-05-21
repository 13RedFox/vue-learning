<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-counter :counter="counter"></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    ></app-car>
  </div>
</template>

<script>
import Car from "./components/Car";
import Counter from "./components/Counter";

export default {
  data() {
    return {
      carName: "Ford",
      carYear: 2018,
      counter: 0
    };
  },
  methods: {
    changeNameToAudi() {
      this.carName = "Audi";
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
};
</script>

<style>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
