<template>
  <v-container  class="bg-grey-lighten-2" align="center" justify="center" fluid>
    <v-card rounded="5" class="pt-10 pl-10 pb-10 pr-10">
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ editedItem.newTypeName }}</span>
      </v-row>
      <!-- info -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="F.I.SH"
            v-model="editedItem.userName"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Hujjat nomi"
            v-model="editedItem.newName"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-file-document">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Mualliflar soni"
            v-model="editedItem.newAuthCount"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account-group">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Ham mualliflar"
            v-model="editedItem.newAuthName"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-account-multiple-check">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Nashr etilgan yil"
            v-model="editedItem.year"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-calendar-multiple-check">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Nashr etilgan oy"
            v-model="editedItem.newName"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-numeric">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Hujjat holati"
            v-model="editedItem.newSeen"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-numeric">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Hujjatni ko'rib chiqqan hodim"
            v-model="editedItem.newConfirmationName"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-numeric">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Hujjat ko'rib chiqilgan vaqt"
            v-model="editedItem.newConfirmationTime"
            readonly
            clearable
            outlined
            shaped
            prepend-inner-icon="mdi-numeric">
          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-btn size="x-large" rounded="sm" block class="bg-grey-lighten-4" prepend-icon="mdi-download-circle">Hujjatni yuklash</v-btn>
        </v-col>
      </v-row>

    </v-card>

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
  data (){
    return{
      overlay: false,
      editedItem: {
        id: 0,
        newName: '',
        newTypeName: '',
        newAuthCount: '',
        newAuthName: '',
        newMagName: '',
        newMagCountry: '',
        year: 0,
        mounth: 0,
        userName: '',
        tableName: '',
        department: '',
        faculty: '',
        newSeen: '',
        newConfirmation: '',
        newConfirmationName: '',
        newConfirmationTime: '',
        newFileUploaded: ''
      },
    }
  },

  mounted() {
    const id = this.$route.params.id
    this.overlay = true
    axios.get(`http://api.nammti.uz/api/news/one?id=${id}`)
      .then(response => {
        const data  = response.data
        this.overlay = false
        if (data.newSeen === 1){
            data.newSeen = 'Tekshirilmoqda'
          } else if (data.newSeen === 2){
            data.newSeen = 'Tasdiqlandi'
          } else {
            data.newSeen = 'Rad etildi'
          }
          this.editedItem = data
      }).catch(error => {
        this.overlay = false
            this.errorMessage = error.message;
            this.overlay = false
            console.error("There was an error!", error);
          });
  },
};
</script>

<style>

</style>
