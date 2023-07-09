<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job.id">{{ job.title}}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index.js';
export default {
  data() {
    return {
      jobs : []
    }
  },
  created() {
    fetchList('jobs/1.json')
      .then(reponse => this.jobs = reponse.data)
      .catch();
  }
}
</script>

<style>

</style>