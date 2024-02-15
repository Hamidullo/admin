<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col>
        <v-card flat
        title="Top–1000-da o’quv mashg’ulotlari olib borish">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialog"
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
                  <span class="text-h5">{{formTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="Xorijiy OTM yoki ITM nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="Mashg’ulot olib borilgan kunlar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="Mashg’ulot xajmi"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          show-size
                          label="Sertifikatni yuklash">
                        </v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="close">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Top – 1000-da o’quv mashg’ulotlari olib borish o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
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
            hide-details>
          </v-text-field>
        </template>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card flat
        title="Stajirovka va malaka oshirish">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogC" persistent
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
                  <span class="text-h5">{{ formCTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.name"
                          clearable
                          label="Xorijiy OTM yoki ITM nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.name"
                          clearable
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedCItem.name"
                          clearable
                          label="Stajirovka va malaka oshirilgan kunlar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.name"
                          clearable
                          label="Stajirovka xajmi"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          show-size
                          label="Sertifikatni yuklash">
                        </v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeC">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveC">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
              <v-dialog v-model="dialogCDelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Stajirovka va malaka oshirish o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeCDelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteCItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
          </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchC"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>
        <v-data-table
          :headers="headersC"
          :items="itemsC"
          :search="searchC"
          item-value="name">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editCItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteCItem(item)">
              mdi-delete
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
    data () {
      return {
        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
          name: '',
          id: 0,
          position: 0,
          department: 0,
          faculty: 0,
        },
        defaultItem: {
          name: '',
          id: 0,
          position: 0,
          department: 0,
          faculty: 0,
        },

        dialogC: false,
        dialogCDelete: false,
        editedCIndex: -1,
        editedCItem: {
          name: '',
          id: 0,
          position: 0,
          department: 0,
          faculty: 0,
        },
        defaultCItem: {
          name: '',
          id: 0,
          position: 0,
          department: 0,
          faculty: 0,
        },

        search: '',
        headers: [
          { align: 'start', key: 'name', sortable: false, title: 'Xorijiy OTM yoki ITM nomi',},
          { key: 'davlati', title: 'Davlati' },
          { key: 'kunlar', title: 'Mashg’ulot olib borilgan kunlar' },
          { key: 'hajmi', title: 'Mashg’ulot xajmi' },
          { key: 'sertifikat', title: 'Sertifikat yuklanadi' },
          { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
        ],
        items: [
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
          { align: 'start', sortable: false, key: 'name', title: 'Xorijiy OTM yoki ITM nomi',},
          { title: 'Davlati', align: 'center', key: 'davlati',},
          { title: 'Stajirovka va malaka oshirilgan kunlar', align: 'center', key: 'kunlar',},
          { title: 'Stajirovka xajmi', align: 'end', key: 'hajmi',},
          { title: 'Sertifikat yuklanadi', align: 'end', key: 'sertifikat',},
          { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
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
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    editCItem (item) {
      this.editedCIndex = this.itemsC.indexOf(item)
      this.editedCItem = Object.assign({}, item)
      this.dialogC = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteCItem (item) {
      this.editedCIndex = this.itemsC.indexOf(item)
      this.editedCItem = Object.assign({}, item)
      this.dialogCDelete = true
    },

    deleteItemConfirm () {
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    deleteCItemConfirm () {
      this.itemsC.splice(this.editedCIndex, 1)
      this.closeCDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeC () {
      this.dialogC = false
      this.$nextTick(() => {
        this.editedCItem = Object.assign({}, this.defaultCItem)
        this.editedCIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeCDelete () {
      this.dialogCDelete = false
      this.$nextTick(() => {
        this.editedCItem = Object.assign({}, this.defaultCItem)
        this.editedCIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    },

    saveC () {
      if (this.editedCIndex > -1) {
        Object.assign(this.itemsC[this.editedCIndex], this.editedCItem)
      } else {
        this.itemsC.push(this.editedCItem)
      }
      this.closeC()
    },
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Top – 1000-da o’quv mashg’ulotlari olib borish qo`shish' : 'Top – 1000-da o’quv mashg’ulotlari olib borish taxrirlash'
    },
    formCTitle () {
      return this.editedQIndex === -1 ? 'Stajirovka va malaka oshirish qo`shish' : 'Stajirovka va malaka oshirish taxrirlash'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogC (val) {
      val || this.closeC()
    },
    dialogCDelete (val) {
      val || this.closeCDelete()
    },
  }
}
</script>

<style scoped>

</style>
