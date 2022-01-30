<template>
    <div class="todo-item" v-bind:class="{'is-completed':todo.completed}">
        <p>
          <input type="checkbox" @change="markCompleted" />
          {{todo.title}}
          <button v-on:click="$emit('del-todo',todo.id)" class="del">x</button>
        </p>
      </div>
</template>

<script>
export default {
      name: "TodoItem",
      props: ["todo"],
      /*data() {
         return {
            todo: this.todo_prop
         }
      },*/
      methods: {
        markCompleted() {
          //this.todo.completed = true
          console.log(this.todo.title)
        },
      },
    };
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
}
.is-complete {
    text-decoration: line-through;
    background-color: #e0e418;
}
.del{
    background: #ff0000;
    color:#f4f4f4
}
</style>