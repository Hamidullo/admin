<template>
  <v-app-bar
    app
    elevate-on-scroll
    elevation="4"
    color="white">

    <v-app-bar-title >
      <h4 >
        <v-btn @click="openDash"><strong>Namangan muhandislik-texnologiya instituti</strong></v-btn>
      </h4>
    </v-app-bar-title>

    <v-menu
      open-on-hover>
      <template v-slot:activator="{ props }">
       <span v-bind="props" class="mr-10">
         <v-chip link>
           <v-badge dot bottom offset-x="1" offset-y="1" color="green" class="mt-1 me-1">
             <v-avatar size="30">
               <v-img :src="avatar" alt="menu avatar"></v-img>
             </v-avatar>
           </v-badge>
           <span>
             {{name}}
           </span>
         </v-chip>
       </span>
      </template>

      <v-list width="250" class="py-0">
        <v-list-item
          class="ma-2"
          :title="name"
          :subtitle="position">
          <template v-slot:prepend>
            <v-avatar >
              <v-img
                :src="avatar"
                alt="avatar"
              ></v-img>
            </v-avatar>
          </template>
        </v-list-item>
        <v-divider/>
        <v-list-item v-for="(menu, i) in menus" :key="i" link>
          <template v-slot:prepend>
            <v-icon :icon="menu.icon"></v-icon>
          </template>
          <v-list-item-title v-text="menu.title" @click="drawer(menu.rout)"></v-list-item-title>
        </v-list-item>
      </v-list>

    </v-menu>

  </v-app-bar>
</template>

<script>

export default {
  data() {
    return{
      name: localStorage.getItem("user-name"),
      avatar: localStorage.getItem("user-avatar"),
      position: localStorage.getItem("user-position"),
      menus: [
        { icon: 'mdi-account', title: 'Profile',  rout: 'About'},
        { icon: 'mdi-cog', title: 'Settings', rout: 'Settings'},
        { icon: 'mdi-logout', title: 'Logout', rout: 'Login'},
      ]

    }
  },
  methods: {
    drawer(rout){
      if(rout !== 'logout'){
        localStorage.clear()
        this.$router.push({name: rout})
      } else {
        this.$router.push({name: rout})
      }
    },
    openDash(){
      this.$router.push({name: 'Dashboard'})
    }
  },

}
</script>

<style scoped>

</style>
