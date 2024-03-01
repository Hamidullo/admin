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
                          label="Tayyorlagan shogird F.I.SH"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.place"
                          clearable
                          required
                          label="Shogird ish joyi">
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
                          label="Shogird lavozimi">
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
                          label="Shogird kafedrasi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.faculty"
                          clearable
                          label="Shogird fakulteti"
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
                          v-model="editedItem.typeName"
                          :items="['Fan doktori', 'Falsafa doktori', 'Stipendiant', 'Olimpiada g’olibi', 'Sport ustalari ']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Shogird tayorlangan yil"
                          v-model="editedItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Shogird tayorlangan oy"
                          v-model="editedItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedItem.student"
                          v-model="editedItem.student"
                          show-size
                          label="Hujjat yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadTDoc(editedItem)">Hujjatni yuklash</v-btn>
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
                            v-model="editedDItem.achievementName"
                            clearable
                            required
                            label="Davlat mukofoti">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Davlat mukofoti berilgan yil"
                            v-model="editedDItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Davlat mukofoti berilgan oy"
                            v-model="editedDItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.achievementNumber"
                            clearable
                            label="Seriya raqami"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedDItem.achievementDownload"
                            v-model="editedDItem.achievementDownload"
                            show-size
                            label="Sertifikat yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadADoc(editedDItem)">Sertifikatni yuklash</v-btn>
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

          name: '',
          type: 0,
          typeName: '',
          place: '',
          position: '',
          department: '',
          faculty: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),

          statId: 0,
          newId: 0,
          news: '',
          student: null
        },
        defaultItem: {
          id: 0,
          userName: localStorage.getItem("user-name"),

          name: '',
          type: 0,
          typeName: '',
          place: '',
          position: '',
          department: '',
          faculty: '',

          year: 0,
          mounth: 0,

          statId: 0,
          newId: 0,
          news: '',
          student: null
        },
        search: '',
        headers: [
          { key: 'name', title: 'Tayyorlagan shogird', align: 'start', sortable: false, },
          { key: 'place', title: 'Ish joyi' },
          { key: 'position', title: 'Lavozimi' },
          { key: 'department', title: 'Kafedrasi' },
          { key: 'faculty', title: 'Fakulteti' },
          { key: 'typeName', title: 'Turi' },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start',sortable: false },
        ],
        items: [],

        dialogD: false,
        dialogDDelete: false,
        editedDIndex: -1,
        editedDItem: {
          id: 0,
          achievementType: 71,
          achievementTypeName: 'Davlat mukofoti',

          achievementName: '',
          achievementSpecies: '',
          achievementNumber: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          achievementDownload: null
        },
        defaultDItem: {
          id: 0,
          achievementType: 71,
          achievementTypeName: 'Davlat mukofoti',

          achievementName: '',
          achievementSpecies: '',
          achievementNumber: '',

          year: 0,
          mounth: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          news: '',
          achievementDownload: null
        },
        searchD: '',
        headersD: [
          { key: 'achievementName', title: 'Mukofot turi', align: 'start', sortable: false, },
          { key: 'year', title: 'Berilgan yili' },
          { key: 'achievementNumber', title: 'Seriya raqami' },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsD: [],
      }
    },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Tayyorlagan shogird qo`shish' : 'Tayyorlagan shogirdni taxrirlash'
    },
    formDTitle () {
      return this.editedDIndex === -1 ? 'Yangi davlat mukofoti qo`shish' : 'Davlat mukofotini taxrirlash'
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
      this.overlay = true
      axios.delete(`http://localhost:8080/api/teachers/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
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
    deleteDItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/achievements/delete?id=${this.editedDItem.id}&newId=${this.editedDItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.id}`);
          this.itemsD.splice(this.editedDIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDDelete()
    },

    save () {
      if (this.editedIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('name', this.editedItem.workName)
        formData.append('place', this.editedItem.workAuthorCount)
        formData.append('position', this.editedItem.workAuthorName)
        formData.append('department', this.editedItem.workNumber)
        formData.append('faculty', this.editedItem.workNumber)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://localhost:8080/api/teachers/update?id="+this.editedItem.id, formData)
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

        if (this.editedItem.typeName === 'Fan doktori'){
          this.editedItem.type = 1
        } else if (this.editedItem.typeName === 'Falsafa doktori'){
          this.editedItem.type = 2
        } else if (this.editedItem.typeName === 'Stipendiant'){
          this.editedItem.type = 3
        } else if (this.editedItem.typeName === 'Olimpiada g’olibi'){
          this.editedItem.type = 4
        } else {
          this.editedItem.type = 5
        }

        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('userName', this.editedItem.userName)

        formData.append('name', this.editedItem.name)
        formData.append('type', this.editedItem.type)
        formData.append('typeName', this.editedItem.typeName)
        formData.append('place', this.editedItem.place)
        formData.append('position', this.editedItem.position)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)

        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)

        // files
        for (let file of this.editedItem.student) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/teachers/create?userId="+this.userId, formData)
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
    saveD () {
      if (this.editedDIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('name', this.editedDItem.achievementName)
        formData.append('number', this.editedDItem.achievementNumber)
        formData.append('newId', this.editedDItem.newId)

        axios.put("http://localhost:8080/api/achievements/update?id="+this.editedDItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsD[this.editedDIndex], this.editedDItem)
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

        formData.append('name', this.editedDItem.achievementName)
        formData.append('type', this.editedDItem.achievementType)
        formData.append('typeName', this.editedDItem.achievementTypeName)
        formData.append('number', this.editedDItem.achievementNumber)
        formData.append('year', this.editedDItem.year)
        formData.append('mounth', this.editedDItem.mounth)
        formData.append('department', this.editedDItem.department)
        formData.append('faculty', this.editedDItem.faculty)

        // files
        for (let file of this.editedDItem.doc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/achievements/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsD.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeD()
    },

    forceFileDownload(response, title) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios(url, title) {
      axios({
        method: 'get',
        url,
        responseType: 'arraybuffer',
      })
        .then((response) => {
          this.forceFileDownload(response, title)
        })
        .catch(() => console.log('error occured'))
    },
    downloadTDoc(item) {
      this.downloadWithAxios("http://localhost:8080/api/teachers/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
    downloadADoc(item) {
      this.downloadWithAxios("http://localhost:8080/api/achievements/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
  },

  mounted() {
    axios
      .get(`http://localhost:8080/api/teachers/teacher?userId=${this.userId}&limit=10&offset=0`)
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
      .get(`http://localhost:8080/api/achievements/achievement?userId=${this.userId}&limit=10&offset=0`)
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
          this.itemsD.push(data[dataKey])
        }
      });


  }

}
</script>

<style scoped>

</style>
