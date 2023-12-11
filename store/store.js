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
    updateTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index >= 0) {
        this.tasks.splice(index, 1, task);
      }
    },
  },
  persist: true,
});
