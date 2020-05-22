<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name" />
    <textarea v-model="textarea"></textarea>
    <br />
    <br />
    <hr />
    <p>{{ name }}</p>
    <p>{{ textarea }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Initial state",
      textarea: "I am initial text"
    };
  }
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

textarea {
  width: 400px;
  height: 100px;
}

p {
  white-space: pre;
}
</style>
