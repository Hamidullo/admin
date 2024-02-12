<template>
  <v-container  class="bg-grey-lighten-2" align="center" justify="center" fluid>
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
      name: "Hujjat turi",
      snack: 0,
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Dessert (100g serving)',
        },
        { key: 'calories', title: 'Calories' },
        { key: 'fat', title: 'Fat (g)' },
        { key: 'carbs', title: 'Carbs (g)' },
        { key: 'protein', title: 'Protein (g)' },
        { key: 'iron', title: 'Iron (%)' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    }
  }
};
</script>

<style>

</style>
