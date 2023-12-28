<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
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

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="BOSH OYNA" value="home" @click="this.$router.push({name: 'Dashboard'})"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="SHAXSIY MA’LUMOTLAR" value="account" @click="this.$router.push({name: 'About'})"></v-list-item>
      <v-list-item prepend-icon="mdi-briefcase" title="O’QUV-USLUBIY ISHLAR" value="works" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-brain" title="ILMIY ISHLAR" value="brain" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-calculator" title="LOYIHALAR VA TIJORATLASHTIRISH" value="projects" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-star-box-multiple" title="IXTIROCHILIK VA RATSIONALIZATORLIK" value="invention" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-bag-suitcase" title="XALQARO XAMKORLIK MASALALARI" value="international" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-human-male-board-poll" title="USTOZ-SHOGIRD TIZIMI" value="teacher" @click="this.$router.push({name: 'Users'})"></v-list-item>
      <v-list-item prepend-icon="mdi-trophy" title="ERISHGAN YUTUQLARI" value="achievement" @click="this.$router.push({name: 'Users'})"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return{
      drawer: true,
      rail: true
    }
  },
  methods: {
    closer(){
      console.log(this.drawer)
    }
  }
}

</script>

<style scoped>

</style>
