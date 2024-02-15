<template>
  <AdminSidebar/>
  <AdminHeader/>
  <v-app>
    <v-main class="bg-grey-lighten-2">
      <v-layout style="z-index: 0;">
        <router-view />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
  import AdminSidebar from "@/components/AdminSidebar.vue";
export default {
  components: {AdminSidebar,AdminHeader},
  async mounted() {
    let user = localStorage.getItem("user-logged")
    let userData = localStorage.getItem("user-admin")
    if (!user){
      await this.$router.push({name: "Login"})
    } else if(!userData){
      await this.$router.push({name: "Dashboard"})
    } else {
      await this.$router.push({name: "AdminDash"})
    }
  }
}
</script>

<style scoped>

</style>
