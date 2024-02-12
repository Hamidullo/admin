<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>
    <v-card rounded="5" class="pt-10 pl-10 pb-10 pr-10">
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
      </v-row>
      <!-- info -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="F.I.SH"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Hujjat nomi"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-file-document">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Mualliflar soni"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account-group">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Ham mualliflar"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account-multiple-check">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Nashr etilgan yil"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-calendar-multiple-check">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Guvohnoma raqami"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-numeric">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-select
            readonly
            prepend-inner-icon="mdi-file-arrow-up-down"
            label="Hujjat holati"
            :items="['Rad etilgan', 'Tasdiqlangan']">
          </v-select>
        </v-col>
        <v-col  cols="6">
          <v-btn size="x-large" rounded="sm" block class="bg-grey-lighten-4" prepend-icon="mdi-download-circle">Hujjatni yuklash</v-btn>

        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>
export default {
  data (){
    return{
      name: "Hujjat Turi",
      snack: 0,
    }
  }
}
</script>

<style scoped>

</style>
