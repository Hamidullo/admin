<template>
  <v-container class="py-8 px-6 " fluid>

    <v-row>
      <v-col>
        <v-card class="bg-color-container" flat title="Top – 1000-da o’quv mashg’ulotlari olib borish">
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
              <v-card  class="form-color">
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
                          v-model="editedItem.internationalName"
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
                          v-model="editedItem.internationalCountry"
                          clearable
                          required
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.internationalLessonsSize"
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
                        <v-text-field
                          v-model="editedItem.internationalLessonsCount"
                          clearable
                          label="Mashg’ulotlar soni"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Mashg’ulot olib borilgan yil"
                          v-model="editedItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Mashg’ulot olib borilgan oy"
                          v-model="editedItem.mounth"
                          :items="mounth">
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
                    class="bg-red"
                    variant="text"
                    @click="close">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="save">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="auto">
              <v-card class="form-color">
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
          class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Stajirovka va malaka oshirish">
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
              <v-card  class="form-color">
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
                          v-model="editedCItem.internationalName"
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
                          v-model="editedCItem.internationalCountry"
                          clearable
                          required
                          label="Davlati">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.internationalLessonsSize"
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
                        <v-text-field
                          v-model="editedCItem.internationalLessonsCount"
                          clearable
                          label="Stajirovka olib borilgan kunlar soni"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Stajirovka olib borilgan yil"
                          v-model="editedCItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Stajirovka olib borilgan oy"
                          v-model="editedCItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedCItem.doc"
                          v-model="editedCItem.doc"
                          show-size
                          label="Darslik yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedCItem)">Darslikni yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="bg-red"
                    variant="text"
                    @click="closeC">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="saveC">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
              <v-dialog v-model="dialogCDelete" width="auto">
                <v-card class="form-color">
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
          class="bg-color-container"
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
import axios from "axios";

export default {
    data () {
      return {
        overlay: false,
        userId: localStorage.getItem("user-hemisId"),
        userName: localStorage.getItem("user-name"),
        years: [2023,2024],
        mounth: [1,2,3,4,5,6,7,8,9,10,11,12],

        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
          id: 0,
          internationalType: 61,
          internationalTypeName: 'Top – 1000-da o’quv mashg’ulotlari olib borish',

          internationalName: '',
          internationalCountry: '',
          internationalLessonsCount: '',
          internationalLessonsSize: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          doc: null,
        },
        defaultItem: {
          id: 0,
          internationalType: 61,
          internationalTypeName: 'Top – 1000-da o’quv mashg’ulotlari olib borish',

          internationalName: '',
          internationalCountry: '',
          internationalLessonsCount: '',
          internationalLessonsSize: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          doc: null,
        },

        dialogC: false,
        dialogCDelete: false,
        editedCIndex: -1,
        editedCItem: {
          id: 0,
          internationalType: 62,
          internationalTypeName: 'Stajirovka va malaka oshirish',

          internationalName: '',
          internationalCountry: '',
          internationalLessonsCount: '',
          internationalLessonsSize: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          doc: null,
        },
        defaultCItem: {
          id: 0,
          internationalType: 62,
          internationalTypeName: 'Stajirovka va malaka oshirish',

          internationalName: '',
          internationalCountry: '',
          internationalLessonsCount: '',
          internationalLessonsSize: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          doc: null,
        },

        search: '',
        headers: [
          { key: 'internationalName', title: 'Xorijiy OTM yoki ITM nomi',align: 'start', sortable: false, },
          { key: 'internationalCountry', title: 'Davlati' },
          { key: 'mounth', title: 'Mashg’ulot olib borilgan oy' },
          { key: 'internationalLessonsCount', title: 'Mashg’ulotlar soni' },
          { key: 'internationalLessonsSize', title: 'Mashg’ulot xajmi' },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start',  sortable: false },
        ],
        items: [],

        searchC: '',
        headersC: [
          { key: 'internationalName', title: 'Xorijiy OTM yoki ITM nomi',align: 'start', sortable: false, },
          { key: 'internationalCountry', title: 'Davlati', align: 'center', },
          { key: 'mounth', title: 'Stajirovka va malaka oshirilgan oy', align: 'center', },
          { key: 'internationalLessonsCount', title: 'Stajirovka kunlari soni', align: 'end', },
          { key: 'internationalLessonsSize', title: 'Stajirovka xajmi', align: 'end', },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start',  sortable: false },
        ],
        itemsC: []
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
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/internationals/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
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
    deleteCItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/internationals/delete?id=${this.editedCItem.id}&newId=${this.editedCItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editCItem.id}`);
          this.itemsC.splice(this.editedCIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
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
        this.overlay = true
        let formData = new FormData();
        formData.append('name', this.editedItem.internationalName)
        formData.append('country', this.editedItem.internationalCountry)
        formData.append('size', this.editedItem.internationalLessonsSize)
        formData.append('count', this.editedItem.internationalLessonsCount)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/internationals/update?id="+this.editedItem.id, formData)
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
        formData.append('userName', this.userName)
        formData.append('type', this.editedItem.internationalType)
        formData.append('typeName', this.editedItem.internationalTypeName)

        formData.append('name', this.editedItem.internationalName)
        formData.append('country', this.editedItem.internationalCountry)
        formData.append('size', this.editedItem.internationalLessonsSize)
        formData.append('count', this.editedItem.internationalLessonsCount)

        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)

        // files
        for (let file of this.editedItem.doc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/internationals/create?userId="+this.userId, formData)
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
    saveC () {
      if (this.editedCIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('name', this.editedCItem.internationalName)
        formData.append('country', this.editedCItem.internationalCountry)
        formData.append('size', this.editedCItem.internationalLessonsSize)
        formData.append('count', this.editedCItem.internationalLessonsCount)
        formData.append('newId', this.editedCItem.newId)

        axios.put("http://api.nammti.uz/api/internationals/update?id="+this.editedCItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsC[this.editedCIndex], this.editedCItem)
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
        formData.append('userName', this.userName)
        formData.append('type', this.editedCItem.internationalType)
        formData.append('typeName', this.editedCItem.internationalTypeName)

        formData.append('name', this.editedCItem.internationalName)
        formData.append('country', this.editedCItem.internationalCountry)
        formData.append('size', this.editedCItem.internationalLessonsSize)
        formData.append('count', this.editedCItem.internationalLessonsCount)

        formData.append('year', this.editedCItem.year)
        formData.append('mounth', this.editedCItem.mounth)
        formData.append('department', this.editedCItem.department)
        formData.append('faculty', this.editedCItem.faculty)

        // files
        for (let file of this.editedCItem.doc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/internationals/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsC.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeC()
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
      this.downloadWithAxios("http://api.nammti.uz/api/internationals/download?userId="+item.userId+"&file="+item.workDownload,item.name)
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
  },

  mounted() {
    axios
      .get(`http://api.nammti.uz/api/internationals/type?userId=${this.userId}&limit=10&offset=0&type=51`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else {
            data[dataKey].news = 'Rad etildi'
          }
          this.items.push(data[dataKey])
        }
      });

    axios
      .get(`http://api.nammti.uz/api/internationals/type?userId=${this.userId}&limit=10&offset=0&type=52`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else {
            data[dataKey].news = 'Rad etildi'
          }
          this.itemsC.push(data[dataKey])
        }
      });

  }
}
</script>

<style scoped>
.bg-color-container{
  background-color: #59bce0;
  color: white;
}
.form-color{
  background-color: #2b748d;
  color: white;
}
</style>
