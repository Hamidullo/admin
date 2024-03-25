<template>
  <v-container class="px-6 mx-6 py-6 my-6" fluid>

  <v-row >

    <v-col class="mr-4" cols="4">
      <v-card
       class="mx-auto bg-color-container"
       max-width="500"
       rounded="5">
        <v-img
          height="350"
          cover
          :src="photo + editedItem.avatar">
        </v-img>
        <v-card-text>
          <strong class="">
            F.I.SH:
          </strong>
          <strong>
            <h2 class="my-4" >
              {{editedItem.name}}
            </h2>
          </strong>
          <strong class="my-4">
            Tug'ulgan sanasi:
          </strong>
          <h3 class="my-4">
            {{editedItem.year}}
          </h3>
          <strong class="my-4">
            Doimiy yashash manzili:
          </strong>
          <h4 class="my-4">
            {{editedItem.place}}
          </h4>
          <strong class="my-4">
            Lavozimi:
          </strong>
          <div class="ml-2 mb-4">
            {{editedItem.position}}
          </div>
          <div class="ml-2 mb-4">
            {{editedItem.department}}
          </div>
          <div class="ml-2 mb-4">
            {{editedItem.faculty}}
          </div>
          <div class="font-weight-bold mt-4">
            Bog’lanish malumotlari:
          </div>
          <v-timeline density="compact" align="start">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>

        <!-- Dialog start -->
        <v-row justify="center" class="mb-4">
          <v-dialog
            v-model="dialog"
            persistent
            width="1024">
            <template v-slot:activator="{ props }">
              <v-btn
                color="teal-darken-2"
                v-bind="props">
                Taxrirlash
              </v-btn>
            </template>
            <v-card class="form-color">
              <v-card-title>
                <span class="text-h5">Shaxsiy ma'lumotlar</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="F.I.SH. (passport bo’yicha)"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.year"
                        label="Tug’ilgan yili">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8">
                      <v-text-field
                        v-model="editedItem.place"
                        label="Yashash manzili:"
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-select
                        label="Fakultet"
                        v-model="editedItem.faculty"
                        :items="faculties"
                        hide-details
                        variant="outlined">
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-select
                        label="Kafedra"
                        v-model="editedItem.department"
                        :items="departments"
                        hide-details
                        variant="outlined">
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-select
                        label="lavozim"
                        v-model="editedItem.position"
                        :items="positions"
                        hide-details
                        variant="outlined">
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.tel"
                        label="Tel:"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email:">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.telegram"
                        label="Telegram:"
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12">
                      <v-file-input
                        v-model="editedItem.newAvatar"
                        show-size
                        label="Rasmni tanlang">
                      </v-file-input>
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
        </v-row>
        <!-- Dialog end -->

      </v-card>
    </v-col>

    <v-col >

      <v-row >
        <v-col>
          <v-card
           class="mx-auto bg-color-container"
           max-width="500"
           title="Diplomlar:"
           rounded="5">
            <v-card-text>
              <strong class="ml-2">
                Bakalavriat:
              </strong>
              <div class="ml-4" v-if="!diploma.bach_inst">
                Tamomlagan OTM va yili, ta’lim yo’nalishi
              </div>
              <div class="ml-4" v-else>
                {{ diploma.bach_inst }} , {{ diploma.bach_year }} , {{ diploma.bach_direction }}
              </div>
            </v-card-text>
            <v-card-text>
              <strong class="ml-2">
                Magistartura:
              </strong>
              <div class="ml-4" v-if="!diploma.mast_inst">
                Tamomlagan OTM va yili, ta’lim yo’nalishi
              </div>
              <div class="ml-4" v-else>
                {{ diploma.mast_inst }} , {{ diploma.mast_year }} , {{ diploma.mast_direction }}
              </div>
            </v-card-text>

            <!-- Dialog start -->
            <v-row justify="center" class="mb-4 mt-2">
              <v-dialog
                v-model="dialogD"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="teal-darken-2"
                    v-bind="props">
                    Taxrirlash
                  </v-btn>
                </template>
                <v-card  class="form-color">
                  <v-card-title>
                    <span class="text-h5">Diplomlar:</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <strong>
                        Bakalavriat:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Tamomlagan OTM"
                            v-model="diploma.bach_inst"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="diploma.bach_year"
                            label="Tamomlagan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="diploma.bach_direction"
                            label="Ta’lim yo’nalishi"
                            persistent-hint
                            required>
                        </v-text-field>
                        </v-col>
                      </v-row>
                      <strong>
                        Magistartura:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="diploma.mast_inst"
                            label="Tamomlagan OTM"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="diploma.mast_year"
                            label="Tamomlagan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="diploma.mast_direction"
                            label="Mutaxasisligi"
                            persistent-hint
                            required>
                        </v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
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
            </v-row>
            <!-- Dialog end -->

          </v-card>
        </v-col>

        <v-col>
          <v-card
            class="mx-auto bg-color-container"
            max-width="500"
            title=""
            rounded="5">
            <v-card-text>
              <strong class="ml-2">
                O’quv yiliga belgilangan dars mashg’ulotlari:
              </strong>
              <div class="ml-4 mt-2" v-if="!aud.aud_training">
                Auditoriya mashg’ulotlari (xajmi / maruza/amaliyot/laboratoriya/seminar/ (kalendar reja yuklanadi))
              </div>
              <div class="ml-4 mt-2" v-else>
                Auditoriya mashg’ulotlari ( {{ aud.aud_training }} / {{ aud.aud_lecture }} / {{ aud.aud_practice }} / {{ aud.aud_laboratory }} / {{ aud.aud_seminar }} )
              </div>
              <div class="ml-4"  v-if="!aud.aud_without">
                Auditoriyasiz mashg’ulotlar (----)
              </div>
              <div class="ml-4"  v-else>
                Auditoriyasiz mashg’ulotlar ( {{ aud.aud_without }} )
              </div>
            </v-card-text>

            <!-- Dialog start -->
            <v-row justify="center" class="mb-4 mt-2">
              <v-dialog
                v-model="dialogO"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="teal-darken-2"
                    v-bind="props">
                    Taxrirlash
                  </v-btn>
                </template>
                <v-card  class="form-color">
                  <v-card-title>
                    <span class="text-h5">O’quv yiliga belgilangan dars mashg’ulotlari:</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <strong>
                        Auditoriya mashg’ulotlari:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_training"
                            label="Xajmi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_lecture"
                            label="Maruza">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_practice"
                            label="Amaliyot"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_laboratory"
                            label="Laboratoriya"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_seminar"
                            label="Seminar"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="aud.aud_doc"
                            label="Kalendar reja"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="aud.aud_without"
                            label="Auditoriyasiz mashg’ulotlar"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeO">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveO">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- Dialog end -->

          </v-card>
        </v-col>
      </v-row>

    </v-col>

  </v-row>

    <v-overlay
      :model-value="overlay"
      class="align-center justify-center">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
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

  </v-container>
