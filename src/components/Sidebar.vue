<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :rail="rail"
    permanent
    image="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE1LWJnLTExZC14LmpwZw.jpg"
    @click="rail = false"
    class="border-0"
    width="350">
    <v-list-item
      class="ma-1 text-white"
      :title="name"
      nav>
      <template v-slot:prepend>
        <v-avatar >
          <v-img
            cover
            :src="avatar"
            alt="avatar">
          </v-img>
        </v-avatar>
      </template>

      <template v-slot:append>
        <v-btn
          color="white"
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
            :active-color="item.color"
            class="text-white"
            >
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
      avatar: "http://172.16.10.5:3002/uploads/photos/" + localStorage.getItem("user-avatar"),
      name: localStorage.getItem("user-name"),
      model: 1,
      menus: [
        {
          value: 1,
          title: 'STATISTIKA' ,
          action: this.openHomePage,
          icon: 'mdi-home',
          routeName: "Dashboard",
          color: 'blue-lighten-1\n'
        },
        {
          value: 2,
          icon: 'mdi-account',
          title: 'SHAXSIY MA’LUMOTLAR' ,
          action: this.openAccountPage,
          routeName: "About",
          color: 'teal-lighten-1'
        },
        {
          value: 3,
          icon: 'mdi-school',
          title: 'SIFAT(SALOHIYAT) KO‘RSATKICHI' ,
          action: this.openAcademicPage,
          routeName: "Academic",
          color: 'blue-grey-darken-1'
        },
        {
          value: 4,
          icon: 'mdi-briefcase',
          title: 'O’QUV-USLUBIY ISHLAR' ,
          action: this.openWorkPage,
          routeName: "Textbook",
          color: 'green-darken-3'
        },
        {
          value: 5,
          icon: 'mdi-brain',
          title: 'ILMIY ISHLAR' ,
          action: this.openBrainPage,
          routeName: "Brain",
          color: 'light-blue-darken-2'
        },
        {
          value: 6,
          icon: 'mdi-calculator',
          title: 'LOYIHALAR VA TIJORATLASHTIRISH' ,
          action: this.openProjectPage,
          routeName: "Projects",
          color: 'orange-darken-2'
        },
        {
          value: 7,
          icon: 'mdi-star-box-multiple',
          title: 'IXTIROCHILIK VA RATSIONALIZATORLIK' ,
          action: this.openInventionPage,
          routeName: "Invention",
          color: 'indigo-darken-1'
        },
        {
          value: 8,
          icon: 'mdi-bag-suitcase',
          title: 'XALQARO XAMKORLIK MASALALARI' ,
          action: this.openInternationalPage,
          routeName: "International",
          color: 'blue-darken-1'
        },
        {
          value: 9,
          icon: 'mdi-human-male-board-poll',
          title: 'USTOZ-SHOGIRD TIZIMI' ,
          action: this.openTeacherPage,
          routeName: "Teacher",
          color: 'deep-purple-lighten-1'
        },
        {
          value: 10,
          icon: 'mdi-cog',
          title: 'SOZLAMALAR' ,
          action: this.openSettingsPage,
          routeName: "Settings",
          color: 'blue-grey-darken-1'
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

</style>
