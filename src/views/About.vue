<template>
  <v-container 
  class="px-6 mx-6 py-6 my-6"
  fluid>

  <v-row >

    <v-col class="mr-4" cols="4">
      <v-card 
       class="mx-auto"
       max-width="400"
       rounded="5">
        <v-img
         height="350"
         cover
         src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        </v-img>
        <v-card-text>
          <strong>
            <h2 class="my-4">
              F.I.Sh (passport bo’yicha)
            </h2>
          </strong>
          <h3>
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
          <strong class="">
            h-index:
          </strong>
          <div class="ml-2">
            scopus/google scholar/boshqalar
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
                      cols="12"
                      sm="6"
                      md="4">
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
                      md="4">
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
           max-width="400"
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
           max-width="400"
           title="Ilmiy darajasi:"
           rounded="5">
            <v-card-text>
              <strong class="ml-2">
                Tayanch doktorantura:
              </strong>
              <div class="ml-4">
                Ximoya qilgan OTM va yili, Ixtisoslik shifri va nomi
              </div>
            </v-card-text> 
            <v-card-text>
              <strong class="ml-2">
                Doktorantura:
              </strong>
              <div class="ml-4">
                Ximoya qilgan OTM va yili, Ixtisoslik shifri va nomi 
              </div>
            </v-card-text>  
            
            <!-- Dialog start -->
            <v-row justify="center" class="mb-4 mt-2">
              <v-dialog
                v-model="dialogI"
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
                    <span class="text-h5">Ilmiy daraja:</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <strong>
                        Tayanch doktorantura:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ximoya qilgan OTM"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ximoya qilgan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ixtisoslik shifri va nomi"
                            persistent-hint
                            required>
                        </v-text-field>
                        </v-col>
                      </v-row>
                      <strong>
                        Doktorantura:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ximoya qilgan OTM"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ximoya qilgan yili">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            label="Ixtisoslik shifri va nomi"
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
                      @click="dialogI = false">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogI = false">
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

      <v-row>
        <v-col>
          <v-card 
           class="mx-auto"
           max-width="400"
           title="Ilmiy unvoni:"
           rounded="5">
            <v-card-text>
              <strong class="ml-2">
                Dotsent:
              </strong>
              <div class="ml-4">
                unvor berilgan yil va Ixtisoslik shifri va nomi
              </div>
            </v-card-text> 
            <v-card-text>
              <strong class="ml-2">
                Professor:
              </strong>
              <div class="ml-4">
                unvor berilgan yil va Ixtisoslik shifri va nomi
              </div>
            </v-card-text>  
            <v-card-text>
              <strong class="ml-2">
                Akademik:
              </strong>
              <div class="ml-4">
                unvor berilgan yil va Ixtisoslik shifri va nomi
              </div>
            </v-card-text>  
            
            <!-- Dialog start -->
            <v-row justify="center" class="mb-4 mt-2">
              <v-dialog
                v-model="dialogU"
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
                    <span class="text-h5">Ilmiy unvoni:</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <strong>
                        Dotsent:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Unvor berilgan yil"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik shifri">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik nomi"
                            persistent-hint
                            required>
                        </v-text-field>
                        </v-col>
                      </v-row>
                      <strong>
                        Professor:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Unvor berilgan yil"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik shifri">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik nomi"
                            persistent-hint
                            required>
                        </v-text-field>
                        </v-col>
                      </v-row>
                      <strong>
                        Akademik:
                      </strong>
                      <v-row class="mt-2">
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Unvor berilgan yil"
                            required>
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik shifri">
                        </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            label="Ixtisoslik nomi"
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
                      @click="dialogU = false">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialogU = false">
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
           max-width="400"
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
      messages: [
        {
          from: 'Tel:',
          message: `+998901234567`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'Email:',
          message: 'test@mail.com',
          time: '10:37am',
          color: 'green',
        }
      ],
      dialog: false,
      dialogD: false,
      dialogI: false,
      dialogU: false,
      dialogO: false,
    }),
  }
</script>

<style lang="scss" scoped>

</style>