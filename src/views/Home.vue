<template>
  <v-app id="inspire">

    <Sidebar />
    <Header />
    <v-main class="bg-grey-lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {Sidebar,Header},
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,

  }),
  methods: {
    draw() {
      this.drawer = !this.drawer
    }
  }
}
</script>
