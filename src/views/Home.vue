<template>
  <div class="container">
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    AddTask,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      const res = await fetch(`${process.env.VUE_APP_URL_API}/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm(`Are you sure want to delete this task?`)) {
        const res = await fetch(`${process.env.VUE_APP_URL_API}/tasks/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          alert("Failed");
        }
      }
    },
    async toggleReminder(id) {
      const task = await this.fetchTask(id);
      const taskUpdated = { ...task, reminder: !task.reminder };
      const res = await fetch(`${process.env.VUE_APP_URL_API}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(taskUpdated),
      });
      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      console.log(`${process.env.VUE_APP_URL_API}/tasks`)
      const res = await fetch(`${process.env.VUE_APP_URL_API}/tasks`);
      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`${process.env.VUE_APP_URL_API}/tasks/${id}`);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
