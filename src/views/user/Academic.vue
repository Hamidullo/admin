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
                          v-model="editedItem.type"
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
                          v-model="editedItem.seriesNumber"
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
                          v-model="editedItem.docNumber"
                          clearable
                          label="Raqami"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.year"
                          clearable
                          label="Diplom olingan yil"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.dateGiven"
                          clearable
                          label="Berilgan sanasi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.specialtyNumber"
                          clearable
                          label="Ixtisoslik raqami va nomi"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
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
        <v-card flat
        title="“TOP-1000” ro‘yxatiga kiruvchi xorijiy oliy ta’lim tashkilotlarida himoya qilgan">
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
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-select
                            label="OTM reytingi"
                            required
                            v-model="editedCItem.rating"
                            :items="['TOP-500', 'TOP-1000', 'TOP-1000 magistratura',]">
                          </v-select>
                        </v-col>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Diplom turi"
                          required
                          v-model="editedCItem.type"
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
                        md="6">
                        <v-text-field
                          v-model="editedCItem.year"
                          clearable
                          label="Diplom olingan yil"
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedCItem.typeNumber"
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
                            v-model="editedSItem.magazineName"
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
                            v-model="editedSItem.datePublishing"
                            clearable
                            required
                            label="Jurnal nasher etilgan sana">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.articleName"
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
                            label="«Scopus» qidiruv tizimlardagi internet manzili (giper xavolasi)"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.articleLanguage"
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
                            v-model="editedSItem.hIndex"
                            clearable
                            label="h-index"
                            persistent-hint
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedSItem.year"
                            clearable
                            label="Diplom olingan yil"
                            persistent-hint
                            required>
                          </v-text-field>
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
        size="64"
      ></v-progress-circular>
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

        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
          id: 0,
          name: '',
          type: '',
          seriesNumber: '',
          docNumber: '',
          dateGiven: '',
          specialtyNumber: '',
          departmentName: '',
          workStartND: '',
          year: '',
          userName: localStorage.getItem("user-name"),
          department: localStorage.getItem("user-department"),
          faculty: localStorage.getItem("user-faculty"),
          docDownload: null
        },
        defaultItem: {
          id: 0,
          name: '',
          type: '',
          seriesNumber: '',
          docNumber: '',
          dateGiven: '',
          univerType: '',
          specialtyNumber: '',
          departmentName: '',
          workStartND: '',
          year: '',
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
          name: '',
          country: '',
          university: '',
          rating: '',
          type: '',
          series: '',
          number: '',
          typeNumber: '',
          workStartND: '',
          year: '',
          docDownload: null
        },
        defaultCItem: {
          id: 0,
          name: '',
          country: '',
          university: '',
          rating: '',
          type: '',
          series: '',
          number: '',
          typeNumber: '',
          workStartND: '',
          year: '',
          docDownload: null
        },

        dialogS: false,
        dialogSDelete: false,
        editedSIndex: -1,
        editedSItem: {
          id: 0,
          name: '',
          magazineName: '',
          datePublishing: '',
          articleName: '',
          articleLanguage: '',
          articleUrl: '',
          hIndex: '',
          year: '',
          docDownload: null
        },
        defaultSItem: {
          id: 0,
          name: '',
          magazineName: '',
          datePublishing: '',
          articleName: '',
          articleLanguage: '',
          articleUrl: '',
          hIndex: '',
          year: '',
          docDownload: null
        },

        search: '',
        headers: [
          { key: 'type', title: 'Turi', align: 'start', sortable: false, },
          { key: 'seriesNumber', title: 'Seriyasi' },
          { key: 'dateGiven', title: 'Raqami' },
          { key: 'docNumber', title: 'Berilgan sana' },
          { key: 'specialtyNumber', title: 'Ixtisoslik raqami va nomi' },
          { key: 'departmentName', title: 'Mutaxassisligi nomi' },
          { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            davlati: 159,
            kunlar: 6.0,
            hajmi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            davlati: 237,
            kunlar: 9.0,
            hajmi: 37,
            sertifikat: 4.3,
          }
        ],

        searchC: '',
        headersC: [
          { title: 'Xorijiy davlat nomi', align: 'start', key: 'country',},
          { title: 'OTM nomi', align: 'start', key: 'university',},
          { title: 'Turi', align: 'start', key: 'type',},
          { key: 'seriesNumber', title: 'Seriyasi' },
          { key: 'dateGiven', title: 'Raqami' },
          { title: 'Mutaxassisligi nomi', align: 'start', key: 'typeNumber',},
          { title: 'Amallar',align: 'start', sortable: false, key: 'actions', },
        ],
        itemsC: [
        {
          name: 'Intel Core i9-11900K',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        },
        {
          name: 'AMD Ryzen 9 5950X',
          davlati: 8,
          kunlar: 16,
          hajmi: '3.5 GHz',
          sertifikat: '5.3 GHz',
        }
        ],

        searchS: '',
        headersS: [
          { key: 'magazineName', title: 'Jurnal nomi' },
          { key: 'datePublishing', title: 'Jurnalning nashr etilgan sanasi' },
          { key: 'articleName', title: 'Maqola nomi' },
          { key: 'articleLanguage', title: 'Maqola chop etilgan til' },
          { key: 'articleUrl', title: 'Maqolani giper Xavolasi' },
          { key: 'hIndex', title: 'h-index' },
          {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
        ],
        itemsS: [
          {
            name: 'Frozen Yogurt',
            davlati: 159,
            kunlar: 6.0,
            hajmi: 24,
            sertifikat: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            davlati: 237,
            kunlar: 9.0,
            hajmi: 37,
            sertifikat: 4.3,
          }
        ],
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
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    deleteCItemConfirm () {
      this.itemsC.splice(this.editedCIndex, 1)
      this.closeCDelete()
    },
    deleteSItemConfirm () {
      this.itemsS.splice(this.editedSIndex, 1)
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
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.overlay = true
        if(this.editedItem.type === "Fan doktorlik (DSc) diplomi"){
          this.editedItem.type = '1'
        } else if(this.editedItem.type === "Fan nomzodi (PhD) diplomi"){
          this.editedItem.type = '2'
        } else {
          this.editedItem.type = '3'
        }
        axios.post("http://localhost:8080/api/academics/create?userId=123456", this.editedItem)
          .then(response => {
            this.items.push(this.editedItem)
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
        Object.assign(this.itemsC[this.editedCIndex], this.editedCItem)
      } else {
        this.itemsC.push(this.editedCItem)
      }
      this.closeC()
    },
    saveS () {
      if (this.editedSIndex > -1) {
        Object.assign(this.itemsS[this.editedSIndex], this.editedSItem)
      } else {
        this.itemsS.push(this.editedSItem)
      }
      this.closeS()
    },

    downloadDoc(item) {

    }
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
  }
}
</script>

<style scoped>

</style>
