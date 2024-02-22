<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2" fluid>

    <v-row>
      <v-col cols="12">
        <v-card flat title="Xalqaro loyihalardagi ishtiroki">
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
                  <span class="text-h5">{{ formTitle }}</span>
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
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.projectType"
                          clearable
                          required
                          label="Loyiha turi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.projectYears"
                          clearable
                          required
                          label="Loyiha bajariladigon yillar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.projectSum"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
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
                          label="Loyihani gubohnomasi olingan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Lavozimni tanlang"
                          v-model="editedItem.projectPosition"
                          required
                          :items="['Raxbar', 'Opponent']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedItem.doc"
                          v-model="editedItem.doc"
                          show-size
                          label="Chek yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Chekni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Xalqaro loyihalardagi ishtirokni o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details
          ></v-text-field>
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

      <v-col  cols="12">
        <v-card
        flat
        title="Qo’shma loyihalardagi ishtiroki">
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
                  <span class="text-h5">{{ formMTitle }}</span>
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
                          clearable
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.projectType"
                          clearable
                          required
                          label="Loyiha turi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.projectYears"
                          clearable
                          required
                          label="Loyiha bajariladigon yillar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.projectSum"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.year"
                          clearable
                          label="Loyihani guvohnomasi olingan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Lavozimni tanlang"
                          v-model="editedMItem.projectPosition"
                          required
                          :items="['Raxbar', 'Opponent']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedMItem.doc"
                          v-model="editedMItem.doc"
                          show-size
                          label="Chek yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedMItem)">Chek yuklash</v-btn>
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
                    Yopish
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Qo’shma loyihalardagi ishtirokni o'chirishni hohlaysizmi?</v-card-title>
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
    </v-row>

    <v-row>
      <v-col  cols="12">
        <v-card flat title="Respublik loyihalaridagi ishtiroki">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogY"
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
                  <span class="text-h5">{{ formYTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.name"
                          clearable
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.projectType"
                          clearable
                          required
                          label="Loyiha turi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.projectYears"
                          clearable
                          required
                          label="Loyiha bajariladigon yillar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.projectSum"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.year"
                          clearable
                          label="Loyihani guvohnomasi olingan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Lavozimni tanlang"
                          v-model="editedYItem.projectPosition"
                          required
                          :items="['Raxbar', 'Opponent']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedYItem.doc"
                          v-model="editedYItem.doc"
                          show-size
                          label="Chek yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedYItem)">Chek yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeY">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveY">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogYDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Respublik loyihalaridagi ishtirokni o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeYDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteYItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
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
          :search="searchY">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editYItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteYItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>

      <v-col  cols="12">
        <v-card
        flat
        title="Startaplardagi ishtiroki">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogN"
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
                  <span class="text-h5">{{ formNTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedNItem.name"
                          clearable
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedNItem.projectType"
                          clearable
                          required
                          label="Loyiha turi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedNItem.projectYears"
                          clearable
                          required
                          label="Loyiha bajariladigon yillar">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedNItem.projectSum"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedNItem.year"
                          clearable
                          label="Loyiha guvohnomasi olingan yil"
                          required>
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Lavozimni tanlang"
                          v-model="editedNItem.projectPosition"
                          required
                          :items="['Raxbar', 'Opponent']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedNItem.doc"
                          v-model="editedNItem.doc"
                          show-size
                          label="Darslik yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedNItem)">Darslikni yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeN">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveN">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogNDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Startaplardagi ishtirokni o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeNDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteNItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
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
          :search="searchN">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editNItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteNItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>

      <v-col  cols="12">
        <v-card flat title="Xo’jalik shartnomalari">
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
                    <span class="text-h5">{{ formATitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.name"
                            clearable
                            label="Shatnoma nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.projectYears"
                            clearable
                            required
                            label="Shartnoma bajariladigan yil">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-select
                            label="Shatnoma xajmi"
                            v-model="editedAItem.projectSize"
                            required
                            :items="['Fan doktori 5-mln', 'Fan nomzodi 4-mln', 'Darajasiz PO` 3-mln' ]">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.projectCompany"
                            clearable
                            label="Shartnoma tuzulgan tashkilot"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.year"
                            clearable
                            label="Shartnoma yakunlangan yil"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            v-if="!editedAItem.doc"
                            v-model="editedAItem.doc"
                            show-size
                            label="Chek yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedAItem)">Chekni yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="closeA">
                      Yopish
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="saveA">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogADelete" width="auto">
                <v-card>
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Xo’jalik shartnomani o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeADelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteAItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
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
            :search="searchA">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="editAItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                size="small"
                @click="deleteAItem(item)">
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
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      defaultItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      search: '',
      headers: [
        { key: 'name',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'projectType', title: 'Loyiha turi' },
        { key: 'projectYears', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectSum', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        }
      ],


      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      defaultMItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      searchM: '',
      headersM: [
        { key: 'name',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'projectType', title: 'Loyiha turi' },
        { key: 'projectYears', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectSum', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsM: [
        {
          name: 'Frozen Yogurt',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        }
      ],

      dialogY: false,
      dialogYDelete: false,
      editedYIndex: -1,
      editedYItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      defaultYItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      searchY: '',
      headersY: [
        { key: 'name',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'projectType', title: 'Loyiha turi' },
        { key: 'projectYears', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectSum', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsY: [
        {
          name: 'Frozen Yogurt',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        }
      ],

      dialogN: false,
      dialogNDelete: false,
      editedNIndex: -1,
      editedNItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      defaultNItem: {
        id: 0,
        name: '',
        projectType: '',
        projectYears: '',
        projectSum: '',
        projectPosition: '',
        year: '',
        doc: null
      },
      searchN: '',
      headersN: [
        { key: 'name',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'projectType', title: 'Loyiha turi' },
        { key: 'projectYears', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectSum', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsN: [
        {
          name: 'Frozen Yogurt',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
          sana: 4.0,
        }
      ],

      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        name: '',
        projectYears: '',
        projectSize: '',
        projectCompany: '',
        year: '',
        doc: null
      },
      defaultAItem: {
        id: 0,
        name: '',
        projectYears: '',
        projectSize: '',
        projectCompany: '',
        year: '',
        doc: null
      },
      searchA: '',
      headersA: [
        { key: 'name', title: 'Shartnoma nomi', align: 'start', sortable: false,},
        { key: 'projectYears', title: 'Shartnoma bajariladigan yil' },
        { key: 'projectSize', title: 'Shartnoma  xajmi' },
        { key: 'projectCompany', title: 'Shartnoma tuzilgan tashkilot' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsA: [
        {
          name: 'Frozen Yogurt',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
        },
        {
          name: 'Ice cream sandwich',
          raqami: 159,
          mSoni: 6.0,
          mNomi: 24,
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
    editMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogM = true
    },
    editYItem (item) {
      this.editedYIndex = this.itemsY.indexOf(item)
      this.editedYItem = Object.assign({}, item)
      this.dialogY = true
    },
    editNItem (item) {
      this.editedNIndex = this.itemsN.indexOf(item)
      this.editedNItem = Object.assign({}, item)
      this.dialogN = true
    },
    editAItem (item) {
      this.editedAIndex = this.itemsA.indexOf(item)
      this.editedAItem = Object.assign({}, item)
      this.dialogA = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogMDelete = true
    },
    deleteYItem (item) {
      this.editedYIndex = this.itemsY.indexOf(item)
      this.editedYItem = Object.assign({}, item)
      this.dialogYDelete = true
    },
    deleteNItem (item) {
      this.editedNIndex = this.itemsN.indexOf(item)
      this.editedNItem = Object.assign({}, item)
      this.dialogNDelete = true
    },
    deleteAItem (item) {
      this.editedAIndex = this.itemsA.indexOf(item)
      this.editedAItem = Object.assign({}, item)
      this.dialogADelete = true
    },

    deleteItemConfirm () {
      this.items.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    deleteMItemConfirm () {
      this.itemsM.splice(this.editedMIndex, 1)
      this.closeMDelete()
    },
    deleteYItemConfirm () {
      this.itemsY.splice(this.editedYIndex, 1)
      this.closeYDelete()
    },
    deleteNItemConfirm () {
      this.itemsN.splice(this.editedNIndex, 1)
      this.closeNDelete()
    },
    deleteAItemConfirm () {
      this.itemsA.splice(this.editedAIndex, 1)
      this.closeADelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeM () {
      this.dialogM = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeY () {
      this.dialogY = false
      this.$nextTick(() => {
        this.editedYItem = Object.assign({}, this.defaultYItem)
        this.editedYIndex = -1
      })
    },
    closeN () {
      this.dialogN = false
      this.$nextTick(() => {
        this.editedNItem = Object.assign({}, this.defaultNItem)
        this.editedNIndex = -1
      })
    },
    closeA () {
      this.dialogA = false
      this.$nextTick(() => {
        this.editedAItem = Object.assign({}, this.defaultAItem)
        this.editedAIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeMDelete () {
      this.dialogMDelete = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeYDelete () {
      this.dialogYDelete = false
      this.$nextTick(() => {
        this.editedYItem = Object.assign({}, this.defaultYItem)
        this.editedYIndex = -1
      })
    },
    closeNDelete () {
      this.dialogNDelete = false
      this.$nextTick(() => {
        this.editedNItem = Object.assign({}, this.defaultNItem)
        this.editedNIndex = -1
      })
    },
    closeADelete () {
      this.dialogADelete = false
      this.$nextTick(() => {
        this.editedAItem = Object.assign({}, this.defaultAItem)
        this.editedAIndex = -1
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
    saveM () {
      if (this.editedMIndex > -1) {
        Object.assign(this.itemsM[this.editedMIndex], this.editedMItem)
      } else {
        this.itemsM.push(this.editedMItem)
      }
      this.closeM()
    },
    saveY () {
      if (this.editedYIndex > -1) {
        Object.assign(this.itemsY[this.editedYIndex], this.editedYItem)
      } else {
        this.itemsY.push(this.editedYItem)
      }
      this.closeY()
    },
    saveN () {
      if (this.editedNIndex > -1) {
        Object.assign(this.itemsN[this.editedNIndex], this.editedNItem)
      } else {
        this.itemsN.push(this.editedNItem)
      }
      this.closeN()
    },
    saveA () {
      if (this.editedAIndex > -1) {
        Object.assign(this.itemsA[this.editedAIndex], this.editedAItem)
      } else {
        this.itemsA.push(this.editedAItem)
      }
      this.closeA()
    },

    downloadDoc(item){

    }

  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Yangi xalqaro loyihalardagi ishtirokini qo`shish' : 'Xalqaro loyihalardagi ishtiroknini taxrirlash'
    },
    formMTitle () {
      return this.editedMIndex === -1 ? 'Yangi qo’shma loyihalardagi ishtirokini qo`shish' : 'Qo’shma loyihalardagi ishtirokini taxrirlash'
    },
    formYTitle () {
      return this.editedYIndex === -1 ? 'Yangi respublik loyihalaridagi ishtirokini qo`shish' : 'Respublik loyihalaridagi ishtirokini taxrirlash'
    },
    formNTitle () {
      return this.editedNIndex === -1 ? 'Yangi startaplardagi ishtirokini qo`shish' : 'Startaplardagi ishtirokini taxrirlash'
    },
    formATitle () {
      return this.editedAIndex === -1 ? 'Yangi xo’jalik shartnomasini qo`shish' : 'Xo’jalik shartnomasini taxrirlash'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogM (val) {
      val || this.closeM()
    },
    dialogMDelete (val) {
      val || this.closeMDelete()
    },
    dialogY (val) {
      val || this.closeY()
    },
    dialogYDelete (val) {
      val || this.closeYDelete()
    },
    dialogN (val) {
      val || this.closeN()
    },
    dialogNDelete (val) {
      val || this.closeNDelete()
    },
    dialogA (val) {
      val || this.closeA()
    },
    dialogADelete (val) {
      val || this.closeADelete()
    },
  }

}
</script>

<style scoped>

</style>
