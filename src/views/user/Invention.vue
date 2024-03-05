<template>
  <v-container class="py-8 px-6 " fluid>

    <v-row>
      <v-col>
        <v-card class="bg-color-container" flat title="Ixtirolar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialog"
              persistent
              width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="bg-indigo"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card class="form-color">
                <v-card-title>
                  <span class="text-h5">{{formTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedItem.inventionName"
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
                          v-model="editedItem.inventionNumber"
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
                          v-if="editedItem.inventionAuthorsCount"
                          v-model="editedItem.inventionAuthorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                        <v-text-field
                          v-else
                          readonly
                          v-model="editedItem.inventionAuthorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedItem.inventionAuthorNames"
                          clearable
                          label="Ham mualliflar F.I.SH"
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
                        <v-file-input
                          v-if="!editedItem.inventionDownload"
                          v-model="editedItem.inventionDownload"
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
                    class="bg-red"
                    variant="text"
                    @click="close">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="save">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" width="auto">
              <v-card  class="form-color">
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
          class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Ixtiro-foydali modellari">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogM"
              persistent
              width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="bg-indigo"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card  class="form-color">
                <v-card-title>
                  <span class="text-h5">{{formMTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedMItem.inventionName"
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
                          v-model="editedMItem.inventionNumber"
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
                          v-model="editedMItem.inventionAuthorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedMItem.inventionAuthorNames"
                          clearable
                          label="Ham mualliflar F.I.SH"
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
                        <v-file-input
                          v-if="!editedMItem.inventionDownload"
                          v-model="editedMItem.inventionDownload"
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
                    class="bg-red"
                    variant="text"
                    @click="closeM">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="saveM">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogMDelete" width="auto">
              <v-card  class="form-color">
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
          class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Selektsiya yutuqlari">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog
                v-model="dialogY"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="bg-indigo"
                    v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card  class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{ formYTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedYItem.inventionName"
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
                            v-model="editedYItem.inventionNumber"
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
                            v-model="editedYItem.inventionAuthorsCount"
                            clearable
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedYItem.inventionAuthorNames"
                            clearable
                            label="Ham mualliflar F.I.SH"
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
                            v-model="editedYItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Nashr etilgan oy"
                            v-model="editedYItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedYItem.inventionDownload"
                            v-model="editedYItem.inventionDownload"
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
                      class="bg-red"
                      variant="text"
                      @click="closeY">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveY">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogYDelete" width="auto">
                <v-card  class="form-color">
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
            class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Sanoat namunalari">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog
                v-model="dialogN"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="bg-indigo"
                    v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card  class="form-color">
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
                            v-model="editedNItem.inventionName"
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
                            v-model="editedNItem.inventionNumber"
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
                            v-model="editedNItem.inventionAuthorsCount"
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            clearable
                            v-model="editedNItem.inventionAuthorNames"
                            label="Ham mualliflar F.I.SH"
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
                            v-model="editedNItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Nashr etilgan oy"
                            v-model="editedNItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedNItem.inventionDownload"
                            v-model="editedNItem.inventionDownload"
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
                      class="bg-red"
                      variant="text"
                      @click="closeN">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveN">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogNDelete" width="auto">
                <v-card  class="form-color">
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
            class="bg-color-container"
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

      <v-col>
        <v-card class="bg-color-container" flat title="AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog
                v-model="dialogA"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="bg-indigo"
                    v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card  class="form-color">
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
                            v-model="editedAItem.inventionName"
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
                            v-model="editedAItem.inventionNumber"
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
                            v-model="editedAItem.inventionAuthorsCount"
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            clearable
                            v-model="editedAItem.inventionAuthorNames"
                            label="Ham mualliflar F.I.SH"
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
                            v-model="editedAItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Nashr etilgan oy"
                            v-model="editedAItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedAItem.inventionDownload"
                            v-model="editedAItem.inventionDownload"
                            show-size
                            label="Guvohnoma yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedAItem)">Guvohnomani yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeA">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveA">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogADelete" width="auto">
                <v-card  class="form-color">
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
            class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Mualliflik xuquqni ximoya qiluvchi guvoxnomalar">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog
                v-model="dialogG"
                persistent
                width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="bg-indigo"
                    v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card  class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{ formGTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedGItem.inventionName"
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
                            v-model="editedGItem.inventionNumber"
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
                            v-model="editedGItem.inventionAuthorsCount"
                            clearable
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedGItem.inventionAuthorNames"
                            clearable
                            label="Ham mualliflar F.I.SH"
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
                          <v-file-input
                            v-if="!editedGItem.inventionDownload"
                            v-model="editedGItem.inventionDownload"
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
                      class="bg-red"
                      variant="text"
                      @click="closeG">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveG">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogGDelete" width="auto">
                <v-card  class="form-color">
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
            class="bg-color-container"
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
        inventionType: 51,
        inventionTypeName: 'Ixtirolar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultItem: {
        id: 0,
        inventionType: 51,
        inventionTypeName: 'Ixtirolar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        inventionType: 52,
        inventionTypeName: 'Ixtiro-foydali modellari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultMItem: {
        id: 0,
        inventionType: 52,
        inventionTypeName: 'Ixtiro-foydali modellari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      dialogY: false,
      dialogYDelete: false,
      editedYIndex: -1,
      editedYItem: {
        id: 0,
        inventionType: 53,
        inventionTypeName: 'Selektsiya yutuqlari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultYItem: {
        id: 0,
        inventionType: 53,
        inventionTypeName: 'Selektsiya yutuqlari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      dialogN: false,
      dialogNDelete: false,
      editedNIndex: -1,
      editedNItem: {
        id: 0,
        inventionType: 54,
        inventionTypeName: 'Sanoat namunalari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultNItem: {
        id: 0,
        inventionType: 54,
        inventionTypeName: 'Sanoat namunalari',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        inventionType: 55,
        inventionTypeName: 'AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultAItem: {
        id: 0,
        inventionType: 55,
        inventionTypeName: 'AKT ga oid dasturiy maxsulotlar uchun guvoxnomalar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      dialogG: false,
      dialogGDelete: false,
      editedGIndex: -1,
      editedGItem: {
        id: 0,
        inventionType: 56,
        inventionTypeName: 'Mualliflik xuquqni ximoya qiluvchi guvoxnomalar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },
      defaultGItem: {
        id: 0,
        inventionType: 56,
        inventionTypeName: 'Mualliflik xuquqni ximoya qiluvchi guvoxnomalar',

        inventionName: '',
        inventionAuthorsCount: 0,
        inventionAuthorNames: '',
        inventionNumber: '',

        year: 0,
        mounth: 0,
        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        statId: 0,
        newId: 0,
        news: '',
        inventionDownload: null
      },

      search: '',
      headers: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Patent raqami' },
        { key: 'inventionAuthorsCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      items: [],

      searchM: '',
      headersM: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Patent raqami' },
        { key: 'inventionAuthorsCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsM: [],

      searchY: '',
      headersY: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Patent raqami' },
        { key: 'inventionAuthorsCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsY: [],

      searchN: '',
      headersN: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Patent raqami' },
        { key: 'inventionAuthorsCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsN: [],

      searchA: '',
      headersA: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Guvohnoma raqami' },
        { key: 'inventionAuthorsCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsA: [],

      searchG: '',
      headersG: [
        { key: 'inventionName', title: 'Patent nomi', align: 'start', sortable: false, },
        { key: 'inventionNumber', title: 'Guvohnoma raqami' },
        { key: 'autinventionAuthorsCounthorCount', title: 'Mualliflar soni' },
        { key: 'inventionAuthorNames', title: 'Mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      itemsG: [],
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
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedItem.id}&newId=${this.editedItem.newId}`)
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
    deleteMItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedMItem.id}&newId=${this.editedMItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editMItem.id}`);
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
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedYItem.id}&newId=${this.editedYItem.newId}`)
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
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedNItem.id}&newId=${this.editedNItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editNItem.id}`);
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
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedAItem.id}&newId=${this.editedAItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editAItem.id}`);
          this.itemsA.splice(this.editedAIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeADelete()
    },
    deleteGItemConfirm () {
      this.overlay = true
      axios.delete(`http://api.nammti.uz/api/inventions/delete?id=${this.editedGItem.id}&newId=${this.editedGItem.newId}`)
        .then(response => {
          console.log(`Delete item with ID ${this.editGItem.id}`);
          this.itemsG.splice(this.editedGIndex, 1)
          this.overlay = false
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
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
        this.overlay = true
        let formData = new FormData();
        formData.append('inventionName', this.editedItem.inventionName)
        formData.append('inventionNumber', this.editedItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedItem.inventionAuthorNames)
        formData.append('newId', this.editedItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedItem.id, formData)
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
        formData.append('userName', this.userName)
        formData.append('type', this.editedItem.inventionType)
        formData.append('typeName', this.editedItem.inventionTypeName)

        formData.append('name', this.editedItem.inventionName)
        formData.append('authorCount', this.editedItem.inventionAuthorsCount)
        formData.append('authorName', this.editedItem.inventionAuthorNames)
        formData.append('number', this.editedItem.inventionNumber)

        formData.append('year', this.editedItem.year)
        formData.append('mounth', this.editedItem.mounth)
        formData.append('department', this.editedItem.department)
        formData.append('faculty', this.editedItem.faculty)

        // files
        for (let file of this.editedItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
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
        formData.append('inventionName', this.editedMItem.inventionName)
        formData.append('inventionNumber', this.editedMItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedMItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedMItem.inventionAuthorNames)
        formData.append('newId', this.editedMItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedMItem.id, formData)
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
        formData.append('userId', this.userId)
        formData.append('userName', this.userName)
        formData.append('type', this.editedMItem.inventionType)
        formData.append('typeName', this.editedMItem.inventionTypeName)

        formData.append('name', this.editedMItem.inventionName)
        formData.append('authorCount', this.editedMItem.inventionAuthorsCount)
        formData.append('authorName', this.editedMItem.inventionAuthorNames)
        formData.append('number', this.editedMItem.inventionNumber)

        formData.append('year', this.editedMItem.year)
        formData.append('mounth', this.editedMItem.mounth)
        formData.append('department', this.editedMItem.department)
        formData.append('faculty', this.editedMItem.faculty)

        // files
        for (let file of this.editedMItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
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
        formData.append('inventionName', this.editedYItem.inventionName)
        formData.append('inventionNumber', this.editedYItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedYItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedYItem.inventionAuthorNames)
        formData.append('newId', this.editedYItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedYItem.id, formData)
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
        formData.append('userId', this.userId)
        formData.append('userName', this.userName)
        formData.append('type', this.editedYItem.inventionType)
        formData.append('typeName', this.editedYItem.inventionTypeName)

        formData.append('name', this.editedYItem.inventionName)
        formData.append('authorCount', this.editedYItem.inventionAuthorsCount)
        formData.append('authorName', this.editedYItem.inventionAuthorNames)
        formData.append('number', this.editedYItem.inventionNumber)

        formData.append('year', this.editedYItem.year)
        formData.append('mounth', this.editedYItem.mounth)
        formData.append('department', this.editedYItem.department)
        formData.append('faculty', this.editedYItem.faculty)

        // files
        for (let file of this.editedYItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
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
        formData.append('inventionName', this.editedNItem.inventionName)
        formData.append('inventionNumber', this.editedNItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedNItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedNItem.inventionAuthorNames)
        formData.append('newId', this.editedNItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedNItem.id, formData)
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
        formData.append('userId', this.userId)
        formData.append('userName', this.userName)
        formData.append('type', this.editedNItem.inventionType)
        formData.append('typeName', this.editedNItem.inventionTypeName)

        formData.append('name', this.editedNItem.inventionName)
        formData.append('authorCount', this.editedNItem.inventionAuthorsCount)
        formData.append('authorName', this.editedNItem.inventionAuthorNames)
        formData.append('number', this.editedNItem.inventionNumber)

        formData.append('year', this.editedNItem.year)
        formData.append('mounth', this.editedNItem.mounth)
        formData.append('department', this.editedNItem.department)
        formData.append('faculty', this.editedNItem.faculty)

        // files
        for (let file of this.editedNItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
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
        formData.append('inventionName', this.editedAItem.inventionName)
        formData.append('inventionNumber', this.editedAItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedAItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedAItem.inventionAuthorNames)
        formData.append('newId', this.editedAItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedAItem.id, formData)
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
        formData.append('userId', this.userId)
        formData.append('userName', this.userName)
        formData.append('type', this.editedAItem.inventionType)
        formData.append('typeName', this.editedAItem.inventionTypeName)

        formData.append('name', this.editedAItem.inventionName)
        formData.append('authorCount', this.editedAItem.inventionAuthorsCount)
        formData.append('authorName', this.editedAItem.inventionAuthorNames)
        formData.append('number', this.editedAItem.inventionNumber)

        formData.append('year', this.editedAItem.year)
        formData.append('mounth', this.editedAItem.mounth)
        formData.append('department', this.editedAItem.department)
        formData.append('faculty', this.editedAItem.faculty)

        // files
        for (let file of this.editedAItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
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
    saveG () {
      if (this.editedGIndex > -1) {
        this.overlay = true
        let formData = new FormData();
        formData.append('inventionName', this.editedGItem.inventionName)
        formData.append('inventionNumber', this.editedGItem.inventionNumber)
        formData.append('inventionAuthorsCount', this.editedGItem.inventionAuthorsCount)
        formData.append('inventionAuthorNames', this.editedGItem.inventionAuthorNames)
        formData.append('newId', this.editedGItem.newId)

        axios.put("http://api.nammti.uz/api/inventions/update?id="+this.editedGItem.id, formData)
          .then(response => {
            console.log(response.data)
            Object.assign(this.itemsG[this.editedGIndex], this.editedGItem)
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
        formData.append('userName', this.userName)
        formData.append('type', this.editedGItem.inventionType)
        formData.append('typeName', this.editedGItem.inventionTypeName)

        formData.append('name', this.editedGItem.inventionName)
        formData.append('authorCount', this.editedGItem.inventionAuthorsCount)
        formData.append('authorName', this.editedGItem.inventionAuthorNames)
        formData.append('number', this.editedGItem.inventionNumber)

        formData.append('year', this.editedGItem.year)
        formData.append('mounth', this.editedGItem.mounth)
        formData.append('department', this.editedGItem.department)
        formData.append('faculty', this.editedGItem.faculty)

        // files
        for (let file of this.editedGItem.inventionDownload) {
          formData.append("doc", file, file.name);
        }
        axios.post("http://api.nammti.uz/api/inventions/create?userId="+this.userId, formData)
          .then(response => {
            console.log(response.data)
            this.itemsG.push(response.data)
            this.overlay = false
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
      }
      this.closeG()
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
      this.downloadWithAxios("http://api.nammti.uz/api/inventions/download?userId="+item.userId+"&file="+item.workDownload,item.name)
    },
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

  mounted() {
    axios
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=51`)
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
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=52`)
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
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=53`)
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
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=54`)
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
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=55`)
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

    axios
      .get(`http://api.nammti.uz/api/inventions/type?userId=${this.userId}&limit=10&offset=0&type=56`)
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
          this.itemsG.push(data[dataKey])
        }
      });
  }

}
</script>

<style scoped>
.bg-color-container{
  background-color: #5C6BC0;
  color: white;
}
.form-color{
  background-color: #3949AB;
  color: white;
}
</style>
