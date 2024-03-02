<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col cols="12">
        <v-card flat title="Ilmiy daraja yoki unvonlari">
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
                  <span class="text-h5">{{formTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          v-model="editedItem.name"
                          label="Unvonni tanlang"
                          required
                          :items="['Fan doktorlik (DSc) diplomi', 'Fan nomzodi (PhD) diplomi', 'Professor yoki dotsent - ilmiy unvoni',]">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.series"
                          clearable
                          required
                          label="Seriyasi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.number"
                          clearable
                          label="Raqami"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Diplom berilgan yil"
                          v-model="editedItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Diplom berilgan oy"
                          v-model="editedItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.dipType"
                          clearable
                          label="Ixtisoslik raqami va nomi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.departmentName"
                          clearable
                          label="Mutaxassisligi nomi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedItem.workStartND"
                          clearable
                          label="Ishga qabul qilinganligi to‘g‘risidagi buyruq raqami va sanasi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          show-size
                          v-if="!editedItem.docDownload"
                          v-model="editedItem.docDownload"
                          label="Diplom yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Diplom yuklash</v-btn>
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
            <v-dialog v-model="dialogDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Ilmiy daraja yoki unvonni o'chirishni hohlaysizmi?</v-card-title>
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

      <v-col cols="12">
        <v-card flat title="“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilgan">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogC" persistent
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
                  <span class="text-h5">{{ formCTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.country"
                          clearable
                          required
                          label="Davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.university"
                          clearable
                          required
                          label="OTM">
                      </v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-select
                            label="OTM reytingi"
                            v-model="editedCItem.rating"
                            :items="['TOP-500', 'TOP-1000', 'TOP-1000 magistratura',]">
                          </v-select>
                        </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Diplom turi"
                          required
                          v-model="editedCItem.dipType"
                          :items="['PhD (falsafa doktori yoki fan nomzodi)', 'DSc (fan doktori)', 'Magistratura diplom',]">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.series"
                          clearable
                          label="Diplom seriyasi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.number"
                          clearable
                          label="Diplom raqami"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Diplom berilgan yil"
                          v-model="editedItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Diplom berilgan oy"
                          v-model="editedItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.departmentName"
                          clearable
                          label="Mutaxassisligi raqami va nomi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedCItem.workStartND"
                          clearable
                          label="Ishga qabul qilinganligi to‘g‘risidagi buyruq raqami va sanasi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          show-size
                          v-if="!editedCItem.docDownload"
                          v-model="editedCItem.docDownload"
                          label="Diplom yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedCItem)">Diplom yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeC">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveC">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
              <v-dialog v-model="dialogCDelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilgan o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeCDelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteCItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
          </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchC"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>
        <v-data-table
          :headers="headersC"
          :items="itemsC"
          :search="searchC"
          item-value="name">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editCItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteCItem(item)">
              mdi-delete
            </v-icon>
          </template>
      </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card flat title="“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥ 5 dan yuqoriligi">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog
                v-model="dialogS" persistent
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
                    <span class="text-h5">{{ formSTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.name"
                            clearable
                            required
                            label="Jurnal nomi">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.dipType"
                            clearable
                            label="Maqola nomi"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.articleUrl"
                            clearable
                            label="«Scopus» qidiruv tizimlardagi manzili (giper xavolasi)"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.country"
                            clearable
                            label="Maqola chop etilgan til"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.number"
                            clearable
                            label="h-index"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Jurnal nashr etilgan yil"
                            v-model="editedItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Jurnal nashr etilgan oy"
                            v-model="editedItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            show-size
                            v-if="!editedSItem.docDownload"
                            v-model="editedSItem.docDownload"
                            label="Diplom yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedSItem)">Diplomni yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="closeS">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="saveS">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogSDelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥ 5 dan yuqoriligi o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeSDelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteSItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchS"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details>
            </v-text-field>
          </template>
          <v-data-table
            :headers="headersS"
            :items="itemsS"
            :search="searchS"
            item-value="name">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="editSItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                size="small"
                @click="deleteSItem(item)">
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data () {
      return {
        overlay: false,
        position: localStorage.getItem("user-position"),
        userId: localStorage.getItem("user-hemisId"),
        userName: localStorage.getItem("user-name"),
        years: [2023,2024],
        mounth: [1,2,3,4,5,6,7,8,9,10,11,12],

        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
          id: 0,
          type: 11,
          typeName: 'Ilmiy daraja yoki unvon',
          top: '',

          name: '',
          country: '',
          university: '',
          rating: '',
          dipType: '',
          series: '',
          number: '',

          departmentName: '',
          workStartND: '',
          year: 0,
          mounth: 0,
          news: '',
          statId: 0,
          newId: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          docDownload: null
        },
        defaultItem: {
          id: 0,
          type: 11,
          typeName: 'Ilmiy daraja yoki unvon',
          top: '',

          country: '',
          university: '',
          rating: '',
          dipType: '',
          dipSeries: '',
          dipNumber: '',
          departmentName: '',
          workStartND: '',

          year: 0,
          mounth: 0,
          news: '',
          statId: 0,
          newId: 0,
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          docDownload: null
        },

        dialogC: false,
        dialogCDelete: false,
        editedCIndex: -1,
        editedCItem: {
          id: 0,
          type: 12,
          typeName: '“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilgan',
          top: '',

          name: '',
          country: '',
          university: '',
          rating: '',
          dipType: '',
          series: '',
          number: '',

          departmentName: '',
          workStartND: '',
          year: 0,
          mounth: 0,
          news: '',
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          docDownload: null
        },
        defaultCItem: {
          id: 0,
          type: 12,
          typeName: '“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilgan',
          top: '',

          name: '',
          country: '',
          university: '',
          rating: '',
          dipType: '',
          series: '',
          number: '',

          departmentName: '',
          workStartND: '',
          year: 0,
          mounth: 0,
          news: '',
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          docDownload: null
        },

        dialogS: false,
        dialogSDelete: false,
        editedSIndex: -1,
        editedSItem: {
          id: 0,
          type: 13,
          typeName: '“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥ 5 dan yuqoriligi',
          top: '',

          name: '',
          country: '',
          university: '',
          rating: '',
          dipType: '',
          series: '',
          number: '',

          departmentName: '',
          workStartND: '',
          year: 0,
          mounth: 0,
          news: '',
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          docDownload: null
        },
        defaultSItem: {
          id: 0,
          type: 13,
          typeName: '“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥ 5 dan yuqoriligi',
          top: '',

          name: '',
          country: '',
          university: '',
          rating: '',
          dipType: '',
          series: '',
          number: '',

          departmentName: '',
          workStartND: '',
          year: 0,
          mounth: 0,
          news: '',
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          statId: 0,
          newId: 0,
          docDownload: null
        },

        search: '',
        headers: [
          { key: 'type', title: 'Turi', align: 'start', sortable: false, },
          { key: 'seriesNumber', title: 'Seriyasi' },
          { key: 'dateGiven', title: 'Raqami' },
          { key: 'docNumber', title: 'Berilgan yili' },
          { key: 'specialtyNumber', title: 'Ixtisoslik raqami va nomi' },
          { key: 'departmentName', title: 'Mutaxassisligi nomi' },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        items: [],

        searchC: '',
        headersC: [
          { key: 'name',title: 'Xorijiy davlat nomi', align: 'start',},
          { key: 'university', title: 'OTM nomi', align: 'start', },
          { key: 'type', title: 'Turi', align: 'start', },
          { key: 'seriesNumber', title: 'Seriyasi' },
          { key: 'dateGiven', title: 'Raqami' },
          { key: 'typeNumber', title: 'Mutaxassisligi nomi', align: 'start', },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false,  },
        ],
        itemsC: [],

        searchS: '',
        headersS: [
          { key: 'magazineName', title: 'Jurnal nomi' },
          { key: 'year', title: 'Jurnalning nashr etilgan yil' },
          { key: 'articleName', title: 'Maqola nomi' },
          { key: 'articleLanguage', title: 'Maqola chop etilgan til' },
          { key: 'articleUrl', title: 'Maqolani giper Xavolasi' },
          { key: 'hIndex', title: 'h-index' },
          { key: 'news', title: 'Hujjat holati' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsS: [],
      }
    },

  methods: {
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    editCItem (item) {
      this.editedCIndex = this.itemsC.indexOf(item)
      this.editedCItem = Object.assign({}, item)
      this.dialogC = true
    },
    editSItem (item) {
      this.editedSIndex = this.itemsS.indexOf(item)
      this.editedSItem = Object.assign({}, item)
      this.dialogS = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteCItem (item) {
      this.editedCIndex = this.itemsC.indexOf(item)
      this.editedCItem = Object.assign({}, item)
      this.dialogCDelete = true
    },
    deleteSItem (item) {
      this.editedSIndex = this.itemsS.indexOf(item)
      this.editedSItem = Object.assign({}, item)
      this.dialogSDelete = true
    },

    deleteItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/academics/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editItem.id}`);
          this.items.splice(this.editedIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDelete()
    },
    deleteCItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/academics/delete?id=${this.editedCItem.id}&newId=${this.editedCItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editCItem.id}`);
          this.itemsC.splice(this.editedCIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeCDelete()
    },
    deleteSItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/academics/delete?id=${this.editedSItem.id}&newId=${this.editedSItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editSItem.id}`);
          this.itemsS.splice(this.editedSIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeSDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeC () {
      this.dialogC = false
      this.$nextTick(() => {
        this.editedCItem = Object.assign({}, this.defaultCItem)
        this.editedCIndex = -1
      })
    },
    closeS () {
      this.dialogS = false
      this.$nextTick(() => {
        this.editedSItem = Object.assign({}, this.defaultSItem)
        this.editedSIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeCDelete () {
      this.dialogCDelete = false
      this.$nextTick(() => {
        this.editedCItem = Object.assign({}, this.defaultCItem)
        this.editedCIndex = -1
      })
    },
    closeSDelete () {
      this.dialogSDelete = false
      this.$nextTick(() => {
        this.editedSItem = Object.assign({}, this.defaultSItem)
        this.editedSIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('country', this.editedItem.country)
        formData.append('university', this.editedItem.university)
        formData.append('rating', this.editedItem.rating)
        formData.append('dipType', this.editedItem.dipType)
        formData.append('series', this.editedItem.series)
        formData.append('number', this.editedItem.number)
        formData.append('departmentName', this.editedItem.departmentName)
        formData.append('workStartND', this.editedItem.workStartND)
        formData.append('newId', this.editedItem.newId)

        axios.post("http://localhost:8080/api/academics/update?id="+this.editedItem.id, formData)
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
      } else {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('name', this.editedItem.name)
        formData.append('userName', this.userName)
        formData.append('type', this.editedItem.type)
        formData.append('typeName', this.editedItem.typeName)
        formData.append('country', this.editedItem.country)
        formData.append('university', this.editedItem.university)
        formData.append('rating', this.editedItem.rating)
        formData.append('dipType', this.editedItem.dipType)
        formData.append('series', this.editedItem.series)
        formData.append('number', this.editedItem.number)
        formData.append('departmentName', this.editedItem.departmentName)
        formData.append('workStartND', this.editedItem.workStartND)
        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)
        if (this.editedItem.name === 'Fan doktorlik (DSc) diplomi'){
          this.editedItem.top = '1'
        } else if (this.editedItem.name === 'Fan nomzodi (PhD) diplomi'){
          this.editedItem.top = '2'
        } else {
          this.editedItem.top = '2'
        }

        // files
        for (let file of this.editedItem.docDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/academics/create?userId="+this.userId, formData)
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
    saveC () {
      if (this.editedCIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('country', this.editedCItem.country)
        formData.append('university', this.editedCItem.university)
        formData.append('rating', this.editedCItem.rating)
        formData.append('dipType', this.editedCItem.dipType)
        formData.append('series', this.editedCItem.series)
        formData.append('number', this.editedCItem.number)
        formData.append('departmentName', this.editedCItem.departmentName)
        formData.append('workStartND', this.editedCItem.workStartND)
        formData.append('newId', this.editedCItem.newId)

        axios.post("http://localhost:8080/api/academics/update?id="+this.editedCItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsC[this.editedCIndex], this.editedCItem)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      } else {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('name', this.editedCItem.name)
        formData.append('userName', this.userName)
        formData.append('type', this.editedCItem.type)
        formData.append('typeName', this.editedCItem.typeName)
        formData.append('country', this.editedCItem.country)
        formData.append('university', this.editedCItem.university)
        formData.append('rating', this.editedCItem.rating)
        formData.append('dipType', this.editedCItem.dipType)
        formData.append('series', this.editedCItem.series)
        formData.append('number', this.editedCItem.number)
        formData.append('departmentName', this.editedCItem.departmentName)
        formData.append('workStartND', this.editedCItem.workStartND)
        formData.append('year', this.editedCItem.year)
        formData.append('mounth', this.editedCItem.mounth)
        formData.append('department', this.editedCItem.department)
        formData.append('faculty', this.editedCItem.faculty)

        // files
        for (let file of this.editedCItem.docDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/academics/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsC.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeC()
    },
    saveS () {
      if (this.editedSIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('country', this.editedSItem.country)
        formData.append('university', this.editedSItem.university)
        formData.append('rating', this.editedSItem.rating)
        formData.append('dipType', this.editedSItem.dipType)
        formData.append('series', this.editedSItem.series)
        formData.append('number', this.editedSItem.number)
        formData.append('departmentName', this.editedSItem.departmentName)
        formData.append('workStartND', this.editedSItem.workStartND)
        formData.append('newId', this.editedSItem.newId)

        axios.post("http://localhost:8080/api/academics/update?id="+this.editedSItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsS[this.editedSIndex], this.editedSItem)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      } else {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('name', this.editedSItem.name)
        formData.append('userName', this.userName)
        formData.append('type', this.editedSItem.type)
        formData.append('typeName', this.editedSItem.typeName)
        formData.append('country', this.editedSItem.country)
        formData.append('university', this.editedSItem.university)
        formData.append('rating', this.editedSItem.rating)
        formData.append('dipType', this.editedSItem.dipType)
        formData.append('series', this.editedSItem.series)
        formData.append('number', this.editedSItem.number)
        formData.append('departmentName', this.editedSItem.departmentName)
        formData.append('workStartND', this.editedSItem.workStartND)
        formData.append('year', this.editedSItem.year)
        formData.append('mounth', this.editedSItem.mounth)
        formData.append('department', this.editedSItem.department)
        formData.append('faculty', this.editedSItem.faculty)

        // files
        for (let file of this.editedSItem.docDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/academics/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsS.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeS()
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
    downloadDoc(item) {
      this.downloadWithAxios("http://localhost:8080/api/academics/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Ilmiy daraja yoki unvonini qo`shish' : 'Ilmiy daraja yoki unvonini taxrirlash'
    },
    formCTitle () {
      return this.editedQIndex === -1 ? '“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilganligi qo`shish' : '“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilganligi taxrirlash'
    },
    formSTitle () {
      return this.editedSIndex === -1 ? '“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥5 dan yuqoriligi qo`shish' : '“Scopus” bo‘yicha Xirsh indeksi (h-indeks) ≥5 dan yuqoriligi taxrirlash'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogC (val) {
      val || this.closeC()
    },
    dialogCDelete (val) {
      val || this.closeCDelete()
    },
    dialogS (val) {
      val || this.closeS()
    },
    dialogSDelete (val) {
      val || this.closeSDelete()
    },
  },

  mounted() {
    axios
      .get(`http://localhost:8080/api/academics/type?userId=${this.userId}&limit=10&offset=0&type=21`)
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
      .get(`http://localhost:8080/api/academics/type?userId=${this.userId}&limit=10&offset=0&type=22`)
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
          this.itemsC.push(data[dataKey])
        }
      });

    axios
      .get(`http://localhost:8080/api/academics/type?userId=${this.userId}&limit=10&offset=0&type=23`)
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
          this.itemsS.push(data[dataKey])
        }
      });

  }

}
</script>

<style scoped>

</style>
