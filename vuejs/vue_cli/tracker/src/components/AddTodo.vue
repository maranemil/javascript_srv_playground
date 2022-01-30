<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add todo ...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>

<script>
// import { uuid } from 'uuid';
// const { v1: uuidv1 } = require('uuid');

export default {
    name: "AppTodo",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                id: 1212121, //uuid.v4(),
                title: this.title,
                completed: false
            }
            this.$emit('add-todo',newTodo);
            this.title='';
        }
    }
}
</script>

<style scoped>

</style>