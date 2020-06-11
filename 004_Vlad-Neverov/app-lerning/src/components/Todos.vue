<template>
  <div>
    <h2>Мой список задач</h2>
    <ul>
      <li
              v-for="todo in todos"
              :key="todo.id">
        <Todo :todo="todo"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import Todo from "./Todo";

  export default {
    name: "Todos",
    components: {
      Todo
    },
    props: ['todos']

  }
</script>

<style scoped>

</style>
