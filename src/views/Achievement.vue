<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Davlat mukofotlari">
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
        <v-card flat
        title="Diplomlar">
        <v-data-table
          :custom-filter="filterOnlyCapsText"
          :headers="headersD"
          :items="itemsD"
          :search="searchD"
          item-value="name">
        <template v-slot:top>
          <v-text-field
            v-model="searchD"
            label="Qidiruv.."
            class="px-3 pb-4"
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details>
          </v-text-field>
        </template>
      </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row>

      <v-col>
        <v-card
        flat
        title="Sertifikatlar">
        <template v-slot:text>
          <v-text-field
            v-model="searchS"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
    
        <v-data-table
          :headers="headersS"
          :items="itemsS"
          :search="searchS"
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
            title: 'Davlat mukofotlari',
          },
          { key: 'turi', title: 'Turi' },
          { key: 'yili', title: 'Berilgan yili' },
          { key: 'seriya', title: 'Seriya raqami' },
          { key: 'sertifikat', title: 'Sertifikat yuklanadi' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            turi: 159,
            yili: 6.0,
            seriya: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            turi: 159,
            yili: 6.0,
            seriya: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Eclair',
            turi: 159,
            yili: 6.0,
            seriya: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Cupcake',
            turi: 159,
            yili: 6.0,
            seriya: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Gingerbread',
            turi: 159,
            yili: 6.0,
            seriya: 24,
            sertifikat: 4.0,
          },
        ],
        searchD: '',
        headersD: [
        {
          title: 'Diplom',
          align: 'start',
          key: 'name',
        },
        {
          title: 'Turi',
          align: 'start',
          key: 'turi',
        },
        {
          title: 'Maqsadi',
          align: 'start',
          key: 'maqsadi',
        },
        {
          title: 'Berilgan yili',
          align: 'start',
          key: 'yili',
        },
        {
          title: 'Diplom yuklanadi',
          align: 'start',
          key: 'diplom',
        },
        ],
        itemsD: [
        {
          name: 'Intel Core i9-11900K',
          turi: 8,
          maqsadi: 16,
          yili: '3.5 GHz',
          yili: '5.3 GHz',
          diplom: '125W',
        },
        {
          name: 'AMD Ryzen 9 5950X',
          turi: 8,
          maqsadi: 16,
          yili: '3.5 GHz',
          yili: '5.3 GHz',
          diplom: '125W',
        },
        {
          name: 'Intel Core i7-10700K',
          turi: 8,
          maqsadi: 16,
          yili: '3.5 GHz',
          yili: '5.3 GHz',
          diplom: '125W',
        },
        {
          name: 'AMD Ryzen 5 5600X',
          turi: 8,
          maqsadi: 16,
          yili: '3.5 GHz',
          yili: '5.3 GHz',
          diplom: '125W',
        },
        {
          name: 'Intel Core i5-10600K',
          turi: 8,
          maqsadi: 16,
          yili: '3.5 GHz',
          yili: '5.3 GHz',
          diplom: '125W',
        },
        ],
        searchS: '',
        headersS: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Sertifikat',
          },
          { key: 'turi', title: 'Turi' },
          { key: 'yili', title: 'Berilgan yili' },
          { key: 'maqsadi', title: 'Maqsadi' },
          { key: 'sertifikat', title: 'Sertifikat yuklanadi' },
        ],
        itemsS: [
          {
            name: 'Frozen Yogurt',
            turi: 159,
            yili: 6.0,
            maqsadi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            turi: 159,
            yili: 6.0,
            maqsadi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Eclair',
            turi: 159,
            yili: 6.0,
            maqsadi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Cupcake',
            turi: 159,
            yili: 6.0,
            maqsadi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Gingerbread',
            turi: 159,
            yili: 6.0,
            maqsadi: 24,
            sertifikat: 4.0,
          },
        ],
      }
    },
    methods: {
      filterOnlyCapsText (value, query, item) {
        return value != null &&
          query != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(query) !== -1
      },
    },
  }
</script>

<style scoped>

</style>
