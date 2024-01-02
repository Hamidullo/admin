<template>
  <v-container fill-height>

    <v-card>

      <v-row class="justify-center align-center bg-white mt-4">
        <v-col cols="12" sm="4" class="mb-6">
            Theme
        </v-col>
        <v-col cols="12" sm="4" >
          <v-list-item>
            <v-list-item-content
              ><v-list-item-title class="font-weight-bold ml-4">
                Dark Mode</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action class="ml-4"
              ><v-switch v-model="$vuetify.theme.dark" />
            </v-list-item-action>
          </v-list-item>
          <v-divider />
        </v-col>
      </v-row>
  
      <v-divider>
      </v-divider>
  
      <v-row class="justify-center align-center bg-white mt-4">
        <v-col cols="12" sm="4" class="mb-6">
            Language
        </v-col>
        <v-col cols="12" sm="4"  class="mb-4">
          <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-title="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
        </v-col>
      </v-row>

      <v-divider>
      </v-divider>

      <v-card
       class="mx-auto my-8"
       max-width="344"
       title="Change Paswword"
       prepend-icon="mdi-lock"
       append-icon="mdi-open-in-new"
       @click="changePassword"
       target="_blank"
       rel="noopener">
      </v-card>

      <v-divider>
      </v-divider>

      <v-card
       class="mx-auto my-8"
       max-width="344"
       title="Log out"
       prepend-icon="mdi-lock"
       append-icon="mdi-open-in-new"
       @click="logOut"
       target="_blank"
      rel="noopener">
    </v-card>

    </v-card>
</v-container>
</template>
  
  <script>
  export default {
    data() {
      return{
        select: { state: 'Uzbek', abbr: 'uzb' },
        items: [
          { state: 'Uzbek', abbr: 'uzb' },
          { state: 'Russion', abbr: 'rus' },
          { state: 'English', abbr: 'eng' },
        ],
      }
    },
    methods: {
      changePassword(){

      },
      logOut(){
        this.$router.push({name: 'Login'})
      }
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  