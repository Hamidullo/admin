<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col cols="6">
        <v-card flat title="Tayyorlagan shogirdlar">
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
                          label="Tayyorlagan shogird"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.position"
                          clearable
                          required
                          label="Fan doktori">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.department"
                          clearable
                          required
                          label="Falsafa doktori">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.faculty"
                          clearable
                          label="Olimpiada g'olibi"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Shogird yutug'ini tanlang"
                          required
                          v-model="editedItem.type"
                          :items="['Fan doktori', 'Falsafa doktori', 'Stipendiant', 'Olimpiada g’olibi', 'Sport ustalari ']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedItem.doc"
                          v-model="editedItem.doc"
                          show-size
                          label="Hujjat yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Hujjatni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Shogirdni o'chirishni hohlaysizmi?</v-card-title>
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

      <v-col cols="6">
        <v-card flat title="Davlat mukofotlari">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog v-model="dialogD" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn color="primary" v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formDTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.name"
                            clearable
                            required
                            label="Davlat mukofoti">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.type"
                            clearable
                            required
                            label="Turi">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.year"
                            clearable
                            required
                            label="Berilgan yili">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.number"
                            clearable
                            label="Seriya raqami"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            v-if="!editedDItem.doc"
                            v-model="editedDItem.doc"
                            show-size
                            label="Sertifikat yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedDItem)">Sertifikatni yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="closeD">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="saveD">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDDelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Davlat mukofotini o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeDDelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteDItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchD"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details
            ></v-text-field>
          </template>

          <v-data-table
            :headers="headersD"
            :items="itemsD"
            :search="searchD">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="editDItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                size="small"
                @click="deleteDItem(item)">
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
          id: 0,
          name: '',
          position: '',
          department: '0',
          faculty: '',
          type: '',
          doc: null
        },
        defaultItem: {
          id: 0,
          name: '',
          position: '',
          department: '0',
          faculty: '',
          type: '',
          doc: null
        },
        search: '',
        headers: [
          { key: 'name', title: 'Tayyorlagan shogird', align: 'start', sortable: false, },
          { key: 'position', title: 'Lavozimi' },
          { key: 'department', title: 'Kafedrasi' },
          { key: 'faculty', title: 'Fakulteti' },
          { key: 'type', title: 'Turi' },
          {  key: 'actions', title: 'Amallar',align: 'start',sortable: false },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            fan: 159,
            falsafa: 6.0,
            olimpiyada: 24,
            sport: 4.0,
            stipendia: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            fan: 237,
            falsafa: 9.0,
            olimpiyada: 37,
            sport: 4.3,
            stipendia: 4.3,
          },
          {
            name: 'Eclair',
            fan: 262,
            falsafa: 16.0,
            olimpiyada: 23,
            sport: 6.0,
            stipendia: 6.0,
          },
          {
            name: 'Cupcake',
            fan: 305,
            falsafa: 3.7,
            olimpiyada: 67,
            sport: 4.3,
            stipendia: 4.3,
          },
          {
            name: 'Gingerbread',
            fan: 356,
            falsafa: 16.0,
            olimpiyada: 49,
            sport: 3.9,
            stipendia: 3.9,
          },
          {
            name: 'Jelly bean',
            fan: 375,
            falsafa: 0.0,
            olimpiyada: 94,
            sport: 0.0,
            stipendia: 0.0,
          },
          {
            name: 'Lollipop',
            fan: 392,
            falsafa: 0.2,
            olimpiyada: 98,
            sport: 0,
            stipendia: 0,
          },
          {
            name: 'Honeycomb',
            fan: 408,
            falsafa: 3.2,
            olimpiyada: 87,
            sport: 6.5,
            stipendia: 6.5,
          },
          {
            name: 'Donut',
            fan: 452,
            falsafa: 25.0,
            olimpiyada: 51,
            sport: 4.9,
            sporstipendiat: 4.9,
          },
          {
            name: 'KitKat',
            fan: 518,
            falsafa: 26.0,
            olimpiyada: 65,
            sport: 7,
            stipendia: 7,
          },
        ],

        dialogD: false,
        dialogDDelete: false,
        editedDIndex: -1,
        editedDItem: {
          id: 0,
          name: '',
          type: '',
          year: '',
          number: '',
          doc: null
        },
        defaultDItem: {
          id: 0,
          name: '',
          type: '',
          year: '',
          number: '',
          doc: null
        },
        searchD: '',
        headersD: [
          { key: 'name', title: 'Davlat mukofotlari', align: 'start', sortable: false, },
          { key: 'type', title: 'Turi' },
          { key: 'year', title: 'Berilgan yili' },
          { key: 'number', title: 'Seriya raqami' },
          {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsD: [
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
      }
    },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Tayyorlagan shogird qo`shish' : 'Tayyorlagan shogirdni taxrirlash'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    editDItem (item) {
      this.editedDIndex = this.itemsD.indexOf(item)
      this.editedDItem = Object.assign({}, item)
      this.dialogD = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteDItem (item) {
      this.editedDIndex = this.itemsD.indexOf(item)
      this.editedDItem = Object.assign({}, item)
      this.dialogDDelete = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeD () {
      this.dialogD = false
      this.$nextTick(() => {
        this.editedDItem = Object.assign({}, this.defaultDItem)
        this.editedDIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDDelete () {
      this.dialogDDelete = false
      this.$nextTick(() => {
        this.editedDItem = Object.assign({}, this.defaultDItem)
        this.editedDIndex = -1
      })
    },

    deleteItemConfirm () {
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    deleteDItemConfirm () {
      this.itemsD.splice(this.editedDIndex, 1)
      this.closeDDelete()
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    },
    saveD () {
      if (this.editedDIndex > -1) {
        Object.assign(this.itemsD[this.editedDIndex], this.editedDItem)
      } else {
        this.itemsD.push(this.editedDItem)
      }
      this.closeD()
    },

    downloadDoc(item){

    }
  }

}
</script>

<style scoped>

</style>
