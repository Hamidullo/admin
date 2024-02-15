<template>
  <Sidebar />
  <Header />
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-2">
      <v-layout>
        <router-view />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {Sidebar,Header},
  data: () => ({
    drawer: true,

  }),
  methods: {
    draw() {
      this.drawer = !this.drawer
    },
  },
  mounted() {
    let user = localStorage.getItem("user-logged")

    if (!user){
      this.$router.push({name: "Login"})
    }
  }
}
</script>
