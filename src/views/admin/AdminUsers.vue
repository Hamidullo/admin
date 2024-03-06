<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>
    <v-card v-if="isUserAdmin" class="px-6 py-6">
      <v-data-table
        :headers="headers"
        :items="items"
        :sort-by="[{ key: 'name', order: 'asc' }]">
        <template v-slot:top>
          <v-toolbar flat>
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
                        md="6">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="F.I.SH">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.userId"
                          clearable
                          label="Hemis ID">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.position"
                          clearable
                          label="Lavozimi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.department"
                          clearable
                          label="Kafedrasi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.faculty"
                          clearable
                          label="Fakulteti">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.password"
                          clearable
                          label="Parol">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-select
                          v-model="editedItem.roleName"
                          :items="['User', 'Admin']"
                          clearable
                          label="Rol">
                        </v-select>
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

    <v-card
      v-else
      class="mx-auto"
      prepend-icon="mdi-home"
      width="400">
      <template v-slot:title>
        Siz superAdmin emassiz
      </template>

      <v-card-text>
        Bu oynadan foydalana olmaysiz
      </v-card-text>
    </v-card>

    <v-overlay
    :model-value="overlay"
    class="align-center justify-center">
    <v-progress-circular
      color="primary"
      indeterminate
      size="64">
    </v-progress-circular>
  </v-overlay>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return{
      isUserAdmin: true,
      overlay: false,
      userId: localStorage.getItem("user-hemisId"),
      userName: localStorage.getItem("user-name"),

      dialog: false,
      dialogDelete: false,
      headers: [
        { title: 'F.I.SH', align: 'start', sortable: false, key: 'name',},
        { title: 'Hemis Id',align: 'center', key: 'userId' },
        { title: 'Lavozimi',align: 'center', key: 'position' },
        { title: 'Kafedrasi',align: 'center', key: 'department' },
        { title: 'Fakulteti',align: 'center', key: 'faculty' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        userId: '',
        position: '',
        department: '',
        faculty: '',
        password: '',
        role: 0,
        roleName: ''
      },
      defaultItem: {
        id: 0,
        name: '',
        userId: '',
        position: '',
        department: '',
        faculty: '',
        password: '',
        role: 0,
        roleName: ''
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

  methods: {

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
      const userId = item.userId;
      this.$router.push({path: `/admin/user/${userId}` })
    },

    deleteItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/users/delete?userId=${this.editedItem.userId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.userId}`);
          this.items.splice(this.editedIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
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
        this.overlay = true
        let data = {
          'name': this.editedItem.name,
          'department': this.editedItem.department,
          'faculty': this.editedItem.faculty,
          'position': this.editedItem.position,
          'password': this.editedItem.password,
        }


        axios.put("http://api.nammti.uz/api/users/admin?userId="+this.editedItem.userId, data)
          .then(response => {
            console.log(response.data)
            Object.assign(this.items[this.editedIndex], this.editedItem)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      } else
      {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('name', this.editedItem.name)
        formData.append('faculty', this.editedItem.faculty)
        formData.append('department', this.editedItem.department)
        formData.append('position', this.editedItem.position)
        formData.append('password', this.editedItem.password)
        if (this.editedItem.roleName === 'User'){
          this.editedItem.role = 0
        } else if (this.editedItem.roleName === 'Admin'){
          this.editedItem.role = 1
        }
        formData.append('role', this.editedItem.role)

        axios.post("http://api.nammti.uz/api/users/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.items.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.close()
    },
  },

  mounted() {

    let userData = localStorage.getItem("user-role")
    if(userData !== 2){
      this.isUserAdmin = true
    }

    axios
      .get(`http://api.nammti.uz/api/users/admin?userId=${this.userId}&limit=20&offset=0`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          if (data[dataKey].newSeen === 1){
            data[dataKey].newSeen = 'Tekshirilmoqda'
          } else if (data[dataKey].newSeen === 2){
            data[dataKey].newSeen = 'Tasdiqlandi'
          } else {
            data[dataKey].newSeen = 'Rad etildi'
          }
          this.items.push(data[dataKey])

        }
      });
  }
}
</script>

<style scoped>

</style>
