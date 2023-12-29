<template>
  <v-app-bar
    app
    elevate-on-scroll
    elevation="4"
    color="white">

    <v-app-bar-title>
      <h4>
        Namangan muhandislik-texnologiya instituti
      </h4>
    </v-app-bar-title>

    <v-spacer/>

<!--    <v-col lg="6" cols="12">
      <v-form class="mt-5">
        <v-text-field variant="outlined" rounded dense placeholder="Search..." append-inner-icon="mdi-magnify"/>
      </v-form>
    </v-col>-->

    <v-spacer/>

    <v-menu
      open-on-hover
      transition="fab-transition"
    >

      <template v-slot:activator="{ props }" >
        <v-btn
          color="primary"
          v-bind="props"
        >
          {{languages[2].language}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          style="cursor: pointer"
          v-for="(item, i) in languages"
          :key="i"
        >
          <v-list-item-title v-text="item.language"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="fab-transition"
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
        width="250"

      >
        <template v-slot:subtitle="{ subtitle }" >
          <div v-html="subtitle" ></div>
        </template>
      </v-list>
    </v-menu>

    <v-menu
      transition="fab-transition"
      open-on-hover>
      <template v-slot:activator="{ props }">
       <span v-bind="props" style="cursor: pointer" class="mr-10">
         <v-chip link>
           <v-badge dot bottom offset-x="1" offset-y="1" color="green" class="mt-1 me-1">
             <v-avatar size="30">
               <v-img src="https://randomuser.me/api/portraits/men/85.jpg" alt=""></v-img>
             </v-avatar>
           </v-badge>
           <span>
             Sharli Chin
           </span>
         </v-chip>
       </span>
      </template>

      <v-list width="250" class="py-0">
        <v-list-item
          class="ma-2"
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Sharli Chin"
          subtitle="john@google.com">

        </v-list-item>
        <v-divider/>
        <v-list-item v-for="(menu, i) in menus" :key="i" link>
          <template v-slot:prepend>
            <v-icon :icon="menu.icon"></v-icon>
          </template>
          <v-list-item-title v-text="menu.title"></v-list-item-title>
        </v-list-item>
      </v-list>

    </v-menu>

  </v-app-bar>
</template>

<script>
export default {

  data() {
    return{
      menus: [
        {title: 'Profile', icon: 'mdi-account'},
        { icon: 'mdi-cog', title: 'Settings'},
        { icon: 'mdi-logout', title: 'Logout'},
      ],
      items: [
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      languages:
        [
          {
            language: 'English'
          },
          {
            language: 'Russian'
          },
          {
            language: 'Uzbek'
          }
        ]
    }
  },
  methods: {
    drawer(){
      this.$emit('handDrawer')
    }
  }

}
</script>

<style scoped>

</style>
