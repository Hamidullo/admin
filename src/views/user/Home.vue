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
    async loadData() {
        let user = localStorage.getItem("user-info")
        if (!user){
          //this.name = JSON.parse(user).name
          await this.$router.push({name: "Login"})
        }

        //let result = await axios.get("http://localhost:3000/restaurants");
        //this.restaurants = result.data
      }
  },
  async mounted() {
    //await this.loadData()
  }
}
</script>
