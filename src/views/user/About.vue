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
          src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg">
        </v-img>
        <v-card-text>
          <strong>
            <h2 class="my-4" >
              F.I.SH
            </h2>
          </strong>
          <h3 >
            Tug’ilgan yili va joyi
          </h3>
          <h4 class="my-4">
            Doimiy yashash manzili
          </h4>
          <strong class="">
            Lavozimi:
          </strong>
          <div class="ml-2 mb-4">
            assistant, katta o’qituvchi, v.b.dotsent
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
                        label="F.I.SH. (passport bo’yicha)"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Tug’ilgan yili">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="8">
                      <v-text-field
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
                        label="Fakultet"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Kafedra">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Lavozim"
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="h-index"
                        type="text"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Tel:"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Email:">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Telegram:"
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
                  @click="dialog = false">
                  Yopish
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="dialog = false">
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
  </v-container>
</template>

<script>
  import MyDialog from '@/components/MyDialog.vue';
  export default {
    components:{
      MyDialog
    },
    data: () => ({
      name: localStorage.getItem("user-name"),
      avatar: "http://localhost:8080/uploads/photos/" + localStorage.getItem("user-avatar"),
      userId: localStorage.getItem("user-hemisId"),
      messages: [
        { from: 'Tel:',  message: `+998901234567`,   color: 'deep-purple-lighten-1',},
        {from: 'Email:', message: 'test@mail.com',  color: 'green',},
        {from: 'Telegram:', message: '@admin',  color: 'blue',},
        {from: 'Bog`lanish vaqti:', message: 'Dushanba ~ Juma (10:00~17:00)',  color: 'red',}
      ],
      dialog: false,
      dialogD: false,
      dialogO: false,

    }),
  }
</script>

<style lang="scss" scoped>

</style>
