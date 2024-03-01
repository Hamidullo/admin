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
                          v-model="editedItem.projectName"
                          clearable
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Loyiha turi"
                          v-model="editedItem.project"
                          :items="['Fundamental','Amaliy','Innovatsion']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.projectFinancing"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Loyiha bajarilgan yil"
                          v-model="editedItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Loyiha bajarilgan oy"
                          v-model="editedItem.mounth"
                          :items="mounth">
                        </v-select>
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
                          v-if="!editedItem.projectDoc"
                          v-model="editedItem.projectDoc"
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
        <v-card flat title="Qo’shma loyihalardagi ishtiroki">
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
                          v-model="editedMItem.projectName"
                          clearable
                          label="Loyiha nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-select
                          label="Loyiha turi"
                          v-model="editedMItem.project"
                          :items="['Fundamental','Amaliy','Innovatsion']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.projectFinancing"
                          clearable
                          label="Loyihani moliyalashtirish xajmi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Loyiha bajarilgan yil"
                          v-model="editedMItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Loyiha bajarilgan oy"
                          v-model="editedMItem.mounth"
                          :items="mounth">
                        </v-select>
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
                          v-if="!editedMItem.projectDoc"
                          v-model="editedMItem.projectDoc"
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
                            v-model="editedYItem.projectName"
                            clearable
                            label="Loyiha nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-select
                            label="Loyiha turi"
                            v-model="editedYItem.project"
                            :items="['Fundamental','Amaliy','Innovatsion','Tijoratlashtirish']">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedYItem.projectFinancing"
                            clearable
                            label="Loyihani moliyalashtirish xajmi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan yil"
                            v-model="editedYItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan oy"
                            v-model="editedYItem.mounth"
                            :items="mounth">
                          </v-select>
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
                            v-if="!editedYItem.projectDoc"
                            v-model="editedYItem.projectDoc"
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
        <v-card flat title="Startaplardagi ishtiroki">
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
                            v-model="editedNItem.projectName"
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
                            v-model="editedNItem.project"
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
                            v-model="editedNItem.projectFinancing"
                            clearable
                            label="Loyihani moliyalashtirish xajmi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan yil"
                            v-model="editedNItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan oy"
                            v-model="editedNItem.mounth"
                            :items="mounth">
                          </v-select>
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
                            v-if="!editedNItem.projectDoc"
                            v-model="editedNItem.projectDoc"
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
                            v-model="editedAItem.projectName"
                            clearable
                            label="Shatnoma nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-select
                            label="Shatnoma xajmi"
                            v-model="editedAItem.projectFinancing"
                            required
                            :items="['Fan doktori 5-mln', 'Fan nomzodi 4-mln', 'Darajasiz PO` 3-mln' ]">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.project"
                            clearable
                            label="Shartnoma tuzulgan tashkilot"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan yil"
                            v-model="editedAItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Loyiha bajarilgan oy"
                            v-model="editedAItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            v-if="!editedAItem.projectDoc"
                            v-model="editedAItem.projectDoc"
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

      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        id: 0,
        projectType: 41,
        projectTypeName: 'Xalqaro loyihalardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      defaultItem: {
        id: 0,
        projectType: 41,
        projectTypeName: 'Xalqaro loyihalardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      search: '',
      headers: [
        { key: 'projectName',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'project', title: 'Loyiha turi' },
        { key: 'year', title: 'Loyiha yakunlangan yil' },
        { key: 'projectFinancing', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      items: [],


      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        projectType: 42,
        projectTypeName: 'Qo’shma loyihalardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      defaultMItem: {
        id: 0,
        projectType: 42,
        projectTypeName: 'Qo’shma loyihalardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      searchM: '',
      headersM: [
        { key: 'projectName',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'project', title: 'Loyiha turi' },
        { key: 'year', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectFinancing', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsM: [],

      dialogY: false,
      dialogYDelete: false,
      editedYIndex: -1,
      editedYItem: {
        id: 0,
        projectType: 43,
        projectTypeName: 'Respublik loyihalaridagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      defaultYItem: {
        id: 0,
        projectType: 43,
        projectTypeName: 'Respublik loyihalaridagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      searchY: '',
      headersY: [
        { key: 'projectName',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'project', title: 'Loyiha turi' },
        { key: 'year', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectFinancing', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsY: [],

      dialogN: false,
      dialogNDelete: false,
      editedNIndex: -1,
      editedNItem: {
        id: 0,
        projectType: 44,
        projectTypeName: 'Startaplardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      defaultNItem: {
        id: 0,
        projectType: 44,
        projectTypeName: 'Startaplardagi ishtiroki',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      searchN: '',
      headersN: [
        { key: 'projectName',  title: 'Loyiha nomi',align: 'start', sortable: false,},
        { key: 'project', title: 'Loyiha turi' },
        { key: 'year', title: 'Loyiha bajariladigan yillar' },
        { key: 'projectFinancing', title: 'Loyihani moliyalashtirish xajmi' },
        { key: 'projectPosition', title: 'Loyihadagi lavozim' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsN: [],

      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        projectType: 45,
        projectTypeName: 'Xo’jalik shartnomalari',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      defaultAItem: {
        id: 0,
        projectType: 45,
        projectTypeName: 'Xo’jalik shartnomalari',

        projectName: '',
        projectFinancing: '',
        projectPosition: '',
        project: '',

        year: 0,
        mounth: 0,
        news: '',
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        projectDoc: null
      },
      searchA: '',
      headersA: [
        { key: 'projectName', title: 'Shartnoma nomi', align: 'start', sortable: false,},
        { key: 'year', title: 'Shartnoma bajarilgan yil' },
        { key: 'projectFinancing', title: 'Shartnoma  xajmi' },
        { key: 'projectPosition', title: 'Shartnoma tuzilgan tashkilot' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsA: [],

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
      this.overlay = true
      axios.delete(`http://localhost:8080/api/projects/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editItem.id}`);
          this.items.splice(this.editedIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDelete()
    },
    deleteMItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/projects/delete?id=${this.editedMItem.id}&newId=${this.editedMItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editMItem.id}`);
          this.itemsM.splice(this.editedMIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeMDelete()
    },
    deleteYItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/projects/delete?id=${this.editedYItem.id}&newId=${this.editedYItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editYItem.id}`);
          this.itemsY.splice(this.editedYIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeYDelete()
    },
    deleteNItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/projects/delete?id=${this.editedNItem.id}&newId=${this.editedNItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editNItem.id}`);
          this.itemsN.splice(this.editedNIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeNDelete()
    },
    deleteAItemConfirm () {
      this.overlay = true
      axios.delete(`http://localhost:8080/api/projects/delete?id=${this.editedAItem.id}&newId=${this.editedAItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editAItem.id}`);
          this.itemsA.splice(this.editedAIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
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
        this.overlay = true
        let formData = new FormData();
        formData.append('projectName', this.editedItem.projectName)
        formData.append('projectFinancing', this.editedItem.projectFinancing)
        formData.append('project', this.editedItem.project)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://localhost:8080/api/works/update?id="+this.editedItem.id, formData)
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
        if (this.editedItem.projectPosition === 'Raxbar'){
          this.editedItem.position = 1
        } else {
          this.editedItem.position = 2
        }
        formData.append('userId', this.userId)
        formData.append('name', this.editedItem.projectName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedItem.projectType)
        formData.append('typeName', this.editedItem.projectTypeName)
        formData.append('financing', this.editedItem.projectFinancing)
        formData.append('project', this.editedItem.project)
        formData.append('positionName', this.editedItem.projectPosition)
        formData.append('position', this.editedItem.position)
        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)

        // files
        for (let file of this.editedItem.projectDoc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/projects/create?userId="+this.userId, formData)
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
    saveM () {
      if (this.editedMIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('projectName', this.editedMItem.projectName)
        formData.append('projectFinancing', this.editedMItem.projectFinancing)
        formData.append('project', this.editedMItem.project)
        formData.append('newId', this.editedMItem.newId)

        axios.put("http://localhost:8080/api/works/update?id="+this.editedMItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsM[this.editedMIndex], this.editedMItem)
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
        if (this.editedMItem.projectPosition === 'Raxbar'){
          this.editedMItem.position = 1
        } else {
          this.editedMItem.position = 2
        }
        formData.append('userId', this.userId)
        formData.append('name', this.editedMItem.projectName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedMItem.projectType)
        formData.append('typeName', this.editedMItem.projectTypeName)
        formData.append('financing', this.editedMItem.projectFinancing)
        formData.append('project', this.editedMItem.project)
        formData.append('positionName', this.editedMItem.projectPosition)
        formData.append('position', this.editedMItem.position)
        formData.append('year', this.editedMItem.year)
        formData.append('mounth', this.editedMItem.mounth)
        formData.append('department', this.editedMItem.department)
        formData.append('faculty', this.editedMItem.faculty)

        // files
        for (let file of this.editedMItem.projectDoc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/projects/create?userId="+this.userId, formData)
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
    saveY () {
      if (this.editedYIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('projectName', this.editedYItem.projectName)
        formData.append('projectFinancing', this.editedYItem.projectFinancing)
        formData.append('project', this.editedYItem.project)
        formData.append('newId', this.editedYItem.newId)

        axios.put("http://localhost:8080/api/works/update?id="+this.editedYItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsY[this.editedYIndex], this.editedYItem)
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
        if (this.editedYItem.projectPosition === 'Raxbar'){
          this.editedYItem.position = 1
        } else {
          this.editedYItem.position = 2
        }
        formData.append('userId', this.userId)
        formData.append('name', this.editedYItem.projectName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedYItem.projectType)
        formData.append('typeName', this.editedYItem.projectTypeName)
        formData.append('financing', this.editedYItem.projectFinancing)
        formData.append('project', this.editedYItem.project)
        formData.append('positionName', this.editedYItem.projectPosition)
        formData.append('position', this.editedYItem.position)
        formData.append('year', this.editedYItem.year)
        formData.append('mounth', this.editedYItem.mounth)
        formData.append('department', this.editedYItem.department)
        formData.append('faculty', this.editedYItem.faculty)

        // files
        for (let file of this.editedYItem.projectDoc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/projects/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsY.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeY()
    },
    saveN () {
      if (this.editedNIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('projectName', this.editedNItem.projectName)
        formData.append('projectFinancing', this.editedNItem.projectFinancing)
        formData.append('project', this.editedNItem.project)
        formData.append('newId', this.editedNItem.newId)

        axios.put("http://localhost:8080/api/works/update?id="+this.editedNItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsN[this.editedNIndex], this.editedNItem)
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
        if (this.editedNItem.projectPosition === 'Raxbar'){
          this.editedNItem.position = 1
        } else {
          this.editedNItem.position = 2
        }
        formData.append('userId', this.userId)
        formData.append('name', this.editedNItem.projectName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedNItem.projectType)
        formData.append('typeName', this.editedNItem.projectTypeName)
        formData.append('financing', this.editedNItem.projectFinancing)
        formData.append('project', this.editedNItem.project)
        formData.append('positionName', this.editedNItem.projectPosition)
        formData.append('position', this.editedNItem.position)
        formData.append('year', this.editedNItem.year)
        formData.append('mounth', this.editedNItem.mounth)
        formData.append('department', this.editedNItem.department)
        formData.append('faculty', this.editedNItem.faculty)

        // files
        for (let file of this.editedNItem.projectDoc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/projects/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsN.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeN()
    },
    saveA () {
      if (this.editedAIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('projectName', this.editedAItem.projectName)
        formData.append('projectFinancing', this.editedAItem.projectFinancing)
        formData.append('project', this.editedAItem.project)
        formData.append('newId', this.editedAItem.newId)

        axios.put("http://localhost:8080/api/works/update?id="+this.editedAItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsA[this.editedAIndex], this.editedAItem)
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
        if (this.editedAItem.projectPosition === 'Raxbar'){
          this.editedAItem.position = 1
        } else {
          this.editedAItem.position = 2
        }
        formData.append('userId', this.userId)
        formData.append('name', this.editedAItem.projectName)
        formData.append('userName', this.userName)
        formData.append('type', this.editedAItem.projectType)
        formData.append('typeName', this.editedAItem.projectTypeName)
        formData.append('financing', this.editedAItem.projectFinancing)
        formData.append('project', this.editedAItem.project)
        formData.append('positionName', this.editedAItem.projectPosition)
        formData.append('position', this.editedAItem.position)
        formData.append('year', this.editedAItem.year)
        formData.append('mounth', this.editedAItem.mounth)
        formData.append('department', this.editedAItem.department)
        formData.append('faculty', this.editedAItem.faculty)

        // files
        for (let file of this.editedAItem.projectDoc) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://localhost:8080/api/projects/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsA.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeA()
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
      this.downloadWithAxios("http://localhost:8080/api/projects/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },

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
  },

  mounted() {
    axios
      .get(`http://localhost:8080/api/projects/type?userId=${this.userId}&limit=10&offset=0&type=41`)
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
      .get(`http://localhost:8080/api/projects/type?userId=${this.userId}&limit=10&offset=0&type=42`)
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
      .get(`http://localhost:8080/api/projects/type?userId=${this.userId}&limit=10&offset=0&type=43`)
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
          this.itemsY.push(data[dataKey])
        }
      });

    axios
      .get(`http://localhost:8080/api/projects/type?userId=${this.userId}&limit=10&offset=0&type=44`)
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
          this.itemsN.push(data[dataKey])
        }
      });

    axios
      .get(`http://localhost:8080/api/projects/type?userId=${this.userId}&limit=10&offset=0&type=45`)
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
          this.itemsA.push(data[dataKey])
        }
      });
  }

}
</script>

<style scoped>

</style>
