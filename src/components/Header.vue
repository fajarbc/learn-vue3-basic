<template>
  <header class="rounded bordered flex p-4 mb-2">
    <h1 class="flex-1 text-3xl">{{ title }}</h1>
    <div class="flex-1">
    <Button
      v-show="showButton"
      @btn-click="$emit('toggle-add-task')" 
      :text="showAddTask ? 'Close' : 'Add Task'"
      :icon="showAddTask ? 'times' : 'plus'"
      :class="[showAddTask ? 'bg-red-500' : 'bg-green-500', 'text-white float-right']" />
    </div>
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button
  },
  computed: {
    showButton() {
      return this.$route.path === '/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #fefefe;
}
</style>
