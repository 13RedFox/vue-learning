<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
              type="text"
              v-model="title"
              name="title"
      >
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
  import uuid from 'uuid';

  export default {
    name: "AddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addToo() {
        const  newTodoObj = {
          id: uuid.v4 (),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodoObj);
        this.title = '';
      }
    }
  }
</script>

<style scoped>

</style>
