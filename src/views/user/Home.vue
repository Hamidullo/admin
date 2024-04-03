<template>
  <Sidebar />
  <Header />
  <v-app id="inspire" >
    <v-main class="bg-grey-lighten-2 back" >
      <v-layout >
        <router-view />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import fon from "@/assets/fon.png"
export default {
  components: {Sidebar,Header},
  data: () => ({
    drawer: true,

  }),
  methods: {
    draw() {
      this.drawer = !this.drawer,
        fon
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-logged")
    let userData = localStorage.getItem("user-role")

    if (!user){
      await this.$router.push({name: "Login"})
    } else {
      if(userData === "0"){
        await this.$router.push({name: "Dashboard"})
      } else {
        await this.$router.push({name: "AdminDash"})
      }
    }
  }
}
</script>

<style>
.back {
  background: url("https://images.inc.com/uploaded_files/image/1920x1080/getty_820889114_396686.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>
