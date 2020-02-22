<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      newTodo: '',
      todos: [
        {
          'id': 1,
          'title': "Finish Vue Screencast",
          'category': "Coding",
          'completed': false
        },
        {
          'id': 2,
          'title': "Eat Candy",
          'category': "Candy",
          'completed': false
        }
      ]
    }
  },
  methods: {
    addTodo(){
        alert('adding')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .todo-input{
        width: 100%;
        padding: 10px 18px;
        font-size:18px;
        margin-bottom: 16px;
    }

    .todo-input:focus{
        outline:0;
    }
</style>
