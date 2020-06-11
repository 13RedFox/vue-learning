new Vue({
  el: '#app',
  data: {
    courses: [],
    errored: false
  },
  mounted() {
    axios
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(response => this.courses = response.data)
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
})
