<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
      width="350"
    >
      <v-list-item
        class="ma-1"
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
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
            routeName: "About"
          },
          {
            value: 3,
            icon: 'mdi-briefcase',
            title: 'O’QUV-USLUBIY ISHLAR' ,
            action: this.openWorkPage,
            routeName: "Users"
          },
          {
            value: 4,
            icon: 'mdi-brain',
            title: 'ILMIY ISHLAR' ,
            action: this.openBrainPage,
            routeName: "Brain"
          },
          {
            value: 5,
            icon: 'mdi-calculator',
            title: 'LOYIHALAR VA TIJORATLASHTIRISH' ,
            action: this.openProjectPage,
            routeName: "Projects"
          },
          {
            value: 6,
            icon: 'mdi-star-box-multiple',
            title: 'IXTIROCHILIK VA RATSIONALIZATORLIK' ,
            action: this.openInventionPage,
            routeName: "Invention"
          },
          {
            value: 7,
            icon: 'mdi-bag-suitcase',
            title: 'XALQARO XAMKORLIK MASALALARI' ,
            action: this.openInternationalPage,
            routeName: "International"
          },
          {
            value: 8,
            icon: 'mdi-human-male-board-poll',
            title: 'USTOZ-SHOGIRD TIZIMI' ,
            action: this.openTeacherPage,
            routeName: "Teacher"
          },
          {
            value: 9,
            icon: 'mdi-trophy',
            title: 'ERISHGAN YUTUQLARI' ,
            action: this.openAchievementPage,
            routeName: "Achievement"
          },
          {
            value: 10,
            icon: 'mdi-cog',
            title: 'SOZLAMALAR' ,
            action: this.openSettingsPage,
            routeName: "Settings"
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
        this.$router.push({name: 'About'})
      },
      openWorkPage(){
        this.$router.push({name: 'Users'})
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
      openSettingsPage(){
        this.$router.push({name: 'Settings'})
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
  