<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card flat title="Ixtirolar">
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
                        cols="12">
                        <v-text-field
                          v-model="editedItem.name"
                          clearable
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.number"
                          clearable
                          required
                          label="Patent raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.authorCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedItem.authorName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedItem.datePublished"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedItem.doc"
                          v-model="editedItem.doc"
                          show-size
                          label="Patent yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">patentni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Ixtironi o'chirishni hohlaysizmi?</v-card-title>
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
        <v-card flat title="Ixtiro-foydali modellari">
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
                  <span class="text-h5">{{formMTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedMItem.name"
                          clearable
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.number"
                          clearable
                          required
                          label="Patent raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.authorCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedMItem.authorName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedMItem.datePublished"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedMItem.doc"
                          v-model="editedMItem.doc"
                          show-size
                          label="Patent yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedMItem)">Patentni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Ixtiro-foydali modelini o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details>
          </v-text-field>
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
      <v-col>
        <v-card flat title="Selektsiya yutuqlari">
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
                  <span class="text-h5">{{ formYTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedYItem.name"
                          clearable
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.number"
                          clearable
                          required
                          label="Patent raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.authorCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedYItem.authorName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedYItem.datePublished"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedYItem.doc"
                          v-model="editedYItem.doc"
                          show-size
                          label="Patent yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedYItem)">Patentni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Selektsiya yutug`ini o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details>
          </v-text-field>
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

      <v-col>
        <v-card flat title="Sanoat namunalari">
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
                        cols="12">
                        <v-text-field
                          clearable
                          v-model="editedNItem.name"
                          label="Patent nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          required
                          v-model="editedNItem.number"
                          label="Patent raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          required
                          v-model="editedNItem.authorCount"
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          clearable
                          v-model="editedNItem.authorName"
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          v-model="editedNItem.datePublished"
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedNItem.doc"
                          v-model="editedNItem.doc"
                          show-size
                          label="Patent yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedNItem)">Patentni yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Sanoat namunasini o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details>
          </v-text-field>
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
    </v-row>

    <v-row>
      <v-col>
        <v-card flat title="AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar">
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
                        cols="12">
                        <v-text-field
                          clearable
                          v-model="editedAItem.name"
                          label="Guvoxnoma nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          required
                          v-model="editedAItem.number"
                          label="Guvoxnoma raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          required
                          v-model="editedAItem.authorCount"
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          clearable
                          v-model="editedAItem.authorName"
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          clearable
                          v-model="editedAItem.datePublished"
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedItem.doc"
                          v-model="editedItem.doc"
                          show-size
                          label="Guvohnoma yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedItem)">Guvohnomani yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">AKT ga oid dasturiy maxsulotlar uchun guvoxnoma o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details>
          </v-text-field>
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

      <v-col>
        <v-card flat title="Mualliflik xuquqni ximoya qiluvchi guvoxnomalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogG"
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
                  <span class="text-h5">{{ formGTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedGItem.name"
                          clearable
                          label="Guvoxnoma nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedGItem.number"
                          clearable
                          required
                          label="Guvoxnoma raqami">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedGItem.authorCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedGItem.authorName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedGItem.datePublished"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-file-input
                          v-if="!editedGItem.doc"
                          v-model="editedGItem.doc"
                          show-size
                          label="Guvohnoma yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedGItem)">Guvohnomani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeG">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveG">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogGDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Mualliflik xuquqni ximoya qiluvchi guvoxnoma o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeGDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteGItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
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
            hide-details>
          </v-text-field>
        </template>
        <v-data-table
          :headers="headersG"
          :items="itemsG"
          :search="searchG">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editGItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteGItem(item)">
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
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultMItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      dialogY: false,
      dialogYDelete: false,
      editedYIndex: -1,
      editedYItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultYItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      dialogN: false,
      dialogNDelete: false,
      editedNIndex: -1,
      editedNItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultNItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultAItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      dialogG: false,
      dialogGDelete: false,
      editedGIndex: -1,
      editedGItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },
      defaultGItem: {
        id: 0,
        name: '',
        number: '',
        authorCount: 0,
        authorName: '',
        datePublished: '',
        doc: null
      },

      search: '',
      headers: [
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Patent raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Patent raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Patent raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Patent raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Guvohnoma raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
        { key: 'name', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'number', title: 'Guvohnoma raqami' },
        { key: 'authorCount', title: 'Mualliflar soni' },
        { key: 'authorName', title: 'Mualliflar F.I.Sh' },
        { key: 'datePublished', title: 'Nashr etilgan sana' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
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
    editGItem (item) {
      this.editedGIndex = this.itemsG.indexOf(item)
      this.editedGItem = Object.assign({}, item)
      this.dialogG = true
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
    deleteGItem (item) {
      this.editedGIndex = this.itemsG.indexOf(item)
      this.editedGItem = Object.assign({}, item)
      this.dialogGDelete = true
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
    deleteGItemConfirm () {
      this.itemsG.splice(this.editedGIndex, 1)
      this.closeGDelete()
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
    closeG () {
      this.dialogG = false
      this.$nextTick(() => {
        this.editedGItem = Object.assign({}, this.defaultGItem)
        this.editedGIndex = -1
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
    closeGDelete () {
      this.dialogGDelete = false
      this.$nextTick(() => {
        this.editedGItem = Object.assign({}, this.defaultGItem)
        this.editedGIndex = -1
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
    saveG () {
      if (this.editedGIndex > -1) {
        Object.assign(this.itemsG[this.editedGIndex], this.editedGItem)
      } else {
        this.itemsG.push(this.editedGItem)
      }
      this.closeG()
    },

    downloadDoc(item){

    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Yangi ixtiro qo`shish' : 'Ixtironi taxrirlash'
    },
    formMTitle () {
      return this.editedMIndex === -1 ? 'Yangi ixtiro-foydali model qo`shish' : 'Ixtiro-foydali modelini taxrirlash'
    },
    formYTitle () {
      return this.editedYIndex === -1 ? 'Yangi selektsiya yutug`i qo`shish' : 'Selektsiya yutug`ini taxrirlash'
    },
    formNTitle () {
      return this.editedNIndex === -1 ? 'Yangi sanoat namunasi qo`shish' : 'Sanoat namunasini taxrirlash'
    },
    formATitle () {
      return this.editedAIndex === -1 ? 'Yangi AKT ga oid dasturiy maxsulotlar uchun guvoxnoma qo`shish' : 'AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar taxrirlash'
    },
    formGTitle () {
      return this.editedAIndex === -1 ? 'Yangi mualliflik xuquqni ximoya qiluvchi guvoxnoma qo`shish' : 'Mualliflik xuquqni ximoya qiluvchi guvoxnomani taxrirlash'
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
    dialogG (val) {
      val || this.closeG()
    },
    dialogGDelete (val) {
      val || this.closeGDelete()
    },
  },

}
</script>

<style scoped>

</style>
