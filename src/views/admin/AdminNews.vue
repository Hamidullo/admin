<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>
    <v-card class="px-6 py-6">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :sort-by="[{ key: 'calories', order: 'asc' }]">
        <template v-slot:top>
          <v-toolbar
            flat>
            <v-toolbar-title>YANGI QO’SHILGAN HUJATLAR</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical>
            </v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="1024px">

              <v-card>
                <v-card-title>
                  <span class="text-h5">Tasdiqlash</span>
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
                          label="F.I.Sh">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.calories"
                          label="Hujjat turi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.fat"
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.carbs"
                          label="Ham mualliflar">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-btn class="bg-grey-lighten-4" block rounded="0" size="x-large">Hujjatni yuklash</v-btn>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-select
                          label="Amal"
                          v-model="select"
                          :items="['Rad etish', 'Tasdiqlash']"
                        ></v-select>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Yangi qo'shilgan hujjatni o'chirishni hohlaysizmi?</v-card-title>
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
      select: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        { title: 'F.I.SH', align: 'start', sortable: false, key: 'name',},
        { title: 'Hujjat turi',align: 'center', key: 'type' },
        { title: 'Mualliflar soni',align: 'center', key: 'count' },
        { title: 'Ham mualliflar',align: 'center', key: 'authors' },
        { title: 'Hujjat yuklangan',align: 'center', key: 'doc' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        check: false,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }
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
          type: 159,
          count: 6.0,
          authors: 24,
          doc: 4.0,
        },
        {
          name: 'Frozen Yogurt',
          id: 2,
          type: 159,
          count: 6.0,
          authors: 24,
          doc: 4.0,
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
      const newId = item.id;
      this.$router.push({path: `/admin/new/${newId}` })
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
