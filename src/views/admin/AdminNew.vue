<template>
  <v-container  >
    <v-card rounded="5" class="pt-10 pl-10 pb-10 pr-10">
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
      </v-row>
      <!-- data -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="First Name"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Last Name"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Username"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Email"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-email">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Address"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-map-marker">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Phone Number"
            readonly
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
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-send">

          </v-text-field>
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
