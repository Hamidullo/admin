<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="“Scopus” bazalaridagi maqolalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogS"
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
                  <span class="text-h5">“Scopus” bazalaridagi maqola qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
                    @click="dialogS = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogS = false">
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
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
        ></v-data-table>
      </v-card>
      </v-col>


      <v-col>
        <v-card
        flat
        title="“Web of sciense” bazalaridagi maqolalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogW"
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
                  <span class="text-h5">“Web of sciense” bazalaridagi maqola qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
                    @click="dialogW = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogW = false">
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
        title="Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogX"
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
                  <span class="text-h5">Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi) qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
                    @click="dialogX = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogX = false">
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
        title="Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi)">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogR"
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
                  <span class="text-h5">Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi) qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
                    @click="dialogR = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogR = false">
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


    <v-row>
      <v-col>
        <v-card
        flat
        title="Xalqaro miqyosdagi anjumanlar">
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
                  <span class="text-h5">Xalqaro miqyosdagi anjumanlar qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
            v-model="searchA"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersA"
          :items="itemsA"
          :search="searchA"
        ></v-data-table>
      </v-card>
      </v-col>


      <v-col>
        <v-card
        flat
        title="Respublika miqyosidagi anjumanlar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogA"
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
                  <span class="text-h5">Respublika miqyosidagi anjumanlar qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
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
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          label="Maqola fayli"
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
                    @click="dialogA = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogA = false">
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
            v-model="searchG"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersG"
          :items="itemsG"
          :search="searchG"
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
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
          { key: 'raqami', title: 'Iqtiboslari soni' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan jurnal nomi' },
          { key: 'jurnal', title: 'Jurnal nashr etiladigan davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
        searchA: '',
        headersA: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'raqami', title: 'Nashr etilgan anjuman  nomi' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan sana' },
          { key: 'jurnal', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsA: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
        searchG: '',
        headersG: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Nomi',
          },
          { key: 'raqami', title: 'Nashr etilgan anjuman  nomi' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'jNomi', title: 'Nashr etilgan sana' },
          { key: 'jurnal', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
          { key: 'havola', title: 'Maqola joylashgan havola' },
          { key: 'fayil', title: 'Maqola fayli' },
        ],
        itemsG: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            jNomi: 4.0,
            jurnal: 1,
            havola: 1,
            fayil: 1,
          },
        ],
        dialogS: false,
        dialogW: false,
        dialogX: false,
        dialogR: false,
        dialogM: false,
        dialogA: false,
      }
    },
    
  }
</script>

<style scoped>

</style>
