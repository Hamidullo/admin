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
                        <v-select
                          label="lavozim"
                          v-model="editedItem.position"
                          :items="positions"
                          hide-details>
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Kafedra"
                          v-model="editedItem.department"
                          :items="departments"
                          hide-details>
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Fakultet"
                          v-model="editedItem.faculty"
                          :items="faculties"
                          hide-details>
                        </v-select>
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

    <v-card v-if="isUserAdmin" class="px-6 py-6 mt-4">
      <template v-slot:title>
        Excel ga eksport
      </template>

      <v-label class="align-start font-weight-bold text-black">
        1 - SIFAT(SALOHIYAT) KO‘RSATKICHI
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="3">
          <v-btn @click="download11" class="w-100">
            1.1
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download12"  class="w-100">
            1.2
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download13"  class="w-100">
            1.3
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        2 - O’QUV-USLUBIY ISHLAR
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="3">
          <v-btn @click="download21"  class="w-100">
            2.1
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download22"  class="w-100">
            2.2
          </v-btn>
        </v-col>
        <v-col @click="download23"   cols="3">
          <v-btn class="w-100">
            2.3
          </v-btn>
        </v-col>
        <v-col  @click="download24"  cols="3">
          <v-btn class="w-100">
            2.4
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        3 - ILMIY ISHLAR
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="3">
          <v-btn @click="download31"  class="w-100">
            3.1
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download32"  class="w-100">
            3.2
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download33" class="w-100">
            3.3
          </v-btn>
        </v-col>
        <v-col  cols="3">
          <v-btn @click="download34" class="w-100">
            3.4
          </v-btn>
        </v-col>
        <v-col  cols="4">
          <v-btn @click="download35" class="w-100">
            3.5
          </v-btn>
        </v-col>
        <v-col  cols="4">
          <v-btn @click="download36" class="w-100">
            3.6
          </v-btn>
        </v-col>
        <v-col  cols="4">
          <v-btn @click="download37" class="w-100">
            3.7
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        4 - LOYIHALAR VA TIJORATLASHTIRISH
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="2.5">
          <v-btn @click="download41" class="w-100">
            4.1
          </v-btn>
        </v-col>
        <v-col   @click="download42" cols="2.5">
          <v-btn class="w-100">
            4.2
          </v-btn>
        </v-col>
        <v-col  @click="download43"  cols="2.5">
          <v-btn class="w-100">
            4.3
          </v-btn>
        </v-col>
        <v-col  @click="download44"  cols="2.5">
          <v-btn class="w-100">
            4.4
          </v-btn>
        </v-col>
        <v-col  @click="download45"  cols="2.5">
          <v-btn class="w-100">
            4.5
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        5 - IXTIROCHILIK VA RATSIONALIZATORLIK
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="2">
          <v-btn  @click="download51" class="w-100">
            5.1
          </v-btn>
        </v-col>
        <v-col  cols="2">
          <v-btn  @click="download52" class="w-100">
            5.2
          </v-btn>
        </v-col>
        <v-col  cols="2">
          <v-btn  @click="download53" class="w-100">
            5.3
          </v-btn>
        </v-col>
        <v-col  cols="2">
          <v-btn  @click="download54" class="w-100">
            5.4
          </v-btn>
        </v-col>
        <v-col  cols="2">
          <v-btn  @click="download55" class="w-100">
            5.5
          </v-btn>
        </v-col>
        <v-col  cols="2">
          <v-btn  @click="download56" class="w-100">
            5.6
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        6 - XALQARO XAMKORLIK MASALALARI
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="6">
          <v-btn  @click="download61" class="w-100">
            6.1
          </v-btn>
        </v-col>
        <v-col  cols="6">
          <v-btn  @click="download62" class="w-100">
            6.2
          </v-btn>
        </v-col>
      </v-row>

      <v-label class="align-start font-weight-bold text-black mt-5">
        7 - USTOZ-SHOGIRD TIZIMI
      </v-label>
      <v-row class="mt-1">
        <v-col  cols="6">
          <v-btn  @click="download71" class="w-100">
            7.1
          </v-btn>
        </v-col>
        <v-col  cols="6">
          <v-btn  @click="download81"  class="w-100">
            7.2
          </v-btn>
        </v-col>
      </v-row>

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
import url from "@/utils/url";

