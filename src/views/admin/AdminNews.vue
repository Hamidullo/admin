<template>
  <v-container class="bg-grey-lighten-2" align="center" justify="center" fluid>
    <v-card class="px-6 py-6">
      <v-data-table
        :headers="headers"
        :items="items"
        :sort-by="[{ key: 'calories', order: 'asc' }]">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>YANGI QO’SHILGAN HUJATLAR</v-toolbar-title>
            <v-divider class="mx-4" inset vertical>
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
                          v-model="editedItem.newName"
                          label="F.I.Sh">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.newTypeName"
                          label="Hujjat turi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.newAuthCount"
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedItem.newAuthName"
                          label="Ham mualliflar">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-btn class="bg-grey-lighten-4" block rounded="0" @click="downloadDoc(editedItem)" size="x-large">Hujjatni yuklash</v-btn>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-select
                          label="Amal"
                          v-model="editedItem.newConfirmationN"
                          :items="['Rad etish', 'Tasdiqlash']">
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
      overlay: false,
      userId: localStorage.getItem("user-userId"),
      userName: localStorage.getItem("user-name"),

      select: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        { title: 'F.I.SH', align: 'start', sortable: false, key: 'userName',},
        { title: 'Hujjat turi',align: 'center', key: 'newTypeName' },
        { title: 'Mualliflar soni',align: 'center', key: 'newAuthCount' },
        { title: 'Ham mualliflar',align: 'center', key: 'newAuthName' },
        { title: 'Hujjat holati',align: 'center', key: 'newSeen' },
        { title: 'Amallar',align: 'center', key: 'actions', sortable: false },
      ],
      items: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        userId: 0,
        userName: 0,
        newTypeName: '',
        userName: '',
        newName: '',
        newAuthCount: 0,
        newAuthName: '',
        news: '',
        docId: 0,
        tableName: '',
        newConfirmation: 0,
        newConfirmationN: '',
        newConfirmationName: '',
        newConfirmationUserId: 0,
        newFileUploaded: '',
      },
      defaultItem: {
        id: 0,
        userId: 0,
        userName: 0,
        newTypeName: '',
        userName: '',
        newName: '',
        newAuthCount: 0,
        newAuthName: '',
        news: '',
        docId: 0,
        tableName: '',
        newConfirmation: 0,
        newConfirmationN: '',
        newConfirmationName: '',
        newConfirmationUserId: 0,
        newFileUploaded: '',
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

  methods: {

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    openItem (item) {
      const newId = item.id;
      this.$router.push({path: `/admin/new/${newId}` })
    },

    deleteItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/news/delete?id=${this.editedItem.id}&newId=${this.editedItem.docId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.id}`);
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
      this.overlay = true
      if (this.editedItem.newConfirmationN === 'Rad etish'){
        this.editedItem.newConfirmation = 3
      } else {
        this.editedItem.newConfirmation = 2
      }
      let data = {
        'userId': this.editedItem.userId,
        'confirm': this.editedItem.newConfirmation,
        'confirmUserId': this.userId,
        'confirmName': this.userName,
      }


      axios.put("http://api.nammti.uz/api/news/confirm?id="+this.editedItem.id, data)
        .then(response => {
          console.log(response.data)
          this.items.splice(this.editedIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.overlay = false
          console.error("There was an error!", error);
        });
      this.close()
    },

    forceFileDownload(response, title) {
      console.log(title)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios(url, title) {
      console.log(url)
      console.log("Download con")
      axios({
        method: 'get',
        url,
        responseType: 'arraybuffer',
      })
        .then((response) => {
          console.log("Download end")
          this.forceFileDownload(response, title)
        })
        .catch(() => console.log('error occured'))
    },
    downloadDoc(item) {
      console.log("Download start")
      this.downloadWithAxios("http://api.nammti.uz/api/"+ item.tableName +"/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
  },

  mounted() {
    axios
      .get(`http://api.nammti.uz/api/news/typeAdmin?userId=${this.userId}&limit=10&offset=0`)
      .then(response => {
        const data  = response.data
        console.log(data)
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
