<template>
  <v-container>
    <v-card class="px-6 py-6">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :sort-by="[{ key: 'calories', order: 'asc' }]">
        <template v-slot:top>
          <v-toolbar
            flat>
            <v-toolbar-title>Foydalanuvchilar</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical>
            </v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="1024px">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="props">
                  Yangi foydalanuvchi qo'shish
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
                        md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="F.I.SH">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.id"
                          clearable
                          label="Hemis ID">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.position"
                          clearable
                          label="Lavozimi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.department"
                          clearable
                          label="Kafedrasi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.faculty"
                          clearable
                          label="Fakulteti">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.protein"
                          clearable
                          label="Parol">
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
                    @click="close">
                    Bekor qilish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save">
                    <strong>Saqlash</strong>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Foydalanuvchini o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            size="large"
            class="me-2"
            @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon
            size="large"
            class="me-2"
            @click="deleteItem(item)">
            mdi-delete
          </v-icon>
          <v-icon
            size="large"
            @click="openItem(item)">
            mdi-open-in-new
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return{
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'F.I.SH',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Hemis Id',align: 'center', key: 'id' },
        { title: 'Lavozimi',align: 'center', key: 'position' },
        { title: 'Kafedrasi',align: 'center', key: 'department' },
        { title: 'Fakulteti',align: 'center', key: 'faculty' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      desserts: [],
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
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Yangi foydalanuvchi qo`shish' : 'Foydalanuvchini taxrirlash'
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

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          id: 1,
          position: 159,
          department: 6.0,
          faculty: 24,
          protein: 4.0,
        },
        {
          name: 'Frozen Yogurt',
          id: 2,
          position: 159,
          department: 6.0,
          faculty: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          id: 3,
          position: 237,
          department: 9.0,
          faculty: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          id: 4,
          position: 262,
          department: 16.0,
          faculty: 23,
          protein: 6.0,
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    openItem (item) {
      const userId = item.id;
      this.$router.push({path: `/admin/user/${userId}` })
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style scoped>

</style>
