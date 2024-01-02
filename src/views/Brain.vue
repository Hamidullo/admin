<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="“Scopus” bazalaridagi maqolalar">
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
        title="“Web of sciense” bazalaridagi maqolalar">
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
        title="Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)">
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
        title="Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi)">
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
        title="Xalqaro miqyosdagi anjumanlar">
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
        title="Respublika miqyosidagi anjumanlar">
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
            title: 'Nomi',
          },
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
        searchA: '',
        headersA: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'raqami', title: 'Nashr etilgan anjuman  nomi' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan sana' },
          { key: 'jurnal', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsA: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
        searchG: '',
        headersG: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'raqami', title: 'Nashr etilgan anjuman  nomi' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan sana' },
          { key: 'jurnal', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsG: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
      }
    },
    
  }
</script>

<style scoped>

</style>
