<template>
  <v-container class="py-8 px-6 "
  fluid>

    <v-row>
      <v-col cols="12">
        <v-card class="bg-color-container" flat title="“Scopus” bazalaridagi maqolalar">
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
              <v-card class="form-color">
                <v-card-title>
                  <span class="text-h5">{{formSTitle}}</span>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.brainName"
                          clearable
                          :rules="rules"
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.brainQuotesCount"
                          clearable
                          :rules="rules"
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
                          :rules="rules"
                          v-model="editedSItem.quarter"
                          :items="['Q1', 'Q2', 'Q3', 'Q4']">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedSItem.brainAuthorCount"
                          clearable
                          :rules="rules"
                          required
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="8">
                        <v-text-field
                          v-model="editedSItem.brainAuthorName"
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
                          v-model="editedSItem.brainMagName"
                          clearable
                          :rules="rules"
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedSItem.brainMagCountry"
                          clearable
                          required
                          :rules="rules"
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedSItem.brainLink"
                          clearable
                          :rules="rules"
                          label="Maqola joylashgan havola"
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
                          :rules="rules"
                          v-model="editedSItem.year"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan oy"
                          :rules="rules"
                          v-model="editedSItem.mounth"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedSItem.brainUploaded"
                          v-model="editedSItem.brainUploaded"
                          show-size
                          :rules="rules"
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedSItem)">Maqolani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="bg-red"
                    variant="text"
                    @click="closeS">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="saveS">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogSDelete" width="auto">
              <v-card class="form-color">
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
          class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="“Web of sciense” bazalaridagi maqolalar">
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
              <v-card class="form-color">
                <v-card-title>
                  <span class="text-h5">{{ formWTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form">
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.brainName"
                          clearable
                          :rules="rules"
                          label="Nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.brainQuotesCount"
                          clearable
                          :rules="rules"
                          label="Iqtiboslar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4">
                        <v-text-field
                          v-model="editedWItem.brainAuthorCount"
                          clearable
                          :rules="rules"
                          label="Mualliflar soni">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-text-field
                          v-model="editedWItem.brainAuthorName"
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
                          v-model="editedWItem.brainMagName"
                          clearable
                          :rules="rules"
                          label="Nashr etilgan jurnal nomi"
                          required>
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedWItem.brainMagCountry"
                          clearable
                          :rules="rules"
                          label="Jurnal nashr etilgan davlat">
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field
                          v-model="editedWItem.brainLink"
                          clearable
                          :rules="rules"
                          label="Maqola joylashgan havola"
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
                          v-model="editedWItem.year"
                          :rules="rules"
                          :items="years">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="3">
                        <v-select
                          label="Nashr etilgan oy"
                          v-model="editedWItem.mounth"
                          :rules="rules"
                          :items="mounth">
                        </v-select>
                      </v-col>
                      <v-col
                        cols="12">
                        <v-file-input
                          v-if="!editedWItem.brainUploaded"
                          v-model="editedWItem.brainUploaded"
                          :rules="rules"
                          show-size
                          label="Maqola yuklash">
                        </v-file-input>
                        <v-btn size="x-large" v-else @click="downloadDoc(editedWItem)">Maqolani yuklash</v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="bg-red"
                    variant="text"
                    @click="closeW">
                    Yopish
                  </v-btn>
                  <v-btn
                    class="bg-green-lighten-1"
                    variant="text"
                    @click="saveW">
                    Saqlash
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogWDelete" width="auto">
              <v-card class="form-color">
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
          class="bg-color-container"
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


      <v-col cols="12">
        <v-card class="bg-color-container" flat title="“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiyalar">
          <template v-slot:append>
            <!-- Dialog start -->
            <v-row justify="center" class="mr-2">
              <v-dialog v-model="dialogD" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props">
                    Qo'shish
                  </v-btn>
                </template>
                <v-card class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{ formDTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedDItem.brainName"
                            clearable
                            :rules="rules"
                            label="Nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedDItem.brainQuotesCount"
                            clearable
                            :rules="rules"
                            label="Iqtiboslar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedDItem.brainAuthorCount"
                            clearable
                            :rules="rules"
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedDItem.brainAuthorName"
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
                          <v-select
                            label="Turi"
                            :rules="rules"
                            v-model="editedDItem.brainMagCountry"
                            :items="['IAP','E3','AIP','Boshqa']">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.brainMagName"
                            clearable
                            :rules="rules"
                            label="Konferentsiya nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedDItem.brainLink"
                            clearable
                            :rules="rules"
                            label="Maqola joylashgan havola"
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
                            :rules="rules"
                            v-model="editedDItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            :rules="rules"
                            label="Nashr etilgan oy"
                            v-model="editedDItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            :rules="rules"
                            v-if="!editedDItem.brainUploaded"
                            v-model="editedDItem.brainUploaded"
                            show-size
                            label="Maqola yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedDItem)">Maqolani yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeD">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveD">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDDelete" width="auto">
                <v-card class="form-color">
                  <v-card-title class="text-h5 text-center px-4 pt-4 mx-4 my-4">“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiyani o'chirishni hohlaysizmi?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeDDelete">Bekor qilish</v-btn>
                    <v-btn color="red" variant="text" @click="deleteDItemConfirm">O'chirish</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <!-- Dialog end -->
          </template>
          <template v-slot:text>
            <v-text-field
              v-model="searchD"
              label="Qidiruv..."
              prepend-inner-icon="mdi-magnify"
              single-line
              variant="outlined"
              hide-details
            ></v-text-field>
          </template>
          <v-data-table
            :headers="headersD"
            :items="itemsD"
            class="bg-color-container"
            :search="searchD">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="editDItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                size="small"
                @click="deleteDItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="bg-color-container" flat title="Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)">
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
                <v-card class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{formXTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form  ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            clearable
                            :rules="rules"
                            v-model="editedXItem.brainName"
                            label="Nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedXItem.brainQuotesCount"
                            clearable
                            :rules="rules"
                            required
                            label="Iqtiboslar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedXItem.brainAuthorCount"
                            clearable
                            :rules="rules"
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedXItem.brainAuthorName"
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
                            v-model="editedXItem.brainMagName"
                            clearable
                            :rules="rules"
                            label="Nashr etilgan jurnal nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedXItem.brainMagCountry"
                            clearable
                            required
                            :rules="rules"
                            label="Jurnal nashr etilgan davlat">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedXItem.brainLink"
                            clearable
                            :rules="rules"
                            label="Maqola joylashgan havola"
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
                            v-model="editedXItem.year"
                            :rules="rules"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Nashr etilgan oy"
                            v-model="editedXItem.mounth"
                            :rules="rules"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-file-input
                            v-if="!editedXItem.brainUploaded"
                            v-model="editedXItem.brainUploaded"
                            :rules="rules"
                            show-size
                            label="Maqola yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedXItem)">Maqolani yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeX">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveX">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-dialog v-model="dialogXDelete" width="auto">
              <v-card class="form-color">
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
            class="bg-color-container"
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
        <v-card class="bg-color-container" flat title="Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi)">
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
                <v-card class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{formRTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedRItem.brainName"
                            :rules="rules"
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
                            v-model="editedRItem.brainQuotesCount"
                            :rules="rules"
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
                            v-model="editedRItem.brainAuthorCount"
                            :rules="rules"
                            clearable
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedRItem.brainAuthorName"
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
                            v-model="editedRItem.brainMagName"
                            :rules="rules"
                            clearable
                            label="Nashr etilgan jurnal nomi"
                            required>
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            :rules="rules"
                            v-model="editedRItem.brainLink"
                            clearable
                            label="Maqola joylashgan havola"
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
                            :rules="rules"
                            v-model="editedRItem.year"
                            :items="years">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="3">
                          <v-select
                            label="Nashr etilgan oy"
                            :rules="rules"
                            v-model="editedRItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedRItem.brainUploaded"
                            :rules="rules"
                            v-model="editedRItem.brainUploaded"
                            show-size
                            label="Maqola yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedRItem)">Maqolani yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="bg-red"
                      variant="text"
                      @click="closeR">
                      Yopish
                    </v-btn>
                    <v-btn
                      class="bg-green-lighten-1"
                      variant="text"
                      @click="saveR">
                      Saqlash
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-dialog v-model="dialogRDelete" width="auto">
              <v-card class="form-color">
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
            class="bg-color-container"
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

      <v-col cols="12">
        <v-card class="bg-color-container" flat title="Xalqaro miqyosdagi anjumanlar">
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
                <v-card class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{formMTitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            :rules="rules"
                            v-model="editedMItem.brainName"
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
                            v-model="editedMItem.brainMagName"
                            clearable
                            :rules="rules"
                            required
                            label="Nashr etilgan anjuman nomi">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedMItem.brainAuthorCount"
                            clearable
                            :rules="rules"
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedMItem.brainAuthorName"
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
                            v-model="editedMItem.brainMagCountry"
                            clearable
                            :rules="rules"
                            required
                            label="Anjuman o'tkazilgan OTM, yoki davlat">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedMItem.brainLink"
                            clearable
                            :rules="rules"
                            label="Maqola joylashgan havola"
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
                            :rules="rules"
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
                            :rules="rules"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedMItem.brainUploaded"
                            :rules="rules"
                            v-model="editedMItem.brainUploaded"
                            show-size
                            label="Maqola yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedMItem)">Maqolani yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
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
                <v-card class="form-color">
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


      <v-col cols="12">
        <v-card class="bg-color-container" flat title="Respublika miqyosidagi anjumanlar">
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
                <v-card class="form-color">
                  <v-card-title>
                    <span class="text-h5">{{formATitle}}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            :rules="rules"
                            v-model="editedAItem.brainName"
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
                            v-model="editedAItem.brainMagName"
                            clearable
                            :rules="rules"
                            required
                            label="Nashr etilgan anjuman nomi">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4">
                          <v-text-field
                            v-model="editedAItem.brainAuthorCount"
                            clearable
                            :rules="rules"
                            required
                            label="Mualliflar soni">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12">
                          <v-text-field
                            v-model="editedAItem.brainAuthorName"
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
                            :rules="rules"
                            v-model="editedAItem.brainMagCountry"
                            clearable
                            required
                            label="Anjuman o'tkazilgan OTM, yoki davlat">
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-text-field
                            v-model="editedAItem.brainLink"
                            :rules="rules"
                            clearable
                            label="Maqola joylashgan havola"
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
                            :rules="rules"
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
                            :rules="rules"
                            v-model="editedAItem.mounth"
                            :items="mounth">
                          </v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6">
                          <v-file-input
                            v-if="!editedAItem.brainUploaded"
                            :rules="rules"
                            v-model="editedAItem.brainUploaded"
                            show-size
                            label="Maqola yuklash">
                          </v-file-input>
                          <v-btn size="x-large" v-else @click="downloadDoc(editedAItem)">Maqola yuklash</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
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
                <v-card class="form-color">
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

    <v-snackbar
      :timeout="3000"
      color="red"
      v-model="snackF"
      elevation="24">
      Hujjatni yuklashda hatolik!
    </v-snackbar>

    <v-snackbar
      :timeout="3000"
      color="success"
      v-model="snackS"
      elevation="24">
      Hujjat muvaffaqiyatli yuklandi!
    </v-snackbar>

    <v-snackbar
      :timeout="3000"
      color="success"
      v-model="snackD"
      elevation="24">
      Hujjat o'chirildi!
    </v-snackbar>

  </v-container>
</template>

<script>
import axios from "axios";
import url from "@/utils/url";

export default {
  data () {
    return {
      overlay: false,
      rules: [
        value => {
          if (value) return true
          return 'Qator bo`sh bo`lmasligi kerak.'
        },
      ],
      snackF: false,
      snackS: false,
      snackD: false,
      userId: localStorage.getItem("user-userId"),
      userName: localStorage.getItem("user-name"),
      userPosition: localStorage.getItem("user-position"),
      years: [2023,2024],
      mounth: [1,2,3,4,5,6,7,8,9,10,11,12],

      searchS: '',
      headersS: [
        { key: 'brainName', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainQuotesCount', title: 'Iqtiboslari soni' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'brainMagName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'brainMagCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogS: false,
      dialogSDelete: false,
      editedSIndex: -1,
      editedSItem: {
        id: 0,
        brainType: 31,
        brainTypeName: '“Scopus” bazalaridagi maqolalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultSItem: {
        id: 0,
        brainType: 31,
        brainTypeName: '“Scopus” bazalaridagi maqolalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsS: [],

      searchW: '',
      headersW: [
        { key: 'brainName', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainQuotesCount', title: 'Iqtiboslari soni' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'brainMagName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'brainMagCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogW: false,
      dialogWDelete: false,
      editedWIndex: -1,
      editedWItem: {
        id: 0,
        brainType: 32,
        brainTypeName: '“Web of sciense” bazalaridagi maqolalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultWItem: {
        id: 0,
        brainType: 32,
        brainTypeName: '“Web of sciense” bazalaridagi maqolalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsW: [],

      searchX: '',
      headersX: [
        { key: 'brainName', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainQuotesCount', title: 'Iqtiboslari soni' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'brainMagName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'brainMagCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogX: false,
      dialogXDelete: false,
      editedXIndex: -1,
      editedXItem: {
        id: 0,
        brainType: 33,
        brainTypeName: 'Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultXItem: {
        id: 0,
        brainType: 33,
        brainTypeName: 'Xorijiy jurnallardagi maqolalar (OAK ro’yxatidagi)',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsX: [],

      searchR: '',
      headersR: [
        { key: 'brainName', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainQuotesCount', title: 'Iqtiboslari soni' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'brainMagName', title: 'Nashr etilgan jurnal nomi' },
        { key: 'brainMagCountry', title: 'Jurnal nashr etiladigan davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogR: false,
      dialogRDelete: false,
      editedRIndex: -1,
      editedRItem: {
        id: 0,
        brainType: 34,
        brainTypeName: 'Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi)',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultRItem: {
        id: 0,
        brainType: 34,
        brainTypeName: 'Respublika jurnallaridagi maqolalar (OAK ro’yxatidagi)',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsR: [],

      searchM: '',
      headersM: [
        { key: 'brainName', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainQuotesCount', title: 'Nashr etilgan anjuman nomi' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'brainMagCountry', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogM: false,
      dialogMDelete: false,
      editedMIndex: -1,
      editedMItem: {
        id: 0,
        brainType: 35,
        brainTypeName: 'Xalqaro miqyosdagi anjumanlar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultMItem: {
        id: 0,
        brainType: 35,
        brainTypeName: 'Xalqaro miqyosdagi anjumanlar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsM: [],

      searchA: '',
      headersA: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainMagName', title: 'Nashr etilgan anjuman nomi' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'brainMagCountry', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogA: false,
      dialogADelete: false,
      editedAIndex: -1,
      editedAItem: {
        id: 0,
        brainType: 36,
        brainTypeName: 'Respublika miqyosidagi anjumanlar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultAItem: {
        id: 0,
        brainType: 36,
        brainTypeName: 'Respublika miqyosidagi anjumanlar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsA: [],

      searchD: '',
      headersD: [
        { key: 'name', title: 'Nomi',align: 'start', sortable: false,},
        { key: 'brainMagName', title: 'Nashr etilgan anjuman nomi' },
        { key: 'brainAuthorCount', title: 'Mualliflar soni' },
        { key: 'brainAuthorName', title: 'Ham mualliflar F.I.Sh' },
        { key: 'year', title: 'Nashr etilgan yil' },
        { key: 'brainMagCountry', title: 'Anjuman o’tkazilgan OTM, ITM yoki davlat' },
        { key: 'brainLink', title: 'Maqola joylashgan havola' },
        { key: 'news', title: 'Hujjat holati' },
        { key: 'actions', title: 'Amallar',align: 'start', sortable: false },
      ],
      dialogD: false,
      dialogDDelete: false,
      editedDIndex: -1,
      editedDItem: {
        id: 0,
        brainType: 37,
        brainTypeName: '“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiyalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      defaultDItem: {
        id: 0,
        brainType: 37,
        brainTypeName: '“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiyalar',

        brainName: '',
        brainQuotesCount: 0,
        quarter: '',
        brainAuthorCount: 0,
        brainAuthorName: '',
        brainMagName: '',
        brainMagCountry: '',
        brainLink: '',

        userName: localStorage.getItem("user-name"),
        department: localStorage.getItem("user-department"),
        faculty: localStorage.getItem("user-faculty"),
        year: 0,
        mounth: 0,
        statId: 0,
        newId: 0,
        news: '',
        brainUploaded: null,
      },
      itemsD: [],

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
    formDTitle () {
      return this.editedDIndex === -1 ? '“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiya qo`shish' : '“Scopus” va “Web of sciense” bazalarida indeklanuvchi konferentsiyani taxrirlash'
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
    dialogD (val) {
      val || this.closeD()
    },
    dialogDDelete (val) {
      val || this.closeDDelete()
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
    editDItem (item) {
      this.editedDIndex = this.itemsD.indexOf(item)
      this.editedDItem = Object.assign({}, item)
      this.dialogD = true
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
    deleteDItem (item) {
      this.editedDIndex = this.itemsD.indexOf(item)
      this.editedDItem = Object.assign({}, item)
      this.dialogDDelete = true
    },

    deleteSItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedSItem.id}&newId=${this.editedSItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editSItem.id}`);
          this.itemsS.splice(this.editedSIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeSDelete()
    },
    deleteWItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedWItem.id}&newId=${this.editedWItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editWItem.id}`);
          this.itemsW.splice(this.editedWIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeWDelete()
    },
    deleteXItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedXItem.id}&newId=${this.editedXItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editXItem.id}`);
          this.itemsX.splice(this.editedXIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeXDelete()
    },
    deleteRItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedRItem.id}&newId=${this.editedRItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editRItem.id}`);
          this.itemsR.splice(this.editedRIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeRDelete()
    },
    deleteMItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedMItem.id}&newId=${this.editedMItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editMItem.id}`);
          this.itemsM.splice(this.editedMIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeMDelete()
    },
    deleteAItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedAItem.id}&newId=${this.editedAItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editAItem.id}`);
          this.itemsA.splice(this.editedAIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeADelete()
    },
    deleteDItemConfirm () {
      this.overlay = true
      axios.delete(url.baseURL + `/api/brains/delete?id=${this.editedDItem.id}&newId=${this.editedDItem.newId}`)
        .then(response => {
          console.log(`Deleteditem with ID ${this.editDItem.id}`);
          this.itemsD.splice(this.editedDIndex, 1)
          this.overlay = false
          this.snackD = true
        })
        .catch(error => {
          console.error(error);
          this.overlay = false
        });
      this.closeDDelete()
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
    closeD () {
      this.dialogD = false
      this.$nextTick(() => {
        this.editedDItem = Object.assign({}, this.defaultDItem)
        this.editedDIndex = -1
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
    closeDDelete () {
      this.dialogDDelete = false
      this.$nextTick(() => {
        this.editedDItem = Object.assign({}, this.defaultDItem)
        this.editedDIndex = -1
      })
    },

    async saveS () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedSIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedSItem.brainName,
            'authorCount': this.editedSItem.brainAuthorCount,
            'authorName': this.editedSItem.brainAuthorName,
            'magName': this.editedSItem.brainMagName,
            'country': this.editedSItem.brainMagCountry,
            'quotesCount': this.editedSItem.brainQuotesCount,
            'url': this.editedSItem.brainLink,
            'newId': this.editedSItem.newId,
          }


          axios.put(url.baseURL + `/api/brains/update?id=`+this.editedSItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsS[this.editedSIndex], this.editedSItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        } else
        {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedSItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedSItem.brainType)
          formData.append('typeName', this.editedSItem.brainTypeName)
          formData.append('authorCount', this.editedSItem.brainAuthorCount)
          formData.append('authorName', this.editedSItem.brainAuthorName)
          formData.append('magName', this.editedSItem.brainMagName)
          formData.append('country', this.editedSItem.brainMagCountry)
          formData.append('quotesCount', this.editedSItem.brainQuotesCount)
          formData.append('url', this.editedSItem.brainLink)
          formData.append('year', this.editedSItem.year)
          formData.append('mounth', this.editedSItem.mounth)
          formData.append('statId', this.editedSItem.statId)
          formData.append('newId', this.editedSItem.newId)
          formData.append('department', this.editedSItem.department)
          formData.append('faculty', this.editedSItem.faculty)
          formData.append('position', this.userPosition)

          if (this.editedSItem.quarter === 'Q1'){
            formData.append('quarter', '1')
          } else if (this.editedSItem.quarter === 'Q2'){
            formData.append('quarter', '2')
          } else if (this.editedSItem.quarter === 'Q3'){
            formData.append('quarter', '3')
          } else if (this.editedSItem.quarter === 'Q4'){
            formData.append('quarter', '4')
          }

          // files
          for (let file of this.editedSItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL + `/api/brains/create?userId=`+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsS.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeS()
      }
    },
    async saveW () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedWIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedWItem.brainName,
            'authorCount': this.editedWItem.brainAuthorCount,
            'authorName': this.editedWItem.brainAuthorName,
            'magName': this.editedWItem.brainMagName,
            'country': this.editedWItem.brainMagCountry,
            'quotesCount': this.editedWItem.brainQuotesCount,
            'url': this.editedWItem.brainLink,
            'newId': this.editedWItem.newId,
          }


          axios.put(url.baseURL + "/api/brains/update?id="+this.editedWItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsW[this.editedWIndex], this.editedWItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedWItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedWItem.brainType)
          formData.append('typeName', this.editedWItem.brainTypeName)
          formData.append('authorCount', this.editedWItem.brainAuthorCount)
          formData.append('authorName', this.editedWItem.brainAuthorName)
          formData.append('magName', this.editedWItem.brainMagName)
          formData.append('country', this.editedWItem.brainMagCountry)
          formData.append('quotesCount', this.editedWItem.brainQuotesCount)
          formData.append('url', this.editedWItem.brainLink)
          formData.append('year', this.editedWItem.year)
          formData.append('mounth', this.editedWItem.mounth)
          formData.append('statId', this.editedWItem.statId)
          formData.append('newId', this.editedWItem.newId)
          formData.append('department', this.editedWItem.department)
          formData.append('faculty', this.editedWItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedWItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsW.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeW()
      }
    },
    async saveX () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedXIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedXItem.brainName,
            'authorCount': this.editedXItem.brainAuthorCount,
            'authorName': this.editedXItem.brainAuthorName,
            'magName': this.editedXItem.brainMagName,
            'country': this.editedXItem.brainMagCountry,
            'quotesCount': this.editedXItem.brainQuotesCount,
            'url': this.editedXItem.brainLink,
            'newId': this.editedXItem.newId,
          }


          axios.put(url.baseURL +"/api/brains/update?id="+this.editedXItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsX[this.editedXIndex], this.editedXItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedXItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedXItem.brainType)
          formData.append('typeName', this.editedXItem.brainTypeName)
          formData.append('authorCount', this.editedXItem.brainAuthorCount)
          formData.append('authorName', this.editedXItem.brainAuthorName)
          formData.append('magName', this.editedXItem.brainMagName)
          formData.append('country', this.editedXItem.brainMagCountry)
          formData.append('quotesCount', this.editedXItem.brainQuotesCount)
          formData.append('url', this.editedXItem.brainLink)
          formData.append('year', this.editedXItem.year)
          formData.append('mounth', this.editedXItem.mounth)
          formData.append('statId', this.editedXItem.statId)
          formData.append('newId', this.editedXItem.newId)
          formData.append('department', this.editedXItem.department)
          formData.append('faculty', this.editedXItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedXItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsX.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeX()
      }
    },
    async saveR () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedRIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedRItem.brainName,
            'authorCount': this.editedRItem.brainAuthorCount,
            'authorName': this.editedRItem.brainAuthorName,
            'magName': this.editedRItem.brainMagName,
            'country': this.editedRItem.brainMagCountry,
            'quotesCount': this.editedRItem.brainQuotesCount,
            'url': this.editedRItem.brainLink,
            'newId': this.editedRItem.newId,
          }


          axios.put(url.baseURL +"/api/brains/update?id="+this.editedRItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsR[this.editedRIndex], this.editedRItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedRItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedRItem.brainType)
          formData.append('typeName', this.editedRItem.brainTypeName)
          formData.append('authorCount', this.editedRItem.brainAuthorCount)
          formData.append('authorName', this.editedRItem.brainAuthorName)
          formData.append('magName', this.editedRItem.brainMagName)
          formData.append('country', this.editedRItem.brainMagCountry)
          formData.append('quotesCount', this.editedRItem.brainQuotesCount)
          formData.append('url', this.editedRItem.brainLink)
          formData.append('year', this.editedRItem.year)
          formData.append('mounth', this.editedRItem.mounth)
          formData.append('statId', this.editedRItem.statId)
          formData.append('newId', this.editedRItem.newId)
          formData.append('department', this.editedRItem.department)
          formData.append('faculty', this.editedRItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedRItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsR.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeR()
      }
    },
    async saveM () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedMIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedMItem.brainName,
            'authorCount': this.editedMItem.brainAuthorCount,
            'authorName': this.editedMItem.brainAuthorName,
            'magName': this.editedMItem.brainMagName,
            'country': this.editedMItem.brainMagCountry,
            'quotesCount': this.editedMItem.brainQuotesCount,
            'url': this.editedMItem.brainLink,
            'newId': this.editedMItem.newId,
          }

          axios.put(url.baseURL +"/api/brains/update?id="+this.editedMItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsM[this.editedMIndex], this.editedMItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedMItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedMItem.brainType)
          formData.append('typeName', this.editedMItem.brainTypeName)
          formData.append('authorCount', this.editedMItem.brainAuthorCount)
          formData.append('authorName', this.editedMItem.brainAuthorName)
          formData.append('magName', this.editedMItem.brainMagName)
          formData.append('country', this.editedMItem.brainMagCountry)
          formData.append('quotesCount', this.editedMItem.brainQuotesCount)
          formData.append('url', this.editedMItem.brainLink)
          formData.append('year', this.editedMItem.year)
          formData.append('mounth', this.editedMItem.mounth)
          formData.append('statId', this.editedMItem.statId)
          formData.append('newId', this.editedMItem.newId)
          formData.append('department', this.editedMItem.department)
          formData.append('faculty', this.editedMItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedMItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsM.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeM()
      }
    },
    async saveA () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedAIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedAItem.brainName,
            'authorCount': this.editedAItem.brainAuthorCount,
            'authorName': this.editedAItem.brainAuthorName,
            'magName': this.editedAItem.brainMagName,
            'country': this.editedAItem.brainMagCountry,
            'quotesCount': this.editedAItem.brainQuotesCount,
            'url': this.editedAItem.brainLink,
            'newId': this.editedAItem.newId,
          }

          axios.put(url.baseURL +"/api/brains/update?id="+this.editedAItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsA[this.editedAIndex], this.editedAItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('name', this.editedAItem.brainName)
          formData.append('userName', this.userName)
          formData.append('type', this.editedAItem.brainType)
          formData.append('typeName', this.editedAItem.brainTypeName)
          formData.append('authorCount', this.editedAItem.brainAuthorCount)
          formData.append('authorName', this.editedAItem.brainAuthorName)
          formData.append('magName', this.editedAItem.brainMagName)
          formData.append('country', this.editedAItem.brainMagCountry)
          formData.append('quotesCount', this.editedAItem.brainQuotesCount)
          formData.append('url', this.editedAItem.brainLink)
          formData.append('year', this.editedAItem.year)
          formData.append('mounth', this.editedAItem.mounth)
          formData.append('statId', this.editedAItem.statId)
          formData.append('newId', this.editedAItem.newId)
          formData.append('department', this.editedAItem.department)
          formData.append('faculty', this.editedAItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedAItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsA.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeA()
      }
    },
    async saveD () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        if (this.editedDIndex > -1) {
          this.overlay = true
          let data = {
            'name': this.editedDItem.brainName,
            'authorCount': this.editedDItem.brainAuthorCount,
            'authorName': this.editedDItem.brainAuthorName,
            'magName': this.editedDItem.brainMagName,
            'country': this.editedDItem.brainMagCountry,
            'quotesCount': this.editedDItem.brainQuotesCount,
            'url': this.editedDItem.brainLink,
            'newId': this.editedDItem.newId,
          }

          axios.put(url.baseURL +"/api/brains/update?id="+this.editedDItem.id, data)
            .then(response => {
              console.log(response.data)
              Object.assign(this.itemsD[this.editedDIndex], this.editedDItem)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        else {
          this.overlay = true
          let formData = new FormData();
          formData.append('userId', this.userId)
          formData.append('userName', this.userName)
          formData.append('type', this.editedDItem.brainType)
          formData.append('typeName', this.editedDItem.brainTypeName)

          formData.append('name', this.editedDItem.brainName)
          formData.append('authorCount', this.editedDItem.brainAuthorCount)
          formData.append('authorName', this.editedDItem.brainAuthorName)
          formData.append('magName', this.editedDItem.brainMagName)
          formData.append('country', this.editedDItem.brainMagCountry)
          formData.append('quotesCount', this.editedDItem.brainQuotesCount)
          formData.append('url', this.editedDItem.brainLink)

          formData.append('year', this.editedDItem.year)
          formData.append('mounth', this.editedDItem.mounth)
          formData.append('statId', this.editedDItem.statId)
          formData.append('newId', this.editedDItem.newId)
          formData.append('department', this.editedDItem.department)
          formData.append('faculty', this.editedDItem.faculty)
          formData.append('position', this.userPosition)

          // files
          for (let file of this.editedDItem.brainUploaded) {
            formData.append("doc", file, file.name);
          }
          axios.post(url.baseURL +"/api/brains/create?userId="+this.userId, formData)
            .then(response => {
              console.log(response.data)
              this.itemsD.push(response.data)
              this.overlay = false
              this.snackS = true;
            })
            .catch(error => {
              this.errorMessage = error.message;
              this.overlay = false
              this.snackF = true;
              console.error("There was an error!", error);
            });
        }
        this.closeD()
      }

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
          console.log("Download end")
          this.forceFileDownload(response, title)
        })
        .catch(() => console.log('error occured'))
    },
    downloadDoc(item) {
      /*let url = "http://api.nammti.uz/api/academics/download?userId="+item.userId+"&file="+item.brainUploaded
      window.location.href = url;*/
      this.downloadWithAxios(url.baseURL +"/api/works/download?userId="+item.userId+"&file="+item.brainUploaded,item.brainUploaded)
    },

  },

  mounted() {
    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=31`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }
          this.itemsS.push(data[dataKey])

        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=32`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }
          this.itemsW.push(data[dataKey])
        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=33`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }

          this.itemsX.push(data[dataKey])
        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=34`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }
          this.itemsR.push(data[dataKey])
        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=35`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }

          this.itemsM.push(data[dataKey])
        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=36`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }

          this.itemsA.push(data[dataKey])
        }
      });

    axios
      .get(url.baseURL +`/api/brains/type?userId=${this.userId}&limit=10&offset=0&type=37`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {
          if (data[dataKey].news === 1){
            data[dataKey].news = 'Tekshirilmoqda'
          } else if (data[dataKey].news === 2){
            data[dataKey].news = 'Tasdiqlandi'
          } else if (data[dataKey].news === 3){
            data[dataKey].news = 'Rad etildi'
          }

          this.itemsD.push(data[dataKey])
        }
      });
  }

}
</script>

<style scoped>
.bg-color-container{
  background-color: #0a97ec;
  color: white;
}
.form-color{
  background-color: #005b8f;
  color: white;
}
</style>
