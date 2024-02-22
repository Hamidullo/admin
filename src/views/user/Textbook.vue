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
                        v-model="editedItem.name"
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
                        v-model="editedItem.mCount"
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
                        v-model="editedItem.mName"
                        clearable
                        persistent-hint
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        v-model="editedItem.date"
                        clearable
                        label="Nashr etilgan yil"
                        required>
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        clearable
                        required
                        v-model="editedItem.number"
                        label="Guvoxnoma raqami">
                    </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-text-field
                        clearable
                        required
                        v-model="editedItem.year"
                        label="Guvoxnoma olingan yil">
                      </v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4">
                      <v-file-input
                        v-if="!editedItem.doc"
                        v-model="editedItem.doc"
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
                          v-model="editedQItem.name"
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
                          v-model="editedQItem.mCount"
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
                          v-model="editedQItem.mName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedQItem.date"
                          clearable
                          label="Nashr etilgan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          required
                          v-model="editedQItem.number"
                          label="Guvoxnoma raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          required
                          v-model="editedQItem.year"
                          label="Guvoxnoma olingan yil">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-file-input
                          v-if="!editedQItem.doc"
                          v-model="editedQItem.doc"
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
                          v-model="editedMItem.name"
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
                          v-model="editedMItem.mCount"
                          clearable
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Ham mualliflar F.I.SH"
                          v-model="editedMItem.mName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.date"
                          clearable
                          label="Nashr etilgan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          v-model="editedMItem.number"
                          label="Grif raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          v-model="editedMItem.year"
                          label="Monografiya olingan yil">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-file-input
                          v-if="!editedMItem.doc"
                          v-model="editedMItem.doc"
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
                          v-model="editedKItem.name"
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
                          v-model="editedKItem.mCount"
                          clearable
                          required
                          label="Mualliflar soni">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          label="Ham mualliflar F.I.SH"
                          v-model="editedKItem.mName"
                          clearable
                          persistent-hint
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedKItem.date"
                          clearable
                          label="Nashr etilgan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          v-model="editedKItem.number"
                          label="Uslubiy kengash qarori raqami">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          v-model="editedKItem.year"
                          label="Uslubiy ko’rsatma va majmualar olingan yil">
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-file-input
                          show-size
                          v-if="!editedKItem.doc"
                          v-model="editedKItem.doc"
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

  </v-container>
</template>

<script>
export default {

  data () {
    return {
      search: '',
      headers: [
        { key: 'name', title: 'Nomi', align: 'start', sortable: false, },
        { key: 'mSoni', title: 'Mualliflar soni' },
        { key: 'mNomi', title: 'Ham mualliflar F.I.Sh' },
        { key: 'sana', title: 'Nashr etilgan yili' },
        { key: 'raqam', title: 'Guvoxnoma raqami' },
        {  key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        }
      ],

      searchQ: '',
      headersQ: [
        { align: 'start', key: 'name', sortable: false, title: 'Nomi',},
        { key: 'mSoni', title: 'Mualliflar soni' },
        { key: 'mNomi', title: 'Ham mualliflar F.I.Sh' },
        { key: 'sana', title: 'Nashr etilgan yili' },
        { key: 'raqam', title: 'Guvoxnoma raqami' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
      ],
      itemsQ: [
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
        }
      ],

      searchM: '',
      headersM: [
        { align: 'start', key: 'name', sortable: false, title: 'Nomi',},
        { key: 'mSoni', title: 'Mualliflar soni' },
        { key: 'mNomi', title: 'Ham mualliflar F.I.Sh' },
        { key: 'sana', title: 'Nashr etilgan yili' },
        { key: 'raqam', title: 'Grif raqami' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
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
        }
      ],

      searchK: '',
      headersK: [
        { align: 'start', key: 'name', sortable: false, title: 'Nomi',},
        { key: 'mSoni', title: 'Mualliflar soni' },
        { key: 'mNomi', title: 'Ham mualliflar F.I.Sh' },
        { key: 'sana', title: 'Nashr etilgan yili' },
        { key: 'raqam', title: 'Uslubiy kengash qarori raqami' },
        { title: 'Amallar',align: 'start', key: 'actions', sortable: false },
      ],
      itemsK: [
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
        }
      ],

      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },
      defaultItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },

      dialogQ: false,
      dialogQDelete: false,
      editedQIndex: -1,
      editedQItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },
      defaultQItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },

      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },
      defaultMItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },

      dialogK: false,
      dialogKDelete: false,
      editedKIndex: -1,
      editedKItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
      },
      defaultKItem: {
        id: 0,
        name: '',
        mCount: 0,
        mName: '',
        date: '',
        number: '',
        year: '',
        doc: null
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
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    deleteQItemConfirm () {
      this.itemsQ.splice(this.editedQIndex, 1)
      this.closeQDelete()
    },
    deleteMItemConfirm () {
      this.itemsM.splice(this.editedMIndex, 1)
      this.closeMDelete()
    },
    deleteKItemConfirm () {
      this.itemsK.splice(this.editedKIndex, 1)
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
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    },
    saveQ () {
      if (this.editedQIndex > -1) {
        Object.assign(this.itemsQ[this.editedQIndex], this.editedQItem)
      } else {
        this.itemsQ.push(this.editedQItem)
      }
      this.closeQ()
    },
    saveM () {
      if (this.editedMIndex > -1) {
        Object.assign(this.itemsM[this.editedMIndex], this.editedMItem)
      } else {
        this.itemsM.push(this.editedMItem)
      }
      this.closeM()
    },
    saveK () {
      if (this.editedKIndex > -1) {
        Object.assign(this.itemsK[this.editedKIndex], this.editedKItem)
      } else {
        this.itemsK.push(this.editedKItem)
      }
      this.closeK()
    },

    downloadDoc(item) {

    }
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

}
</script>

<style scoped>

</style>
