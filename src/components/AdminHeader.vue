<template>
    <v-app-bar
      app
      elevate-on-scroll
      elevation="4"
      color="white">

      <v-app-bar-title >
        <h4 >
          <v-btn @click="openDashAdmin"><strong>Namangan muhandislik-texnologiya instituti</strong></v-btn>
        </h4>
      </v-app-bar-title>

      <!-- <v-spacer/>

      <v-spacer/>  -->

      <v-menu
        open-on-hover>
        <template v-slot:activator="{ props }">
         <span v-bind="props" style="cursor: pointer" class="mx-5 mr-10">
            <v-badge offset-x="1" offset-y="1" color="red" content="5">
            <v-icon>
              mdi-bell
            </v-icon>
          </v-badge>
         </span>
        </template>

        <v-list
          :items="items"
          item-props
          lines="three"
          width="250">
          <template v-slot:subtitle="{ subtitle }" >
            <div v-html="subtitle" ></div>
          </template>
        </v-list>
      </v-menu>

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
            :prepend-avatar="avatar"
            :title="name"
            :subtitle="position">

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
          { icon: 'mdi-account',title: 'Profile', rout: 'AdminAbout'},
          { icon: 'mdi-cog', title: 'Settings', rout: 'AdminSettings'},
          { icon: 'mdi-logout', title: 'Logout', rout: 'Login'},
        ],
        items: [],

      }
    },
    methods: {
      drawer(rout){
        if(rout === 'Login'){
          localStorage.clear()
          this.$router.push({name: rout})
        } else {
          this.$router.push({name: rout})
        }

      },
      openDashAdmin(){
        this.$router.push({name: 'AdminDash'})
      }
    }

  }
  </script>

  <style scoped>

  </style>
