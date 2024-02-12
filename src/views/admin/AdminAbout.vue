<template>
  <v-container  class="bg-grey-lighten-2"  justify="center" fluid>
    <v-card rounded="5" class="pt-10 pl-10 pb-10 pr-10">
      <!-- alert -->
      <v-row v-if="snack === 1">
        <v-alert text type="success" border="left" width="100%" dismissible >
          Thank you, <strong>{{ name }}</strong> Your Profile was updated successfully !
        </v-alert>
      </v-row>
      <!-- avatar -->
      <v-row class="justify-center pb-5">
        <v-avatar size="270px">
          <img src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" />
        </v-avatar>
      </v-row>
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
      </v-row>
      <!-- data -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="First Name"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Last Name"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Username"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Email"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-email">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Address"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-map-marker">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Phone Number"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-phone">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-select
            readonly
            label="Role"
            :items="['User', 'Admin', 'Super-Admin']">

          </v-select>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Telegram"
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-send">

          </v-text-field>
        </v-col>
        <v-col>
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
          ></v-file-input>
        </v-col>
      </v-row>
      <!-- Buttons -->
      <v-row>
        <v-col cols="12" md="6">
          <v-btn
            color="secondary"
            text
            block
            tile
            elevation="0"
            class="pa-6 font-weight-bold">
            Cancel
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            color="info"
            class="pa-6 font-weight-bold"
            block
            tile
            elevation="0">
            Update
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data (){
    return{
      name: "Name",
      snack: 0,
      rules: [
        value => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        },
      ],
    }
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

</style>
