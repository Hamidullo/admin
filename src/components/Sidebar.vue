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
      :title="name"
      nav>
      <template v-slot:prepend>
        <v-avatar >
          <v-img
            :src="avatar"
            alt="avatar">
          </v-img>
        </v-avatar>
      </template>

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
      drawer: true,
      rail: true,
      avatar: localStorage.getItem("user-avatar"),
      name: localStorage.getItem("user-name"),
      model: 1,
      menus: [
        {
          value: 1,
          title: 'STATISTIKA' ,
          action: this.openHomePage,
          icon: 'mdi-home',
          routeName: "Dashboard"
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
          icon: 'mdi-school',
          title: 'SIFAT(SALOHIYAT) KO‘RSATKICHI' ,
          action: this.openAcademicPage,
          routeName: "Academic"
        },
        {
          value: 4,
          icon: 'mdi-briefcase',
          title: 'O’QUV-USLUBIY ISHLAR' ,
          action: this.openWorkPage,
          routeName: "Textbook"
        },
        {
          value: 5,
          icon: 'mdi-brain',
          title: 'ILMIY ISHLAR' ,
          action: this.openBrainPage,
          routeName: "Brain"
        },
        {
          value: 6,
          icon: 'mdi-calculator',
          title: 'LOYIHALAR VA TIJORATLASHTIRISH' ,
          action: this.openProjectPage,
          routeName: "Projects"
        },
        {
          value: 7,
          icon: 'mdi-star-box-multiple',
          title: 'IXTIROCHILIK VA RATSIONALIZATORLIK' ,
          action: this.openInventionPage,
          routeName: "Invention"
        },
        {
          value: 8,
          icon: 'mdi-bag-suitcase',
          title: 'XALQARO XAMKORLIK MASALALARI' ,
          action: this.openInternationalPage,
          routeName: "International"
        },
        {
          value: 9,
          icon: 'mdi-human-male-board-poll',
          title: 'USTOZ-SHOGIRD TIZIMI' ,
          action: this.openTeacherPage,
          routeName: "Teacher"
        },
        {
          value: 10,
          icon: 'mdi-trophy',
          title: 'ERISHGAN YUTUQLARI' ,
          action: this.openAchievementPage,
          routeName: "Achievement"
        },
        {
          value: 11,
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
      this.$router.push({name: 'Dashboard'})
    },
    openAccountPage(){
      this.$router.push({name: 'About'})
    },
    openAcademicPage(){
      this.$router.push({name: 'Academic'})
    },
    openWorkPage(){
      this.$router.push({name: 'Textbook'})
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
