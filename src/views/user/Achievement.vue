<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col cols="6">
        <v-card flat title="Davlat mukofotlari">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog v-model="dialog" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
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
                          required
                          label="Davlat mukofoti">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.type"
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
                          v-model="editedItem.year"
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
                          v-model="editedItem.number"
                          clearable
                          label="Seriya raqami"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedItem.doc"
                          v-model="editedItem.doc"
                          show-size
                          label="Sertifikat yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Sertifikatni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Davlat mukofotini o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details
          ></v-text-field>
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
        <v-card flat title="Diplomlar">
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
                          label="Diplom"
                          required>
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
                          v-model="editedDItem.achieve"
                          clearable
                          required
                          label="Maqsadi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedDItem.year"
                          clearable
                          label="Berilgan yili"
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
                          label="Diplom yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedDItem)">Diplomni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Diplomni o'chirishni hohlaysizmi?</v-card-title>
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
              hide-details>
            </v-text-field>
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

      <v-col cols="12">
        <v-card flat title="Sertifikatlar">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog v-model="dialogA" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn color="primary" v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formATitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.name"
                            clearable
                            label="Sertifikat"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.type"
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
                            v-model="editedAItem.achieve"
                            clearable
                            required
                            label="Maqsadi">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.year"
                            clearable
                            label="Berilgan yili"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            v-if="!editedAItem.doc"
                            v-model="editedAItem.doc"
                            show-size
                            label="Sertifikat yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedAItem)">Sertifikatni yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="closeA">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="saveA">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogADelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Sertifikatni o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeADelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteAItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchA"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>

          <v-data-table
            :headers="headersA"
            :items="itemsA"
            :search="searchA">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="editAItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                size="small"
                @click="deleteAItem(item)">
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
          type: '',
          year: '',
          number: '',
          doc: null
        },
        defaultItem: {
          id: 0,
          name: '',
          type: '',
          year: '',
          number: '',
          doc: null
        },

        dialogD: false,
        dialogDDelete: false,
        editedDIndex: -1,
        editedDItem: {
          id: 0,
          name: '',
          type: '',
          achieve: '',
          year: '',
          doc: null
        },
        defaultDItem: {
          id: 0,
          name: '',
          type: '',
          achieve: '',
          year: '',
          doc: null
        },

        dialogA: false,
        dialogADelete: false,
        editedAIndex: -1,
        editedAItem: {
          id: 0,
          name: '',
          type: '',
          year: '',
          achieve: '',
          doc: null
        },
        defaultAItem: {
          id: 0,
          name: '',
          type: '',
          year: '',
          achieve: '',
          doc: null
        },

        search: '',
        headers: [
          { key: 'name', title: 'Davlat mukofotlari', align: 'start', sortable: false, },
          { key: 'type', title: 'Turi' },
          { key: 'year', title: 'Berilgan yili' },
          { key: 'number', title: 'Seriya raqami' },
          {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        items: [],

        searchD: '',
        headersD: [
          { key: 'name', title: 'Diplom', align: 'start', sortable: false, },
          { key: 'type', title: 'Turi' },
          { key: 'achieve', title: 'Maqsadi' },
          { key: 'year', title: 'Berilgan yili' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsD: [],

        searchA: '',
        headersA: [
          { key: 'name', title: 'Sertifikat', align: 'start', sortable: false, },
          { key: 'type', title: 'Turi' },
          { key: 'year', title: 'Berilgan yili' },
          { key: 'achieve', title: 'Maqsadi' },
          {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsA: [],
      }
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
      editAItem (item) {
        this.editedAIndex = this.itemsA.indexOf(item)
        this.editedAItem = Object.assign({}, item)
        this.dialogA = true
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
      deleteAItem (item) {
        this.editedAIndex = this.itemsA.indexOf(item)
        this.editedAItem = Object.assign({}, item)
        this.dialogADelete = true
      },

      deleteItemConfirm () {
        this.items.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      deleteDItemConfirm () {
        this.itemsD.splice(this.editedDIndex, 1)
        this.closeDDelete()
      },
      deleteAItemConfirm () {
        this.itemsA.splice(this.editedAIndex, 1)
        this.closeADelete()
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
      closeA () {
        this.dialogA = false
        this.$nextTick(() => {
          this.editedAItem = Object.assign({}, this.defaultAItem)
          this.editedAIndex = -1
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
      closeADelete () {
        this.dialogADelete = false
        this.$nextTick(() => {
          this.editedAItem = Object.assign({}, this.defaultAItem)
          this.editedAIndex = -1
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
      saveD () {
        if (this.editedDIndex > -1) {
          Object.assign(this.itemsD[this.editedDIndex], this.editedDItem)
        } else {
          this.itemsD.push(this.editedDItem)
        }
        this.closeD()
      },
      saveA () {
        if (this.editedAIndex > -1) {
          Object.assign(this.itemsA[this.editedAIndex], this.editedAItem)
        } else {
          this.itemsA.push(this.editedAItem)
        }
        this.close()
      },

      downloadDoc(item) {

      }

    },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Yangi davlat mukofoti qo`shish' : 'Davlat mukofotini taxrirlash'
    },
    formDTitle () {
      return this.editedQIndex === -1 ? 'Yangi diplom qo`shish' : 'Diplomni taxrirlash'
    },
    formATitle () {
      return this.editedMIndex === -1 ? 'Yangi sertifikatlar qo`shish' : 'Sertifikatni taxrirlash'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogD (val) {
      val || this.closeD()
    },
    dialogDDelete (val) {
      val || this.closeDDelete()
    },
    dialogA (val) {
      val || this.closeA()
    },
    dialogADelete (val) {
      val || this.closeADelete()
    }
  },
}
</script>

<style scoped>

</style>
