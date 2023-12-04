import { defineStore } from "pinia";

export const useTaskStore = defineStore("todo", {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  persist: {
    enabled: true,
  },
});
