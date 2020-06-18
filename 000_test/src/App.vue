<template>
  <div id="app">
    <h1> UI Kit in Vue</h1>
    <vk-button @click="show = true">Open</vk-button>

    <vk-spinner></vk-spinner>
    <vk-spinner ratio="1.2"></vk-spinner>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
