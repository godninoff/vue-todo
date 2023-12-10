import { defineStore } from "pinia";

export const useTaskStore = defineStore("todo", {
  state: () => ({ tasks: [] }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    add(newTask) {
      if (newTask !== "") {
        const todo = {
          name: newTask,
          checkbox: false,
          id: Math.random().toString(21).slice(-5),
        };
        this.addTask(todo);
      }
    },
  },
  persist: true,
});
