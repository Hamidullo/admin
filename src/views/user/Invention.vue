<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Ixtiro">
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
                  <span class="text-h5">Ixtiro qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent yuklandi">
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
        title="Ixtiro-foydali modellari">
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
                  <span class="text-h5">Ixtiro-foydali modellari qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent yuklandi">
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
        title="Selektsiya yutuqlari">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogD"
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
                  <span class="text-h5">Selektsiya yutug'i qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent yuklandi">
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
        title="Sanoat namunalari">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogZ"
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
                  <span class="text-h5">Sanoat namunalari qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Patent yuklandi">
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
                    @click="dialogZ = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogZ= false">
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
        title="AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar">
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
                  <span class="text-h5">AKT ga oid dasturiy maxsulotlar uchun guvoxnoma qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Guvoxnoma nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Guvoxnoma raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Guvoxnoma yuklandi">
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
        title="Mualliflik xuquqni ximoya qiluvchi guvoxnomalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogC"
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
                  <span class="text-h5">Mualliflik xuquqni ximoya qiluvchi guvoxnoma qo'shish:</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Guvoxnoma nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Guvoxnoma raqami">
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
                        md="6">
                        <v-text-field
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          label="Guvoxnoma yuklandi">
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
                    @click="dialogC = false">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogC = false">
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
        dialogS: false,
        dialogA: false,
        dialogD: false,
        dialogZ: false,
        dialogX: false,
        dialogC: false,
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchM: '',
        headersM: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchY: '',
        headersY: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchN: '',
        headersN: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Patent nomi',
          },
          { key: 'raqami', title: 'Patent raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Patent yuklanadi' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchA: '',
        headersA: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Guvoxnoma nomi',
          },
          { key: 'raqami', title: 'Guvoxnoma raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Guvoxnoma yuklanadi' },
        ],
        itemsA: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
        searchG: '',
        headersG: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Guvoxnoma nomi',
          },
          { key: 'raqami', title: 'Guvoxnoma raqami' },
          { key: 'mSoni', title: 'Mualliflar soni' },
          { key: 'mNomi', title: 'Mualliflar F.I.Sh' },
          { key: 'sana', title: 'Nashr etilgan sana' },
          { key: 'patent', title: 'Guvoxnoma yuklanadi' },
        ],
        itemsG: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
            patent: 1,
          },
        ],
      }
    },
    
  }
</script>

<style scoped>

</style>
