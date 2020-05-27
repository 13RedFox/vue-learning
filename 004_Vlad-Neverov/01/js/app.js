let app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue!',
    toggleClass: false
  },
  methods: {
    toggleFunc() {
      return {
        blue: this.toggleClass
      }
    }
  }
})