<template>
  <v-container  class="bg-grey-lighten-2" align="center" justify="center" fluid>
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
            label="Role"
            readonly
            clearable
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

    <!-- data -->
    <v-row class="mt-2" >
      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="O’QUV - USLUBIY ISHLAR">
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="ILMIY ISHLAR">
          <template v-slot:text>
            <v-text-field
              v-model="searchI"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersI"
            :items="dessertsI"
            :search="searchI">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-2" >
      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="LOYIHALAR VA TIJORATLASHTIRISH">
          <template v-slot:text>
            <v-text-field
              v-model="searchL"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersL"
            :items="dessertsL"
            :search="searchL">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="IXTIROCHILIK VA RATSIONALIZATORLIK">
          <template v-slot:text>
            <v-text-field
              v-model="searchIX"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersIX"
            :items="dessertsIX"
            :search="searchIX">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-2" >
      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="XALQARO XAMKORLIK MASALALARI">
          <template v-slot:text>
            <v-text-field
              v-model="searchX"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersX"
            :items="dessertsX"
            :search="searchX">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card
          flat
          align="center"
          title="USTOZ-SHOGIRD TIZIMI">
          <template v-slot:text>
            <v-text-field
              v-model="searchU"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersU"
            :items="dessertsU"
            :search="searchU">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          flat
          align="center"
          title="ERISHGAN YUTUQLARI">
          <template v-slot:text>
            <v-text-field
              v-model="searchE"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersE"
            :items="dessertsE"
            :search="searchE">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="large"
                @click="openItem(item)">
                mdi-open-in-new
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data (){
    return{
      name: "F.I.SH",
      snack: 0,

      search: '',
      headers: [
        { align: 'start', key: 'name', sortable: false, title: 'Nomi' },
        { key: 'type',align: 'center', title: 'Turi' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
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
        }
      ],

      searchI: '',
      headersI: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsI: [
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
        }
      ],

      searchL: '',
      headersL: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsL: [
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
        }
      ],

      searchIX: '',
      headersIX: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsIX: [
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
        }
      ],

      searchX: '',
      headersX: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsX: [
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
        }
      ],

      searchU: '',
      headersU: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsU: [
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
        }
      ],

      searchE: '',
      headersE: [
        { align: 'start', key: 'name', sortable: false, title: 'Dessert (100g serving)' },
        { key: 'calories',align: 'center', title: 'Calories' },
        { key: 'fat',align: 'center', title: 'Fat (g)' },
        { key: 'carbs',align: 'center', title: 'Carbs (g)' },
        { key: 'protein',align: 'center', title: 'Protein (g)' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      dessertsE: [
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
        }
      ],
    }
  },
  methods: {
    openItem (item) {
      const id = item.fat;
      this.$router.push({path: `/admin/item/${id}` })
    },
  }
};
</script>

<style scoped>
</style>
