<template>
  <div>
    <h1>Car № {{ id }}</h1>

    <button class="btn btn-dark mr-1" @click="goBackToCars">Back</button>
    <router-link
      class="btn btn-info"
      tag="button"
      :to="{name: 'carFull', params: {id:id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
    >Full info</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.currentRoute.params['id'],
      id: this.$route.params["id"]
    };
  },
  methods: {
    goBackToCars() {
      this.$router.push("/cars");
    }
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    if (window.confirm("Are you sure you want to leave?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>