export default {
  data() {
    return{
      isUserAdmin: false,
      overlay: false,
      positions: ['Prorektorlar',
        'Fakultet dekanlari',
        'Kafedra mudirlari',
        'Fan doktori (professor)lar',
        'Fan nomzodi, PhD (dotsentlar)',
        'Katta o`qituvchilar','Assistentlar'],
      faculties: [],
      departments: [],
      userId: localStorage.getItem("user-userId"),
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
      const userId = item.userId;
      this.$router.push({path: `/admin/user/${userId}` })
    },

    deleteItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL +`/api/users/delete?userId=${this.editedItem.userId}`)
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


        axios.put(url.baseURL +"/api/users/admin?userId="+this.editedItem.userId, data)
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


        if (this.editedItem.roleName === 'User'){
          this.editedItem.role = 0
        } else if (this.editedItem.roleName === 'Admin'){
          this.editedItem.role = 1
        }
        let data = {
          'userId': this.editedItem.userId,
          'name': this.editedItem.name,
          'department': this.editedItem.department,
          'faculty': this.editedItem.faculty,
          'position': this.editedItem.position,
          'password': this.editedItem.password,
          'role': this.editedItem.role,
        }
        console.log(data)

        axios.post(url.baseURL +"/api/users/create?userId="+this.editedItem.userId, data)
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

    download11() {
      var urld = url.baseURL + "/api/exports/academics1";
      window.open(urld, 'download');
    },
    download12() {
      var urld = url.baseURL + "/api/exports/academics2";
      window.open(urld, 'download');
    },
    download13() {
      var urld = url.baseURL + "/api/exports/academics3";
      window.open(urld, 'download');
    },

    download21() {
      var urld = url.baseURL + "/api/exports/work1";
      window.open(urld, 'download');
    },
    download22() {
      var urld = url.baseURL + "/api/exports/work2";
      window.open(urld, 'download');
    },
    download23() {
      var urld = url.baseURL + "/api/exports/work3";
      window.open(urld, 'download');
    },
    download24() {
      var urld = url.baseURL + "/api/exports/work4";
      window.open(urld, 'download');
    },

    download31() {
      var urld = url.baseURL + "/api/exports/brains1";
      window.open(urld, 'download');
    },
    download32() {
      var urld = url.baseURL + "/api/exports/brains2";
      window.open(urld, 'download');
    },
    download33() {
      var urld = url.baseURL + "/api/exports/brains3";
      window.open(urld, 'download');
    },
    download34() {
      var urld = url.baseURL + "/api/exports/brains4";
      window.open(urld, 'download');
    },
    download35() {
      var urld = url.baseURL + "/api/exports/brains5";
      window.open(urld, 'download');
    },
    download36() {
      var urld = url.baseURL + "/api/exports/brains6";
      window.open(urld, 'download');
    },
    download37() {
      var urld = url.baseURL + "/api/exports/brains7";
      window.open(urld, 'download');
    },

    download41() {
      var urld = url.baseURL + "/api/exports/projects1";
      window.open(urld, 'download');
    },
    download42() {
      var urld = url.baseURL + "/api/exports/projects2";
      window.open(urld, 'download');
    },
    download43() {
      var urld = url.baseURL + "/api/exports/projects3";
      window.open(urld, 'download');
    },
    download44() {
      var urld = url.baseURL + "/api/exports/projects4";
      window.open(urld, 'download');
    },

    download51() {
      var urld = url.baseURL + "/api/exports/inventions1";
      window.open(urld, 'download');
    },
    download52() {
      var urld = url.baseURL + "/api/exports/inventions2";
      window.open(urld, 'download');
    },
    download53() {
      var urld = url.baseURL + "/api/exports/inventions3";
      window.open(urld, 'download');
    },
    download54() {
      var urld = url.baseURL + "/api/exports/inventions4";
      window.open(urld, 'download');
    },
    download55() {
      var urld = url.baseURL + "/api/exports/inventions5";
      window.open(urld, 'download');
    },
    download56() {
      var urld = url.baseURL + "/api/exports/inventions6";
      window.open(urld, 'download');
    },

    download61() {
      var urld = url.baseURL + "/api/exports/internationals1";
      window.open(urld, 'download');
    },
    download62() {
      var urld = url.baseURL + "/api/exports/internationals2";
      window.open(urld, 'download');
    },

    download81() {
      var urld = url.baseURL + "/api/exports/achievements";
      window.open(urld, 'download');
    },

    download71() {
      var urld = url.baseURL + "/api/exports/teachers";
      window.open(urld, 'download');
    },
  },

  async mounted() {

    let userData = localStorage.getItem("user-role")
    if(userData == 2){
      this.isUserAdmin = true
    }

    await axios
      .get(url.baseURL +`/api/users/admin?userId=${this.userId}&limit=20&offset=0`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {

          this.items.push(data[dataKey])

        }
      });

    await axios
      .get(url.baseURL +`/api/commons/faculty`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          console.log(data[dataKey])
          this.faculties.push(data[dataKey].faculty)
        }
      });

    await axios
      .get(url.baseURL +`/api/commons/department`)
      .then(response => {
        const data  = response.data
        for (const dataKey in data) {
          this.departments.push(data[dataKey].department)
        }
      });
  }
}
</script>

<style scoped>

</style>
