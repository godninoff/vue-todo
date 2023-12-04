<template>
  <form class="mb-5 flex flex-col" @submit.prevent="add">
    <input
      class="mb-4 border-2 border-gray-200 rounded-md p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Введите задачу..."
      v-model="newTask"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Добавить задачу
    </button>
  </form>
</template>

<script>
import { useTaskStore } from "../../store/store";
import { pinia } from "../store/piniaSetup";

export default {
  setup() {
    const store = useTaskStore(pinia);

    return {
      store,
      newTask: "",
    };
  },
  methods: {
    add() {
      if (this.newTask !== "") {
        const todo = {
          name: this.newTask,
          checkbox: false,
          id: Math.random().toString(21).slice(-5),
        };
        this.store.addTask(todo);
        this.newTask = "";
      }
    },
  },
};
</script>
