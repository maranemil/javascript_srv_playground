<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome eeeee Vue.js App"/> -->


  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <!-- {{ msg }} -->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view/>
</template>

<script>
// eslint-disable-next-line no-use-before-define
import Header from './components/layout/Header.vue';
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Todos,
    AddTodo
    //HelloWorld
  },
  data() {
    return {
      //msg: 'Hellooooo'
      todos: [
        // {
        //    id:1,
        //    title: "Todo 1",
        //    completed: false
        // },
        // {
        //    id:2,
        //    title: "Todo 2",
        //    completed: true
        // }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
          .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
          .catch(err => console.log(err));
      //this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
          .then(res => this.todos = [...this.todos, res.data])
          .catch(err => console.log(err));
      //this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(res => this.todos = res.data)
        .catch(err => console.log(err));
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
