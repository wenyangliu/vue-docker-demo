<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>{{ $route.params.username }}</p>
    </div>
</template>

<script>
  export default {
    name: 'hi1',
    data () {
      return {
        msg: 'Welcome to Hi-1 page!'
      }
    }
  }
</script>


<style scoped>

</style>
