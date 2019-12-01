<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Who is home?
      </h1>
      
      <ul class="people">
        <div v-if="loading">Loading...</div>
        <li v-for="resident in residents"
            v-bind:class="{
              home: resident.active,
              out: !resident.active
            }"
        >
          <h3>{{ resident.name }}</h3>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo,
  },

  data: () => ({
    residents: [],
    loading: true
  }),

  mounted() {
    this.loadResidents();
  },

  methods: {
    loadResidents() {
      this.loading = true;
      this.$store.dispatch('GET_RESIDENTS')
        .then((residents) => {
          console.log(residents)
          this.loading = false;
          this.residents = residents;
        })
        .catch(console.log)
    }
  }
}
</script>

<style>

.people {
  display: flex;
  justify-content: space-evenly;
}

.people li {
  background: #ccc;
  padding: 20px 40px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.people li.home {
  background: #11a54c;
}

.people li.out {
  background: #e81f27;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
