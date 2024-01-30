<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>

      <v-col>
        <v-card
        flat
        title="Darsliklar">
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
                <span class="text-h5">Yangi darslik qo'shish:</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6">
                      <v-text-field
                        label="Nomi"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6">
                      <v-text-field
                        label="Mualliflar soni">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12">
                      <v-text-field
                        label="Mualliflar F.I.SH"
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Nashr etilgan yil"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Guvoxnoma raqami">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        label="Darslikni yuklash"
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
          </v-data-table>
        </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="O’quv qo’llanmalar">
        <template v-slot:append>
          <!-- Dialog start -->
      <v-row justify="center" class="mr-2">
        <v-dialog
          v-model="dialogQ"
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
              <span class="text-h5">O’quv qo’llanma qo'shish:</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Nomi"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Mualliflar soni">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12">
                    <v-text-field
                      label="Mualliflar F.I.SH"
                      persistent-hint
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Nashr etilgan yil"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Guvoxnoma raqami">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="O'quv qo'llanma yuklash"
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
                @click="dialogQ = false">
                Yopish
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialogQ = false">
                Saqlash
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchM"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersM"
          :items="itemsM"
          :search="searchM"
        ></v-data-table>
      </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Monografiyalar">
        <template v-slot:append>
          <!-- Dialog start -->
      <v-row justify="center" class="mr-2">
        <v-dialog
          v-model="dialogM"
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
              <span class="text-h5">Monografiya qo'shish:</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Nomi"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Mualliflar soni">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12">
                    <v-text-field
                      label="Mualliflar F.I.SH"
                      persistent-hint
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Nashr etilgan yil"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Grif raqami">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Monografiya yuklash"
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
                @click="dialogM = false">
                Yopish
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialogM = false">
                Saqlash
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchY"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersY"
          :items="itemsY"
          :search="searchY"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="Uslubiy ko’rsatma va majmualar">
        <template v-slot:append>
          <!-- Dialog start -->
      <v-row justify="center" class="mr-2">
        <v-dialog
          v-model="dialogK"
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
              <span class="text-h5">Uslubiy ko’rsatma va majmualar qo'shish:</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Nomi"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <v-text-field
                      label="Mualliflar soni">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12">
                    <v-text-field
                      label="Mualliflar F.I.SH"
                      persistent-hint
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Nashr etilgan yil"
                      required>
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Uslubiy kengash qarori raqami">
                  </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4">
                    <v-text-field
                      label="Monografiya yuklanadi"
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
                @click="dialogK = false">
                Yopish
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialogK = false">
                Saqlash
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchN"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersN"
          :items="itemsN"
          :search="searchN"
        ></v-data-table>
      </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Guvoxnoma raqami' },
          { key: 'darslik', title: 'Darslik yuklanadi' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchM: '',
        headersM: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Guvoxnoma raqami' },
          { key: 'darslik', title: 'O’quv qo’llanma' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchY: '',
        headersY: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Grif raqami' },
          { key: 'darslik', title: 'Monografiya yuklanadi' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        searchN: '',
        headersN: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan yili' },
          { key: 'raqam', title: 'Uslubiy kengash qarori raqami' },
          { key: 'darslik', title: 'Monografiya yuklanadi' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Eclair',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Cupcake',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Gingerbread',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Jelly bean',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
          {
            name: 'Lollipop',
            mSoni: 159,
            mNomi: 6.0,
            sana: 24,
            raqam: 4.0,
            darslik: 4.0,
          },
        ],
        dialog: false,
        dialogQ: false,
        dialogM: false,
        dialogK: false,
      }
    },
    
  }
</script>

<style scoped>

</style>
