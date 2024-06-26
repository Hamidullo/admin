<template>
  <v-container class="py-8 px-6 " fluid>

    <v-row>
      <v-col >
        <v-card class="bg-color-container" flat title="Tayyorlagan shogirdlar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialog"
              persistent
              width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="deep-purple-darken-1"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card class="form-color">
                <v-card-title>
                  <span class="text-h5">{{formTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          :rules="rules"
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
                          :rules="rules"
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
                          :rules="rules"
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
                          :rules="rules"
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
                          :rules="rules"
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
                          :rules="rules"
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
                          :rules="rules"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Shogird tayorlangan oy"
                          :rules="rules"
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
                          :rules="rules"
                          v-model="editedItem.student"
                          show-size
                          label="Hujjat yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadTDoc(editedItem)">Hujjatni yuklash</v-btn>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-label v-if="editedItem.description">
                          Rad etilganligini sababi: {{editedItem.description}}
                        </v-label>
                      </v-col>
                    </v-row>
                  </v-form>
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
              <v-card  class="form-color">
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
        <v-card class="bg-color-container" flat title="Davlat mukofotlari">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog v-model="dialogD" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn color="deep-purple-darken-1" v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card  class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{ formDTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.achievementName"
                            clearable
                            required
                            :rules="rules"
                            label="Davlat mukofoti">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Davlat mukofoti berilgan yil"
                            :rules="rules"
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
                            :rules="rules"
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
                            :rules="rules"
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
                            :rules="rules"
                            v-model="editedDItem.achievementDownload"
                            show-size
                            label="Sertifikat yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadADoc(editedDItem)">Sertifikatni yuklash</v-btn>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-label v-if="editedDItem.description">
                            Rad etilganligini sababi: {{editedDItem.description}}
                          </v-label>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeD">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveD">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDDelete" width="auto">
                <v-card  class="form-color">
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
            class="bg-color-container"
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

    <v-snackbar
    :timeout="3000"
    color="red"
    v-model="snackF"
    elevation="24">
    Hujjatni yuklashda hatolik!
  </v-snackbar>

  <v-snackbar
    :timeout="3000"
    color="success"
    v-model="snackS"
    elevation="24">
    Hujjat muvaffaqiyatli yuklandi!
  </v-snackbar>

  <v-snackbar
    :timeout="3000"
    color="success"
    v-model="snackD"
    elevation="24">
    Hujjat o'chirildi!
  </v-snackbar>

  </v-container>
</template>

<script>
import axios from "axios";
import url from "@/utils/url";

export default {
  data () {
      return {
        overlay: false,
        rules: [
          value => {
            if (value) return true
            return 'Qator bo`sh bo`lmasligi kerak.'
          },
        ],
        snackF: false,
        snackS: false,
        snackD: false,
        userId: localStorage.getItem("user-userId"),
        userName: localStorage.getItem("user-name"),
        userPosition: localStorage.getItem("user-position"),
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
          tecposition: '',
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          description: '',

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
          description: '',

          name: '',
          type: 0,
          typeName: '',
          place: '',
          tecposition: '',
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),

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
          description: '',

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
          description: '',

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
      axios.delete(url.baseURL +`/api/teachers/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.id}`);
          this.items.splice(this.editedIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDelete()
    },
    deleteDItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL +`/api/achievements/delete?id=${this.editedDItem.id}&newId=${this.editedDItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.id}`);
          this.itemsD.splice(this.editedDIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDDelete()
    },

    async save () {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        if (this.editedIndex > -1) {
        this.overlay = true
        let data = {
          'name': this.editedItem.workName,
          'place': this.editedItem.workAuthorCount,
          'position': this.editedItem.workAuthorName,
          'department': this.editedItem.workNumber,
          'faculty': this.editedItem.workNumber,
          'newId': this.editedItem.newId,
        }


        axios.put(url.baseURL +"/api/teachers/update?id="+this.editedItem.id, data)
          .then(response => {
            console.log(response.data)
            Object.assign(this.items[this.editedIndex], this.editedItem)
            this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
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
        formData.append('tecposition', this.editedItem.tecposition)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)
        formData.append('position', this.userPosition)

        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)

        // files
        for (let file of this.editedItem.student) {
          formData.append("doc", file, file.name);
        }
        axios.post(url.baseURL +"/api/teachers/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.items.push(response.data)
            this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
            console.error("There was an error!", error);
          });
      }
      this.$refs.form.resetValidation()
      this.close()
      }

    },
    async saveD () {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        if (this.editedDIndex > -1) {
        this.overlay = true
        let data = {
          'name': this.editedDItem.achievementName,
          'number': this.editedDItem.achievementNumber,
          'newId': this.editedDItem.newId,
        }


        axios.put(url.baseURL +"/api/achievements/update?id="+this.editedDItem.id, data)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsD[this.editedDIndex], this.editedDItem)
            this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
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
        formData.append('position', this.userPosition)

        // files
        for (let file of this.editedDItem.achievementDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post(url.baseURL +"/api/achievements/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsD.push(response.data)
            this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
            console.error("There was an error!", error);
          });
      }
      this.$refs.form.resetValidation()
      this.closeD()
      }

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
      /*let url = url.baseURL +"/api/academics/download?userId="+item.userId+"&file="+item.student
      window.location.href = url;*/
      this.downloadWithAxios(url.baseURL +"/api/teachers/download?userId="+item.userId+"&file="+item.student,item.student)
    },
    downloadADoc(item) {
      /*let url = url.baseURL +"/api/academics/download?userId="+item.userId+"&file="+item.achievementDownload
      window.location.href = url;*/
      this.downloadWithAxios(url.baseURL +"/api/achievements/download?userId="+item.userId+"&file="+item.achievementDownload,item.achievementDownload)
    },
  },

  mounted() {
    axios
      .get(url.baseURL +`/api/teachers/teacher?userId=${this.userId}&limit=10&offset=0`)
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
      .get(url.baseURL +`/api/achievements/achievement?userId=${this.userId}&limit=10&offset=0`)
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
.bg-color-container{
  background-color: #7E57C2;
  color: white;
}
.form-color{
  background-color: #512DA8;
  color: white;
}
</style>
