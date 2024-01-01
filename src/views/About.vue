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
          <div class="font-weight-bold">
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
                Lavozimi:
              </strong>
              <div class="ml-4">
                assistant, katta o’qituvchi, v.b.dotsent
              </div>
            </v-card-text> 
            <v-card-text>
              <strong class="ml-2">
                h-index:
              </strong>
              <div class="ml-4">
                scopus/google scholar/boshqalar
              </div>
            </v-card-text>  
            <v-card-text>
              <strong class="ml-2">
                O’quv yiliga belgilangan dars mashg’ulotlari:
              </strong>
              <div class="ml-4">
                Auditoriya mashg’ulotlari (xajmi / maruza/amaliyot/laboratoriya/seminar/ (kalendar reja yuklanadi))
              </div>
              <div class="ml-4">
                Auditoriyasiz mashg’ulotlar (----)
              </div>
            </v-card-text>  
          </v-card>
        </v-col>
      </v-row>

    </v-col>

  </v-row>
  </v-container>
</template>

<script>
  export default {
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
    })
  }
</script>

<style lang="scss" scoped>

</style>