<template>
  <div @dblclick="$emit('toggle-reminder')" :class="['bg-gray-100 px-4 py-2 mb-1 mx-2 border-l-4 cursor-pointer', task.reminder ? 'border-green-500' : 'border-gray-300']">
    <FAIcon icon="times" @click="$emit('delete-task', task.id)" class="flex float-right text-red-500 hover:text-red-600"/>
    <h3>{{ task.text }}</h3>
    <p class="text-gray-500 text-xs">{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
