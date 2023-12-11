<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <taskForm @add="store.addTask" />
    <div>
      <ul>
        <li v-for="(task, index) in store.tasks" :key="index">
          <div
            class="flex justify-between items-center mb-4 p-4 border border-gray-400 rounded-md"
          >
            <p>{{ task.name }}</p>
            <button
              @click="store.removeTask(index)"
              class="border p-2 rounded-md bg-red-500 text-white"
            >
              Удалить
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../../store/store";

export default {
  setup() {
    const store = useTaskStore();

    return {
      store,
    };
  },
};
</script>
