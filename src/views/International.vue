<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>

      <v-col>
        <v-card
        flat
        title="Top – 1000-da o’quv mashg’ulotlari olib borish">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogS"
              persistent
              width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Top – 1000-da o’quv mashg’ulotlari qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Xorijiy OTM yoki ITM nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Mashg’ulot olib borilgan kunlar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Mashg’ulot xajmi"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Sertifikat yuklanadi"
                          required>
                      </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogS = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogS = false">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- Dialog end -->
        </template>
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
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card flat
        title="Stajirovka va malaka oshirish">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogA"
              persistent
              width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Stajirovka va malaka oshirish qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Xorijiy OTM yoki ITM nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Stajirovka va malaka oshirilgan kunlar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Stajirovka xajmi"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Sertifikat yuklanadi"
                          required>
                      </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogA = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogA = false">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- Dialog end -->
        </template>
        <v-data-table
          :custom-filter="filterOnlyCapsText"
          :headers="headersC"
          :items="itemsC"
          :search="searchC"
          item-value="name">
        <template v-slot:top>
          <v-text-field
            v-model="searchC"
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
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        dialogS: false,
        dialogA: false,
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Xorijiy OTM yoki ITM nomi',
          },
          { key: 'davlati', title: 'Davlati' },
          { key: 'kunlar', title: 'Mashg’ulot olib borilgan kunlar' },
          { key: 'hajmi', title: 'Mashg’ulot xajmi' },
          { key: 'sertifikat', title: 'Sertifikat yuklanadi' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            davlati: 159,
            kunlar: 6.0,
            hajmi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            davlati: 237,
            kunlar: 9.0,
            hajmi: 37,
            sertifikat: 4.3,
          },
          {
            name: 'Eclair',
            davlati: 262,
            kunlar: 16.0,
            hajmi: 23,
            sertifikat: 6.0,
          },
          {
            name: 'Cupcake',
            davlati: 305,
            kunlar: 3.7,
            hajmi: 67,
            sertifikat: 4.3,
          },
          {
            name: 'Gingerbread',
            davlati: 356,
            kunlar: 16.0,
            hajmi: 49,
            sertifikat: 3.9,
          },
          {
            name: 'Jelly bean',
            davlati: 375,
            kunlar: 0.0,
            hajmi: 94,
            sertifikat: 0.0,
          },
          {
            name: 'Lollipop',
            davlati: 392,
            kunlar: 0.2,
            hajmi: 98,
            sertifikat: 0,
          },
          {
            name: 'Honeycomb',
            davlati: 408,
            kunlar: 3.2,
            hajmi: 87,
            sertifikat: 6.5,
          },
          {
            name: 'Donut',
            davlati: 452,
            kunlar: 25.0,
            hajmi: 51,
            sertifikat: 4.9,
          },
          {
            name: 'KitKat',
            davlati: 518,
            kunlar: 26.0,
            hajmi: 65,
            sertifikat: 7,
          },
        ],
        searchC: '',
        headersC: [
        {
          title: 'Xorijiy OTM yoki ITM nomi',
          align: 'start',
          key: 'name',
        },
        {
          title: 'Davlati',
          align: 'end',
          key: 'davlati',
        },
        {
          title: 'Stajirovka va malaka oshirilgan kunlar',
          align: 'end',
          key: 'kunlar',
        },
        {
          title: 'Stajirovka xajmi',
          align: 'end',
          key: 'hajmi',
        },
        {
          title: 'Sertifikat yuklanadi',
          align: 'end',
          key: 'sertifikat',
        },
        ],
        itemsC: [
        {
          name: 'Intel Core i9-11900K',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Ryzen 9 5950X',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'Intel Core i7-10700K',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Ryzen 5 5600X',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'Intel Core i5-10600K',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Ryzen 7 5800X',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'Intel Core i3-10100',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Ryzen 3 3300X',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'Intel Pentium Gold G6400',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Athlon 3000G',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        ]
      }
    },
    methods: {
      filterOnlyCapsText (value, query, item) {
        return value != null &&
          query != null &&
          typeof value === 'string' &&
          value.toString().toLocaleLowerCase().indexOf(query) !== -1
      },   
    },
    
  }
</script>

<style scoped>

</style>
