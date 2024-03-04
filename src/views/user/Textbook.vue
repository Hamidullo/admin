<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col>
        <v-card flat title="Darsliklar">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
            <v-dialog v-model="dialog" persistent width="1024">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">
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
                      <v-text-field
                        v-model="editedItem.workName"
                        clearable
                        required
                        label="Nomi">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6">
                      <v-text-field
                        v-model="editedItem.workAuthorCount"
                        type="number"
                        clearable
                        required
                        label="Mualliflar soni">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12">
                      <v-text-field
                        label="Ham mualliflar F.I.SH"
                        v-model="editedItem.workAuthorName"
                        clearable
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="3">
                      <v-select
                        label="Nashr etilgan yil"
                        v-model="editedItem.year"
                        :items="years">
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="3">
                      <v-select
                        label="Nashr etilgan oy"
                        v-model="editedItem.mounth"
                        :items="mounth">
                      </v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6">
                      <v-text-field
                        clearable
                        required
                        v-model="editedItem.workNumber"
                        label="Guvoxnoma raqami">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12">
                      <v-file-input
                        v-if="!editedItem.workDownload"
                        v-model="editedItem.workDownload"
                        show-size
                        label="Darslik yuklash">
                      </v-file-input>
                      <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Darslikni yuklash</v-btn>
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
                  Bekor qilish
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
               <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Darslikni o'chirishni hohlaysizmi?</v-card-title>
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

      <v-col>
        <v-card flat title="O’quv qo’llanmalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogQ" persistent
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
                  <span class="text-h5">{{formQTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedQItem.workName"
                          clearable
                          required
                          label="Nomi">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedQItem.workAuthorCount"
                          type="number"
                          clearable
                          required
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Ham mualliflar F.I.SH"
                          v-model="editedQItem.workAuthorName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan yil"
                          v-model="editedQItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan oy"
                          v-model="editedQItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          required
                          v-model="editedQItem.workNumber"
                          label="Guvoxnoma raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedQItem.workDownload"
                          v-model="editedQItem.workDownload"
                          show-size
                          label="O'quv qo'llanma yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedQItem)">O'quv qo'llanmani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeQ">
                    Bekor qilish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveQ">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogQDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">O’quv qo’llanmalar o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeQDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteQItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchQ"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details>
          </v-text-field>
        </template>
        <v-data-table
          :headers="headersQ"
          :items="itemsQ"
          :search="searchQ">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editQItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteQItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card flat title="Monografiyalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogM" persistent
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
                  <span class="text-h5">{{formMTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.workName"
                          label="Nomi"
                          clearable
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.workAuthorCount"
                          clearable
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Ham mualliflar F.I.SH"
                          v-model="editedMItem.workAuthorName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan yil"
                          v-model="editedMItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan oy"
                          v-model="editedMItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          v-model="editedMItem.workNumber"
                          label="Grif raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedMItem.workDownload"
                          v-model="editedMItem.workDownload"
                          show-size
                          label="Monografiya yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedMItem)">Monografiyani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeM">
                    Bekor qilish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveM">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogMDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Monografiyalar o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeMDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteMItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
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
          :search="searchM">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editMItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteMItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card flat title="Uslubiy ko’rsatma va majmualar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogK" persistent
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
                  <span class="text-h5">{{formKTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedKItem.workName"
                          label="Nomi"
                          clearable
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedKItem.workAuthorCount"
                          clearable
                          required
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Ham mualliflar F.I.SH"
                          v-model="editedKItem.workAuthorName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan yil"
                          v-model="editedKItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan oy"
                          v-model="editedKItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          v-model="editedKItem.workNumber"
                          label="Uslubiy kengash qarori raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          show-size
                          v-if="!editedKItem.workDownload"
                          v-model="editedKItem.workDownload"
                          label="Uslubiy ko'rsatma yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedKItem)">Uslubiy ko'rsatmani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeK">
                    Bekor qilish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveK">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogKDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Uslubiy ko’rsatma va majmualar o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeKDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteKItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchK"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersK"
          :items="itemsK"
          :search="searchK">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editKItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteKItem(item)">
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
      userId: localStorage.getItem("user-hemisId"),
      userName: localStorage.getItem("user-name"),
      years: [2023,2024],
      mounth: [1,2,3,4,5,6,7,8,9,10,11,12],

      search: '',
      headers: [
        { key: 'workName', title: 'Nomi', align: 'start', sortable: false, },
        { key: 'workAuthorCount', title: 'Mualliflar soni' },
        { key: 'workAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yili' },
        { key: 'workNumber', title: 'Guvoxnoma raqami' },
        { key: 'news', title: 'Hujjat holati' },
        {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      items: [],

      searchQ: '',
      headersQ: [
        { key: 'workName', title: 'Nomi', align: 'start', sortable: false, },
        { key: 'workAuthorCount', title: 'Mualliflar soni' },
        { key: 'workAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yili' },
        { key: 'workNumber', title: 'Guvoxnoma raqami' },
        { key: 'news', title: 'Hujjat holati' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
      ],
      itemsQ: [],

      searchM: '',
      headersM: [
        { key: 'workName', title: 'Nomi', align: 'start', sortable: false, },
        { key: 'workAuthorCount', title: 'Mualliflar soni' },
        { key: 'workAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yili' },
        { key: 'workNumber', title: 'Grif raqami' },
        { key: 'news', title: 'Hujjat holati' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
      ],
      itemsM: [],

      searchK: '',
      headersK: [
        { key: 'workName', title: 'Nomi', align: 'start', sortable: false, },
        { key: 'workAuthorCount', title: 'Mualliflar soni' },
        { key: 'workAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yili' },
        { key: 'workNumber', title: 'Uslubiy kengash qarori raqami' },
        { key: 'news', title: 'Hujjat holati' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
      ],
      itemsK: [],

      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        id: 0,
        workName: '',
        workType: 21,
        workTypeName: 'Darslik',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        workDownload: null
      },
      defaultItem: {
        id: 0,
        workName: '',
        workType: 21,
        workTypeName: 'Darslik',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        workDownload: null
      },

      dialogQ: false,
      dialogQDelete: false,
      editedQIndex: -1,
      editedQItem: {
        id: 0,
        workName: '',
        workType: 22,
        workTypeName: 'O’quv qo’llanma',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },
      defaultQItem: {
        id: 0,
        workName: '',
        workType: 22,
        workTypeName: 'O’quv qo’llanma',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },

      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        workName: '',
        workType: 23,
        workTypeName: 'Monografiya',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        workYear: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },
      defaultMItem: {
        id: 0,
        workName: '',
        workType: 23,
        workTypeName: 'Monografiya',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        workYear: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },

      dialogK: false,
      dialogKDelete: false,
      editedKIndex: -1,
      editedKItem: {
        id: 0,
        workName: '',
        workType: 24,
        workTypeName: 'Uslubiy ko’rsatma va majmualar',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        workYear: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },
      defaultKItem: {
        id: 0,
        workName: '',
        workType: 24,
        workTypeName: 'Uslubiy ko’rsatma va majmualar',
        workAuthorCount: 0,
        workAuthorName: '',
        workNumber: '',
        workYear: '',
        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        workDownload: null
      },
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Yangi darslik qo`shish' : 'Darslikni taxrirlash'
    },
    formQTitle () {
      return this.editedQIndex === -1 ? 'Yangi o`quv qo`llanma qo`shish' : 'O`quv qo`llanmani taxrirlash'
    },
    formMTitle () {
      return this.editedMIndex === -1 ? 'Yangi monorafiya qo`shish' : 'Monografiyani taxrirlash'
    },
    formKTitle () {
      return this.editedKIndex === -1 ? 'Yangi uslubiy ko’rsatma va majmualar qo`shish' : 'Uslubiy ko’rsatma va majmualar taxrirlash'
    },
  },

  methods: {

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    editQItem (item) {
      this.editedQIndex = this.itemsQ.indexOf(item)
      this.editedQItem = Object.assign({}, item)
      this.dialogQ = true
    },
    editMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogM = true
    },
    editKItem (item) {
      this.editedKIndex = this.itemsK.indexOf(item)
      this.editedKItem = Object.assign({}, item)
      this.dialogK = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteQItem (item) {
      this.editedQIndex = this.itemsQ.indexOf(item)
      this.editedQItem = Object.assign({}, item)
      this.dialogQDelete = true
    },
    deleteMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogMDelete = true
    },
    deleteKItem (item) {
      this.editedKIndex = this.itemsK.indexOf(item)
      this.editedKItem = Object.assign({}, item)
      this.dialogKDelete = true
    },

    deleteItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/works/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
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
    deleteQItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/works/delete?id=${this.editedQItem.id}&newId=${this.editedQItem.newId}`)
      .then(response => {
        console.log(`Deleteditem with ID ${this.editedQItem.id}`);
        this.itemsQ.splice(this.editedQIndex, 1)
        this.overlay = false
      })
      .catch(error => {
        console.error(error);
        this.overlay = false
      });
      this.closeQDelete()
    },
    deleteMItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/works/delete?id=${this.editedMItem.id}&newId=${this.editedMItem.newId}`)
      .then(response => {
        console.log(`Deleteditem with ID ${this.editedMItem.id}`);
        this.itemsM.splice(this.editedMIndex, 1)
        this.overlay = false
      })
      .catch(error => {
        console.error(error);
        this.overlay = false
      });
      this.closeMDelete()
    },
    deleteKItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/works/delete?id=${this.editedKItem.id}&newId=${this.editedKItem.newId}`)
      .then(response => {
        console.log(`Deleteditem with ID ${this.editedKItem.id}`);
        this.itemsK.splice(this.editedKIndex, 1)
        this.overlay = false
      })
      .catch(error => {
        console.error(error);
        this.overlay = false
      });
      this.closeKDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeQ () {
      this.dialogQ = false
      this.$nextTick(() => {
        this.editedQItem = Object.assign({}, this.defaultQItem)
        this.editedQIndex = -1
      })
    },
    closeM () {
      this.dialogM = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeK () {
      this.dialogK = false
      this.$nextTick(() => {
        this.editedKItem = Object.assign({}, this.defaultKItem)
        this.editedKIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeQDelete () {
      this.dialogQDelete = false
      this.$nextTick(() => {
        this.editedQItem = Object.assign({}, this.defaultQItem)
        this.editedQIndex = -1
      })
    },
    closeMDelete () {
      this.dialogMDelete = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeKDelete () {
      this.dialogKDelete = false
      this.$nextTick(() => {
        this.editedKItem = Object.assign({}, this.defaultKItem)
        this.editedKIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('workName', this.editedItem.workName)
        formData.append('workAuthorCount', this.editedItem.workAuthorCount)
        formData.append('workAuthorName', this.editedItem.workAuthorName)
        formData.append('workNumber', this.editedItem.workNumber)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/works/update?id="+this.editedItem.id, formData)
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
      } else
       {
        this.overlay = true
        let formData = new FormData();
        formData.append('userId', this.userId)
        formData.append('name', this.editedItem.workName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedItem.workType)
        formData.append('authorCount', this.editedItem.workAuthorCount)
        formData.append('authorName', this.editedItem.workAuthorName)
        formData.append('number', this.editedItem.workNumber)
         formData.append('typeName', this.editedItem.workTypeName)
         formData.append('year', this.editedItem.year)
         formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)

        // files
        for (let file of this.editedItem.workDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/works/create?userId="+this.userId, formData)
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
    saveQ () {
      if (this.editedQIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('workName', this.editedItem.workName)
        formData.append('workAuthorCount', this.editedItem.workAuthorCount)
        formData.append('workAuthorName', this.editedItem.workAuthorName)
        formData.append('workNumber', this.editedItem.workNumber)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/works/update?id="+this.editedQItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsQ[this.editedQIndex], this.editedQItem)
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
        formData.append('name', this.editedQItem.workName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedQItem.workType)
        formData.append('authorCount', this.editedQItem.workAuthorCount)
        formData.append('authorName', this.editedQItem.workAuthorName)
        formData.append('number', this.editedQItem.workNumber)
        formData.append('typeName', this.editedItem.workTypeName)
        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedQItem.department)
        formData.append('faculty', this.editedQItem.faculty)

        // files
        for (let file of this.editedQItem.workDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/works/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsQ.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeQ()
    },
    saveM () {
      if (this.editedMIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('workName', this.editedItem.workName)
        formData.append('workAuthorCount', this.editedItem.workAuthorCount)
        formData.append('workAuthorName', this.editedItem.workAuthorName)
        formData.append('workNumber', this.editedItem.workNumber)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/works/update?id="+this.editedMItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.items[this.editedIndex], this.editedMItem)
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
        formData.append('name', this.editedMItem.workName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedMItem.workType)
        formData.append('authorCount', this.editedMItem.workAuthorCount)
        formData.append('authorName', this.editedMItem.workAuthorName)
        formData.append('number', this.editedMItem.workNumber)
        formData.append('typeName', this.editedItem.workTypeName)
        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedMItem.department)
        formData.append('faculty', this.editedMItem.faculty)

        // files
        for (let file of this.editedMItem.workDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/works/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsM.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeM()
    },
    saveK () {
      if (this.editedKIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('workName', this.editedItem.workName)
        formData.append('workAuthorCount', this.editedItem.workAuthorCount)
        formData.append('workAuthorName', this.editedItem.workAuthorName)
        formData.append('workNumber', this.editedItem.workNumber)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/works/update?id="+this.editedKItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.items[this.editedIndex], this.editedKItem)
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
        formData.append('name', this.editedKItem.workName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedKItem.workType)
        formData.append('authorCount', this.editedKItem.workAuthorCount)
        formData.append('authorName', this.editedKItem.workAuthorName)
        formData.append('number', this.editedKItem.workNumber)
        formData.append('typeName', this.editedItem.workTypeName)
        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedKItem.department)
        formData.append('faculty', this.editedKItem.faculty)

        // files
        for (let file of this.editedKItem.workDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/works/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsK.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeK()
    },

    forceFileDownload(response, title) {
      console.log(title)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios(url, title) {
      console.log(url)
      console.log("Download con")
      axios({
        method: 'get',
        url,
        responseType: 'arraybuffer',
      })
        .then((response) => {
          console.log("Download end")
          this.forceFileDownload(response, title)
        })
        .catch(() => console.log('error occured'))
    },
    downloadDoc(item) {
      console.log("Download start")
      this.downloadWithAxios("http://api.nammti.uz/api/works/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogQ (val) {
      val || this.closeQ()
    },
    dialogQDelete (val) {
      val || this.closeQDelete()
    },
    dialogM (val) {
      val || this.closeM()
    },
    dialogMDelete (val) {
      val || this.closeMDelete()
    },
    dialogK (val) {
      val || this.closeK()
    },
    dialogKDelete (val) {
      val || this.closeKDelete()
    },
  },

  mounted() {
    axios
      .get(`http://api.nammti.uz/api/works/type?userId=${this.userId}&limit=10&offset=0&type=1`)
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
      .get(`http://api.nammti.uz/api/works/type?userId=${this.userId}&limit=10&offset=0&type=2`)
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
          this.itemsQ.push(data[dataKey])
        }
      });

      axios
      .get(`http://api.nammti.uz/api/works/type?userId=${this.userId}&limit=10&offset=0&type=3`)
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
          this.itemsM.push(data[dataKey])
        }
      });

      axios
      .get(`http://api.nammti.uz/api/works/type?userId=${this.userId}&limit=10&offset=0&type=4`)
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
          this.itemsK.push(data[dataKey])
        }
      });
  }

}
</script>

<style scoped>

</style>
