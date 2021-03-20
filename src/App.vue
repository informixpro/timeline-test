<template>
  <div id="app" class="font-sans h-screen antialiased">
    <TimeLine/>
  </div>
</template>

<script>
import TimeLine from './components/TimeLine.vue'

export default {
  name: 'app',
  components: {
    TimeLine
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
}
</style>
