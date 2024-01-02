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
        <v-col cols="12" sm="4" >
          <v-select
          label="Select"
          :items="languages"
          variant="outlined"
        ></v-select>
        </v-col>
      </v-row>

    </v-card>

</v-container>
</template>
  
  <script>
  export default {
    data() {
      return{
        languages: [
          {
            text: "Uzbek",
            value: "1",
            selected: true,
          },
          {
            text: 'Russion',
            value: "2"
          },
          {
            text: 'English',
            value: "3"
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  