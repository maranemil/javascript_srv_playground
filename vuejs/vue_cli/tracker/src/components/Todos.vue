<template>
    <div>
        <h1>Todos</h1>
    </div>
    <div v-for="todo in todos" v-bind:key="todo.id">
        <!-- <h4 >{{todo.title}}</h4> -->
        <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: { TodoItem },
    props: ["todos"]
}

// import { defineComponent } from '@vue/composition-api'
// export default defineComponent({
//     setup() {       
//     }
// })
</script>

<style scoped>

</style>
