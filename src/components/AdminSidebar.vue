<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      width="350">
      <v-list-item
        class="ma-1"
        :prepend-avatar="avatar"
        :title="name"
        nav>
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail">

          </v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav >
        <v-list-item
              v-for="(item, i) in menus"
              :key="i"
              :value="item.value"
              @click="item.action"
              :active="item.routeName === $route.name"
              color="primary">
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </template>

  <script>

  export default {

    data() {
      return{
        name: localStorage.getItem("user-name"),
        avatar: localStorage.getItem("user-avatar"),
        drawer: true,
        rail: true,
        model: 1,
        menus: [
          {
            value: 1,
            title: 'STATISTIKA' ,
            action: this.openHomePage,
            icon: 'mdi-home',
            routeName: "AdminDash"
          },
          {
            value: 2,
            icon: 'mdi-account',
            title: 'SHAXSIY MA’LUMOTLAR' ,
            action: this.openAccountPage,
            routeName: "AdminAbout"
          },
          {
            value: 3,
            icon: 'mdi-bell',
            title: 'YANGI QO’SHILGAN HUJATLAR' ,
            action: this.openAdminNewsPage,
            routeName: "AdminNews"
          },
          {
            value: 4,
            icon: 'mdi-account-multiple-plus',
            title: 'FOYDALANUVCHILAR' ,
            action: this.openAdminUsersPage,
            routeName: "AdminUsers"
          },
          {
            value: 5,
            icon: 'mdi-cog',
            title: 'SOZLAMALAR' ,
            action: this.openSettingsPage,
            routeName: "AdminSettings"
          },
        ],
      }
    },
    methods: {
      closer(){
        console.log(this.drawer)
      },
      openHomePage(){
        this.$router.push({name: 'AdminDash'})
      },
      openAccountPage(){
        this.$router.push({name: 'AdminAbout'})
      },
      openAdminNewsPage(){
        this.$router.push({name: 'AdminNews'})
      },
      openBrainPage(){
        this.$router.push({name: 'Brain'})
      },
      openProjectPage(){
        this.$router.push({name: 'Projects'})
      },
      openInventionPage(){
        this.$router.push({name: 'Invention'})
      },
      openInternationalPage(){
        this.$router.push({name: 'International'})
      },
      openTeacherPage(){
        this.$router.push({name: 'Teacher'})
      },
      openAchievementPage(){
        this.$router.push({name: 'Achievement'})
      },
      openAdminUsersPage(){
        this.$router.push({name: 'AdminUsers'})
      },
      openSettingsPage(){
        this.$router.push({name: 'AdminSettings'})
      },

    }
  }

  </script>

  <style scoped>
  .bg-active {
    background-color: black;
    color : white !important;
  }
  </style>
