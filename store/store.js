import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
  persist: {
    tasks: true,
  },
});
