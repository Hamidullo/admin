<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Ixtiro">
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
        title="IxtirFoydali modellaro">
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
        title="Selektsiya yutuqlari">
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
        title="Sanoat namunalari">
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

    <v-row>
      <v-col>
        <v-card
        flat
        title="AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar">
        <template v-slot:text>
          <v-text-field
            v-model="searchA"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersA"
          :items="itemsA"
          :search="searchA"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="Mualliflik xuquqni ximoya qiluvchi guvoxnomalar">
        <template v-slot:text>
          <v-text-field
            v-model="searchG"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersG"
          :items="itemsG"
          :search="searchG"
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
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchM: '',
        headersM: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchY: '',
        headersY: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchN: '',
        headersN: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchA: '',
        headersA: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsA: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchG: '',
        headersG: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsG: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
      }
    },
    
  }
</script>

<style scoped>

</style>
