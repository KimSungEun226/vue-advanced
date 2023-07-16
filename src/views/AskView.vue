<template>
  <div>
    <p v-for="ask in fetchedAsks" v-bind:key="ask.id"> 
      <a :href="ask.url"> {{ ask.title }} </a>
      <small> {{ask.time_ago}} , {{ask.domain}} </small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed : {
    ...mapGetters({
      fetchedAsks : 'fetchedAsks'
    })
    // ...mapState({
    //   asks : state => state.asks
    // })
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style scoped>
</style>