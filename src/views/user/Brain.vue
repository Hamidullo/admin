<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col cols="12">
        <v-card flat title="“Scopus” bazalaridagi maqolalar">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogS" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{formSTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.name"
                          clearable
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.quotesCount"
                          clearable
                          required
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-select
                          label="Kvartalni tanlang"
                          v-model="editedSItem.quarter"
                          :items="['Q1', 'Q2', 'Q3', 'Q4']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.authorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedSItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.magazineName"
                          clearable
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.magazineCountry"
                          clearable
                          required
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedSItem.doc"
                          v-model="editedSItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedSItem)">Maqolani yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Maqolani o'chirishni hohlaysizmi?</v-card-title>
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
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersS"
          :items="itemsS"
          :search="searchS">
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


      <v-col cols="12">
        <v-card flat
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
                          v-model="editedWItem.name"
                          clearable
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.quotesCount"
                          clearable
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.authorsCount"
                          clearable
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedWItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.magazineName"
                          clearable
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.magazineCountry"
                          clearable
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedWItem.doc"
                          v-model="editedWItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedWItem)">Maqolani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeW">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveW">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogWDelete" width="auto">
              <v-card>
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">“Web of sciense” bazalaridagi maqola o'chirishni hohlaysizmi?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeWDelete">Bekor qilish</v-btn>
                  <v-btn color="red" variant="text" @click="deleteWItemConfirm">O'chirish</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchW"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersW"
          :items="itemsW"
          :search="searchW">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editWItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteWItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <v-card flat
        title="Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)">
        <template v-slot:append>
          <!-- Dialog start -->
          <v-row justify="center" class="mr-2">
            <v-dialog
              v-model="dialogX" persistent width="1024">
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props">
                  Qo'shish
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{formXTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          clearable
                          v-model="editedXItem.name"
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedXItem.quotesCount"
                          clearable
                          required
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedXItem.authorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedXItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedXItem.magazineName"
                          clearable
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedXItem.magazineCountry"
                          clearable
                          required
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedXItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedXItem.doc"
                          v-model="editedXItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedXItem)">Maqolani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeX">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveX">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-dialog v-model="dialogXDelete" width="auto">
            <v-card>
              <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Xorijiy jurnallardagi maqolani o'chirishni hohlaysizmi?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeXDelete">Bekor qilish</v-btn>
                <v-btn color="red" variant="text" @click="deleteXItemConfirm">O'chirish</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchX"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersX"
          :items="itemsX"
          :search="searchX">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editXItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteXItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>


      <v-col cols="12">
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
                  <span class="text-h5">{{formRTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.name"
                          clearable
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.quotesCount"
                          clearable
                          required
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.authorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedRItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.magazineName"
                          clearable
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.magazineCountry"
                          clearable
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedRItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedRItem.doc"
                          v-model="editedRItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedRItem)">Maqolani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeR">
                    Yopish
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="saveR">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-dialog v-model="dialogRDelete" width="auto">
            <v-card>
              <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Respublika jurnallaridagi maqolani o'chirishni hohlaysizmi?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeRDelete">Bekor qilish</v-btn>
                <v-btn color="red" variant="text" @click="deleteRItemConfirm">O'chirish</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Dialog end -->
        </template>
        <template v-slot:text>
          <v-text-field
            v-model="searchR"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details>
          </v-text-field>
        </template>
        <v-data-table
          :headers="headersR"
          :items="itemsR"
          :search="searchR">
          <template v-slot:item.actions="{ item }">
            <v-icon
              size="small"
              class="me-2"
              @click="editRItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon
              size="small"
              @click="deleteRItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12">
        <v-card flat
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
                  <span class="text-h5">{{formMTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.name"
                          clearable
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.conventionName"
                          clearable
                          required
                          label="Nashr etilgan anjuman nomi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.authorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedMItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.datePublishing"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.conventionCountry"
                          clearable
                          required
                          label="Anjuman o'tkazilgan OTM, yoki davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedMItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedMItem.doc"
                          v-model="editedMItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedMItem)">Maqolani yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Xalqaro miqyosdagi anjuman o'chirishni hohlaysizmi?</v-card-title>
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
            v-model="searchA"
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


      <v-col cols="12">
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
                  <span class="text-h5">{{formATitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.name"
                          clearable
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.conventionName"
                          clearable
                          required
                          label="Nashr etilgan anjuman nomi">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.authorsCount"
                          clearable
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedAItem.authorsName"
                          clearable
                          label="Ham mualliflar F.I.SH"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.datePublishing"
                          clearable
                          label="Nashr etilgan sana"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.conventionCountry"
                          clearable
                          required
                          label="Anjuman o'tkazilgan OTM, yoki davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedAItem.articleUrl"
                          clearable
                          label="Maqola joylashgan havola"
                          persistent-hint
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedAItem.doc"
                          v-model="editedAItem.doc"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedAItem)">Maqola yuklash</v-btn>
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
                <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">Respublika miqyosidagi anjuman o'chirishni hohlaysizmi?</v-card-title>
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
      searchS: '',
      headersS: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'quotesCount', title: 'Iqtiboslari soni' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'magazineName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'magazineCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogS: false,
      dialogSDelete: false,
      editedSIndex: -1,
      editedSItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        quarter: '',
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultSItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        quarter: '',
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      itemsS: [
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

      searchW: '',
      headersW: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'quotesCount', title: 'Iqtiboslari soni' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'magazineName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'magazineCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogW: false,
      dialogWDelete: false,
      editedWIndex: -1,
      editedWItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultWItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      itemsW: [
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

      searchX: '',
      headersX: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'quotesCount', title: 'Iqtiboslari soni' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'magazineName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'magazineCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogX: false,
      dialogXDelete: false,
      editedXIndex: -1,
      editedXItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultXItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      itemsX: [
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

      searchR: '',
      headersR: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'quotesCount', title: 'Iqtiboslari soni' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'magazineName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'magazineCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogR: false,
      dialogRDelete: false,
      editedRIndex: -1,
      editedRItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultRItem: {
        id: 0,
        name: '',
        quotesCount: 0,
        authorsCount: 0,
        authorsName: '',
        magazineName: '',
        magazineCountry: '',
        articleUrl: '',
        doc: null,
      },
      itemsR: [
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
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'conventionName', title: 'Nashr etilgan anjuman nomi' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'datePublishing', title: 'Nashr etilgan sana' },
        { key: 'conventionCountry', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        name: '',
        conventionName: '',
        authorsCount: 0,
        authorsName: '',
        datePublishing: '',
        conventionCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultMItem: {
        id: 0,
        name: '',
        conventionName: '',
        authorsCount: 0,
        authorsName: '',
        datePublishing: '',
        conventionCountry: '',
        articleUrl: '',
        doc: null,
      },
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

      searchA: '',
      headersA: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'conventionName', title: 'Nashr etilgan anjuman nomi' },
        { key: 'authorsCount', title: 'Mualliflar soni' },
        { key: 'authorsName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'datePublishing', title: 'Nashr etilgan sana' },
        { key: 'conventionCountry', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
        { key: 'articleUrl', title: 'Maqola joylashgan havola' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        name: '',
        conventionName: '',
        authorsCount: 0,
        authorsName: '',
        datePublishing: '',
        conventionCountry: '',
        articleUrl: '',
        doc: null,
      },
      defaultAItem: {
        id: 0,
        name: '',
        conventionName: '',
        authorsCount: 0,
        authorsName: '',
        datePublishing: '',
        conventionCountry: '',
        articleUrl: '',
        doc: null,
      },
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

    }
  },

  computed: {
    formSTitle () {
      return this.editedSIndex === -1 ? '“Scopus” bazalaridagi maqola qo`shish' : '“Scopus” bazalaridagi maqolani taxrirlash'
    },
    formWTitle () {
      return this.editedWIndex === -1 ? '“Web of sciense” bazalaridagi maqola qo`shish' : '“Web of sciense” bazalaridagi maqola taxrirlash'
    },
    formXTitle () {
      return this.editedXIndex === -1 ? 'Xorijiy jurnallardagi maqola qo`shish' : 'Xorijiy jurnallardagi maqola taxrirlash'
    },
    formRTitle () {
      return this.editedRIndex === -1 ? 'Respublika jurnallaridagi maqola qo`shish' : 'Respublika jurnallaridagi maqola taxrirlash'
    },
    formMTitle () {
      return this.editedMIndex === -1 ? 'Xalqaro miqyosdagi anjuman qo`shish' : 'Xalqaro miqyosdagi anjuman taxrirlash'
    },
    formATitle () {
      return this.editedAIndex === -1 ? 'Respublika miqyosidagi anjuman qo`shish' : 'Respublika miqyosidagi anjuman taxrirlash'
    },
  },

  watch: {
    dialogS (val) {
      val || this.closeS()
    },
    dialogSDelete (val) {
      val || this.closeSDelete()
    },
    dialogW (val) {
      val || this.closeW()
    },
    dialogWDelete (val) {
      val || this.closeWDelete()
    },
    dialogX (val) {
      val || this.closeX()
    },
    dialogXDelete (val) {
      val || this.closeXDelete()
    },
    dialogR (val) {
      val || this.closeR()
    },
    dialogRDelete (val) {
      val || this.closeRDelete()
    },
    dialogM (val) {
      val || this.closeM()
    },
    dialogMDelete (val) {
      val || this.closeMDelete()
    },
    dialogA (val) {
      val || this.closeA()
    },
    dialogADelete (val) {
      val || this.closeADelete()
    },
  },

  methods: {

    editSItem (item) {
      this.editedSIndex = this.itemsS.indexOf(item)
      this.editedSItem = Object.assign({}, item)
      this.dialogS = true
    },
    editWItem (item) {
      this.editedWIndex = this.itemsW.indexOf(item)
      this.editedWItem = Object.assign({}, item)
      this.dialogW = true
    },
    editXItem (item) {
      this.editedXIndex = this.itemsX.indexOf(item)
      this.editedXItem = Object.assign({}, item)
      this.dialogX = true
    },
    editRItem (item) {
      this.editedRIndex = this.itemsR.indexOf(item)
      this.editedRItem = Object.assign({}, item)
      this.dialogR = true
    },
    editMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogM = true
    },
    editAItem (item) {
      this.editedAIndex = this.itemsA.indexOf(item)
      this.editedAItem = Object.assign({}, item)
      this.dialogA = true
    },

    deleteSItem (item) {
      this.editedSIndex = this.itemsS.indexOf(item)
      this.editedSItem = Object.assign({}, item)
      this.dialogSDelete = true
    },
    deleteWItem (item) {
      this.editedWIndex = this.itemsW.indexOf(item)
      this.editedWItem = Object.assign({}, item)
      this.dialogWDelete = true
    },
    deleteXItem (item) {
      this.editedXIndex = this.itemsX.indexOf(item)
      this.editedXItem = Object.assign({}, item)
      this.dialogXDelete = true
    },
    deleteRItem (item) {
      this.editedRIndex = this.itemsR.indexOf(item)
      this.editedRItem = Object.assign({}, item)
      this.dialogRDelete = true
    },
    deleteMItem (item) {
      this.editedMIndex = this.itemsM.indexOf(item)
      this.editedMItem = Object.assign({}, item)
      this.dialogMDelete = true
    },
    deleteAItem (item) {
      this.editedAIndex = this.itemsA.indexOf(item)
      this.editedAItem = Object.assign({}, item)
      this.dialogADelete = true
    },

    deleteSItemConfirm () {
      this.itemsS.splice(this.editedSIndex, 1)
      this.closeSDelete()
    },
    deleteWItemConfirm () {
      this.itemsW.splice(this.editedWIndex, 1)
      this.closeWDelete()
    },
    deleteXItemConfirm () {
      this.itemsX.splice(this.editedXIndex, 1)
      this.closeXDelete()
    },
    deleteRItemConfirm () {
      this.itemsR.splice(this.editedRIndex, 1)
      this.closeRDelete()
    },
    deleteMItemConfirm () {
      this.itemsM.splice(this.editedMIndex, 1)
      this.closeMDelete()
    },
    deleteAItemConfirm () {
      this.itemsA.splice(this.editedAIndex, 1)
      this.closeADelete()
    },

    closeS () {
      this.dialogS = false
      this.$nextTick(() => {
        this.editedSItem = Object.assign({}, this.defaultSItem)
        this.editedSIndex = -1
      })
    },
    closeW () {
      this.dialogW = false
      this.$nextTick(() => {
        this.editedWItem = Object.assign({}, this.defaultWItem)
        this.editedWIndex = -1
      })
    },
    closeX () {
      this.dialogX = false
      this.$nextTick(() => {
        this.editedXItem = Object.assign({}, this.defaultXItem)
        this.editedXIndex = -1
      })
    },
    closeR () {
      this.dialogR = false
      this.$nextTick(() => {
        this.editedRItem = Object.assign({}, this.defaultRItem)
        this.editedRIndex = -1
      })
    },
    closeM () {
      this.dialogM = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeA () {
      this.dialogA = false
      this.$nextTick(() => {
        this.editedAItem = Object.assign({}, this.defaultAItem)
        this.editedAIndex = -1
      })
    },

    closeSDelete () {
      this.dialogSDelete = false
      this.$nextTick(() => {
        this.editedSItem = Object.assign({}, this.defaultSItem)
        this.editedSIndex = -1
      })
    },
    closeWDelete () {
      this.dialogWDelete = false
      this.$nextTick(() => {
        this.editedWItem = Object.assign({}, this.defaultWItem)
        this.editedWIndex = -1
      })
    },
    closeXDelete () {
      this.dialogXDelete = false
      this.$nextTick(() => {
        this.editedXItem = Object.assign({}, this.defaultXItem)
        this.editedXIndex = -1
      })
    },
    closeRDelete () {
      this.dialogRDelete = false
      this.$nextTick(() => {
        this.editedRItem = Object.assign({}, this.defaultRItem)
        this.editedRIndex = -1
      })
    },
    closeMDelete () {
      this.dialogMDelete = false
      this.$nextTick(() => {
        this.editedMItem = Object.assign({}, this.defaultMItem)
        this.editedMIndex = -1
      })
    },
    closeADelete () {
      this.dialogADelete = false
      this.$nextTick(() => {
        this.editedAItem = Object.assign({}, this.defaultAItem)
        this.editedAIndex = -1
      })
    },

    saveS () {
      if (this.editedSIndex > -1) {
        Object.assign(this.itemsS[this.editedSIndex], this.editedSItem)
      } else {
        this.itemsS.push(this.editedSItem)
      }
      this.closeS()
    },
    saveW () {
      if (this.editedWIndex > -1) {
        Object.assign(this.itemsW[this.editedWIndex], this.editedWItem)
      } else {
        this.itemsW.push(this.editedWItem)
      }
      this.closeW()
    },
    saveX () {
      if (this.editedXIndex > -1) {
        Object.assign(this.itemsX[this.editedXIndex], this.editedXItem)
      } else {
        this.itemsX.push(this.editedXItem)
      }
      this.close()
    },
    saveR () {
      if (this.editedRIndex > -1) {
        Object.assign(this.itemsR[this.editedRIndex], this.editedRItem)
      } else {
        this.itemsR.push(this.editedRItem)
      }
      this.close()
    },
    saveM () {
      if (this.editedMIndex > -1) {
        Object.assign(this.itemsM[this.editedMIndex], this.editedMItem)
      } else {
        this.itemsM.push(this.editedMItem)
      }
      this.close()
    },
    saveA () {
      if (this.editedAIndex > -1) {
        Object.assign(this.itemsA[this.editedAIndex], this.editedAItem)
      } else {
        this.itemsA.push(this.editedAItem)
      }
      this.close()
    },

    downloadDoc(item){

    }

  },

}
</script>

<style scoped>

</style>