</template>

<script>
  import MyDialog from '@/components/MyDialog.vue';
  import axios from "axios";
  import url from "@/utils/url";
  export default {
    components:{
      MyDialog
    },
    data: () => ({
      overlay: false,
      snackF: false,
      snackS: false,
      snackD: false,
      userId: localStorage.getItem("user-userId"),
      positions: ['Prorektorlar',
        'Fakultet dekanlari',
        'Kafedra mudirlari',
        'Fan doktori (professor)lar',
        'Fan nomzodi, PhD (dotsentlar)',
        'Katta o`qituvchilar','Assistentlar'],
      photo: "http://172.16.10.5:3002/uploads/photos/",
      faculties: [],
      departments: [],
      messages: [
        { from: 'Tel:',  message: ``,   color: 'deep-purple-lighten-1',},
        {from: 'Email:', message: '',  color: 'green',},
        {from: 'Telegram:', message: '',  color: 'blue',},
      ],
      dialog: false,
      editedItem: {
        id: 0,
        name: localStorage.getItem("user-name"),
        avatar: localStorage.getItem("user-avatar"),
        userId: localStorage.getItem("user-userId"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        position: '',
        place: '',
        year: '',
        tel: '',
        email: '',
        telegram: '',
        time: '',
        newAvatar: null
      },
      diploma: {
        bach_inst: '',
        bach_year: '',
        bach_direction: '',
        mast_inst: '',
        mast_year: '',
        mast_direction: '',
      },
      aud: {
        aud_training: '',
        aud_lecture: '',
        aud_practice: '',
        aud_laboratory: '',
        aud_seminar: '',
        aud_cal_palne: '',
        aud_without: '',
        aud_doc: '',
      },

      dialogD: false,
      dialogO: false,

    }),

    methods: {

      close () {
        this.dialog = false
      },
      closeD () {
        this.dialogD = false
      },
      closeO () {
        this.dialogO = false
      },

      save () {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.editedItem.userId)
        formData.append('name', this.editedItem.name)
        formData.append('year', this.editedItem.year)
        formData.append('place', this.editedItem.place)

        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)
        formData.append('position', this.editedItem.position)
        formData.append('tel', this.editedItem.tel)
        formData.append('email', this.editedItem.email)
        formData.append('telegram', this.editedItem.telegram)

        if (this.editedItem.newAvatar){
          // files
          for (let file of this.editedItem.newAvatar) {
            formData.append("avatar", file, file.name);
          }
        } else {
          formData.append('avatar', this.editedItem.avatar)
        }
        console.log(this.getId())
        axios.put(url.baseURL + "/api/users/personal?userId=" + this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.overlay = false
            this.messages[0].message = response.data.tel
            this.messages[1].message = response.data.email
            this.messages[2].message = response.data.telegram

            this.snackS = true;
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            this.snackF = true;
            console.error("There was an error!", error);
          });
        this.close()

      },
      saveD () {
        this.overlay = true
        var data  = {
          'bach_inst': this.diploma.bach_inst,
          'bach_year': this.diploma.bach_year,
          'bach_direction': this.diploma.bach_direction,
          'mast_inst': this.diploma.mast_inst,
          'mast_year': this.diploma.mast_year,
          'mast_direction': this.diploma.mast_direction
        }

        console.log(this.getId())
        axios.put(url.baseURL + "/api/users/diploma?userId=" + this.userId, data)
          .then(response => {
            console.log(response.data)
            this.overlay = false
            this.snackS = true;
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            this.snackF = true;
            console.error("There was an error!", error);
          });
        this.closeD()

      },
      saveO () {
        this.overlay = true
        var data  = {
          'aud_training': this.aud.aud_training,
          'aud_lecture': this.aud.aud_lecture,
          'aud_practice': this.aud.aud_practice,
          'aud_laboratory': this.aud.aud_laboratory,
          'aud_seminar': this.aud.aud_seminar,
          'aud_cal_palne': this.aud.aud_cal_palne,
          'aud_without': this.aud.aud_without
        }

        console.log(this.getId())
        axios.put(url.baseURL + "/api/users/training?userId=" + this.userId, data)
          .then(response => {
            console.log(response.data)
            this.overlay = false
            this.snackS = true;
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            this.snackF = true;
            console.error("There was an error!", error);
          });
        this.closeO()

      },


      getId(){
        let userId = localStorage.getItem("user-userId");
        return userId
      }
    },
    async mounted(){
      await axios
        .get(url.baseURL + `/api/users/personal?userId=${this.getId()}`)
        .then(response => {
          const data  = response.data
          console.log(data)
          for (const dataKey in data) {

            this.editedItem = data[dataKey]
            this.messages[0].message = data[dataKey].tel
            this.messages[1].message = data[dataKey].email
            this.messages[2].message = data[dataKey].telegram
            localStorage.setItem("user-avatar",data[dataKey].avatar)

          }
        });

      await axios
        .get(url.baseURL + `/api/users/diploma?userId=${this.getId()}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {

            this.diploma = data[dataKey]

          }
        });

      await axios
        .get(url.baseURL + `/api/users/training?userId=${this.getId()}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {

            this.aud = data[dataKey]

          }
        });

      await axios
        .get(url.baseURL + `/api/commons/faculty`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            console.log(data[dataKey])
            this.faculties.push(data[dataKey].faculty)
          }
        });

      await axios
        .get(url.baseURL + `/api/commons/department`)
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
.bg-color-container{
  background-color: #26A69A;
  color: white;
}
.form-color{
  background-color: #00695C;
  color: white;
}
</style>
