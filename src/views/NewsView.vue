<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id"> {{user.title}}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index.js';
export default {
  data() {
    return {
      users: []
  }
  },
  created() {
    var vm = this;
    fetchList('news/1.json')
      .then(response => vm.users = response.data)
      .catch()
  },
}
</script>

<style>

</style>