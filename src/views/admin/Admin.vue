<template>
  <AdminSidebar/>
  <AdminHeader/>
  <v-app>
    <v-main class="bg-grey-lighten-2">
      <v-layout>
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
      
  }
</script>

<style scoped>

</style>