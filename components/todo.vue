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
            <button
              @click="editTask(task)"
              class="border p-2 rounded-md bg-blue-500 text-white"
            >
              Редактировать
            </button>
          </div>
        </li>
      </ul>
    </div>
    <VueFinalModal :isOpen="showModal" @close="showModal = false">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-4">Редактировать Задачу</h2>
        <form @submit.prevent="updateTask">
          <input
            v-model="editedTask.name"
            type="text"
            class="border p-2 rounded-md mb-4"
          />
          <button
            type="submit"
            class="border p-2 rounded-md bg-green-500 text-white"
          >
            Сохранить
          </button>
        </form>
      </div>
    </VueFinalModal>
  </div>
</template>
<script>
import { useTaskStore } from "../../store/store";
import { ref } from "vue";
import { useModal } from "vue-final-modal";
export default {
  setup() {
    const store = useTaskStore();
    const { showModal } = useModal();
    const editedTask = ref({ name: "" });
    const editTask = (task) => {
      editedTask.value = { ...task };
      showModal();
    };
    const updateTask = () => {
      store.updateTask(editedTask.value);
      showModal();
    };
    return { store };
  },
};
</script>
