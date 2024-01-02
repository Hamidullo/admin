<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Darsliklar">
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="O’quv qo’llanmalar">
        <template v-slot:text>
          <v-text-field
            v-model="searchM"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersM"
          :items="itemsM"
          :search="searchM"
        ></v-data-table>
      </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Monografiyalar">
        <template v-slot:text>
          <v-text-field
            v-model="searchY"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersY"
          :items="itemsY"
          :search="searchY"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="Uslubiy ko’rsatma va majmualar">
        <template v-slot:text>
          <v-text-field
            v-model="searchN"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersN"
          :items="itemsN"
          :search="searchN"
        ></v-data-table>
      </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Guvoxnoma raqami' },
          { key: 'darslik', title: 'Darslik yuklanadi' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchM: '',
        headersM: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Guvoxnoma raqami' },
          { key: 'darslik', title: 'O’quv qo’llanma' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchY: '',
        headersY: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Grif raqami' },
          { key: 'darslik', title: 'monografiya yuklanadi' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchN: '',
        headersN: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Uslubiy kengash qarori raqami' },
          { key: 'darslik', title: 'monografiya yuklanadi' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
      }
    },
    
  }
</script>

<style scoped>

</style>
