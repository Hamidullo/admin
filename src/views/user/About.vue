<template>
  <v-container class="px-6 mx-6 py-6 my-6" fluid>

  <v-row >

    <v-col class="mr-4" cols="4">
      <v-card
       class="mx-auto"
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
          <strong class="">
            Tug'ulgan sanasi:
          </strong>
          <h3 >
            {{editedItem.year}}
          </h3>
          <strong class="">
            Doimiy yashash manzili:
          </strong>
          <h4 class="my-4">
            {{editedItem.place}}
          </h4>
          <strong class="">
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
                color="primary"
                v-bind="props">
                Taxrirlash
              </v-btn>
            </template>
            <v-card>
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
                        label="Tug’ilgan joyi"
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.faculty"
                        label="Fakultet"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.department"
                        label="Kafedra">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.position"
                        label="Lavozim"
                        persistent-hint
                        required>
                    </v-text-field>
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
        </v-row>
        <!-- Dialog end -->

      </v-card>
    </v-col>

    <v-col >

      <v-row >
        <v-col>
          <v-card
           class="mx-auto"
           max-width="500"
           title="Diplomlar:"
           rounded="5">
            <v-card-text>
              <strong class="ml-2">
                Bakalavriat:
              </strong>
              <div class="ml-4">
                Tamomlagan OTM va yili, ta’lim yo’nalishi
              </div>
            </v-card-text>
            <v-card-text>
              <strong class="ml-2">
                Magistartura:
              </strong>
              <div class="ml-4">
                Tamomlagan OTM va yili, Mutaxasisligi
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
                    color="primary"
                    v-bind="props">
                    Taxrirlash
                  </v-btn>
                </template>
                <v-card>
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
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Tamomlagan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
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
                            label="Tamomlagan OTM"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Tamomlagan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
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
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogD = false">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogD = false">
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
            class="mx-auto"
            max-width="500"
            title=""
            rounded="5">
            <v-card-text>
              <strong class="ml-2">
                O’quv yiliga belgilangan dars mashg’ulotlari:
              </strong>
              <div class="ml-4 mt-2">
                Auditoriya mashg’ulotlari (xajmi / maruza/amaliyot/laboratoriya/seminar/ (kalendar reja yuklanadi))
              </div>
              <div class="ml-4">
                Auditoriyasiz mashg’ulotlar (----)
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
                    color="primary"
                    v-bind="props">
                    Taxrirlash
                  </v-btn>
                </template>
                <v-card>
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
                            label="Xajmi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Maruza">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
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
                            label="Kalendar reja"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
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
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogO = false">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogO = false">
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
  </v-container>
</template>

<script>
  import MyDialog from '@/components/MyDialog.vue';
  import axios from "axios";
  export default {
    components:{
      MyDialog
    },
    data: () => ({
      overlay: false,
      photo: "http://localhost:8080/uploads/photos/",
      messages: [
        { from: 'Tel:',  message: `+998901234567`,   color: 'deep-purple-lighten-1',},
        {from: 'Email:', message: 'test@mail.com',  color: 'green',},
        {from: 'Telegram:', message: '@admin',  color: 'blue',},
      ],
      dialog: false,
      editedItem: {
        id: 0,
        name: localStorage.getItem("user-name"),
        avatar: localStorage.getItem("user-avatar"),
        userId: localStorage.getItem("user-hemisId"),
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

      dialogD: false,
      dialogO: false,

    }),

    methods: {
      close () {
        this.dialog = false
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
        }
        console.log(this.getId())
        axios.put("http://localhost:8080/api/users/personal?userId=" + this.getId(), formData)
          .then(response => {
            console.log(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
        this.close()

      },

      getId(){
        let userId = localStorage.getItem("user-hemisId");
        return userId
      }
    },
    mounted(){
      axios
        .get(`http://localhost:8080/api/users/userPersonal?userId=${this.getId()}`)
        .then(response => {
          const data  = response.data
          for (const dataKey in data) {
            console.log(data[dataKey])
            this.editedItem = data[dataKey]

          }
        });
    }
  }
</script>

<style lang="scss" scoped>

</style>
