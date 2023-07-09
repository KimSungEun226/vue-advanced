<template>
  <div>
    <div v-for="ask in asks" v-bind:key="ask.id">{{ask.title}}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index.js';
export default {
  data() {
    return {
      asks : []
    }
  },
  created() {
    var vm = this;
    fetchList('ask/1.json')
      .then(reponse => vm.asks = reponse.data)
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>
</style>